import fs from 'fs'
import path from 'path'

import createDOMPurify from 'dompurify'
import matter from 'gray-matter'
import { JSDOM } from 'jsdom'

import {
  ALLOWED_EXTENSIONS,
  NOTES_DIRECTORY,
  TAG_LIST_NEEDING_CUSTOM_CLASS,
  TOC_TAGS,
} from '@/libs/notes/constants'
import { DirectoryCategoryEnum, HeadingTag, MatterResult, Note, TocItem } from '@/libs/notes/types'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getImagePath = (src: string) =>
  src.startsWith('http') ? src : path.join(`/${NOTES_DIRECTORY}`, src)

export const isValidCategory = (category?: string): category is DirectoryCategoryEnum =>
  !!category && Object.values(DirectoryCategoryEnum).some((value) => value === category)

export const getCategoryOrDefault = (category?: string): DirectoryCategoryEnum => {
  return isValidCategory(category) ? category : DirectoryCategoryEnum.Uncategorized
}

export const processMarkdownFile = (filePath: string, category: DirectoryCategoryEnum): Note => {
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const matterResult = matter(fileContents)
  const uuid = path.basename(filePath, '.md')
  return {
    uuid,
    category: getCategoryOrDefault(category),
    ...(matterResult.data as MatterResult),
  }
}

const isValidImage = (imageSrc: string) => {
  const extension = imageSrc.split('.').pop()?.toLowerCase()
  return extension && ALLOWED_EXTENSIONS.includes(extension)
}

const adjustImagePaths = (htmlContent: string, basePath: string): string => {
  return htmlContent.replace(
    /<img([^>]*)src="\.\/([^"]*)"([^>]*)>/g,
    (match, before, src, after) => {
      const newSrc = `${basePath}/${src}`
      if (!isValidImage(newSrc)) {
        return `<p>Invalid image format: ${newSrc}</p>`
      }
      return `<img${before}src="${newSrc}"${after}>`
    },
  )
}

const addClassAndIdToNoteElement = (node: Element, tocItems: TocItem[]) => {
  const tagName = node.nodeName.toLowerCase()
  if (TAG_LIST_NEEDING_CUSTOM_CLASS.includes(tagName)) {
    node.classList.add('notes', `note-${tagName}`)
  }
  const isHeadingTag = (tag: string): tag is HeadingTag => TOC_TAGS.some((tocTag) => tocTag === tag)
  if (isHeadingTag(tagName)) {
    const id = `note-${tagName}-${tocItems.length + 1}`
    node.id = id
    tocItems.push({
      id,
      tag: tagName,
      text: node.textContent || '',
    })
  }
}

export const sanitizeHtml = (
  html: string,
  imageBasePath: string,
): { sanitizedHtml: string; tocItems: TocItem[] } => {
  const adjustedHtml = adjustImagePaths(html, imageBasePath)
  const window = new JSDOM('').window
  const DOMPurify = createDOMPurify(window as unknown as Window)

  const tocItems: TocItem[] = []

  DOMPurify.addHook('afterSanitizeAttributes', (node) => addClassAndIdToNoteElement(node, tocItems))
  const sanitizedHtml = DOMPurify.sanitize(adjustedHtml, { ADD_ATTR: ['class', 'id'] })
  return { sanitizedHtml, tocItems }
}

export const categorizeTocItems = (tocItems: TocItem[]) => {
  return tocItems.reduce(
    (acc, item) => {
      if (!acc[item.tag]) {
        acc[item.tag] = []
      }
      acc[item.tag].push(item)
      return acc
    },
    {} as Record<HeadingTag, TocItem[]>,
  )
}

export const moveToTocItem = (elementId: string) => {
  const element = document.getElementById(elementId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
