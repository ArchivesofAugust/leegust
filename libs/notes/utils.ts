import fs from 'fs'
import path from 'path'

import createDOMPurify from 'dompurify'
import matter from 'gray-matter'
import { JSDOM } from 'jsdom'

import {
  ALLOWED_EXTENSIONS,
  NOTES_DIRECTORY,
  TAG_LIST_NEEDING_CUSTOM_CLASS,
} from '@/libs/notes/constants'
import { DirectoryCategoryEnum, Note } from '@/libs/notes/types'

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
    ...(matterResult.data as { date: string; title: string }),
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

const addClassesToNoteElement = (node: Element) => {
  const tagName = node.nodeName.toLowerCase()
  if (TAG_LIST_NEEDING_CUSTOM_CLASS.includes(tagName)) {
    node.classList.add('notes', `note-${tagName}`)
  }
}

export const sanitizeHtml = (html: string, imageBasePath: string): string => {
  const adjustedHtml = adjustImagePaths(html, imageBasePath)
  const window = new JSDOM('').window
  const DOMPurify = createDOMPurify(window as unknown as Window)
  DOMPurify.addHook('afterSanitizeAttributes', (node) => addClassesToNoteElement(node))
  return DOMPurify.sanitize(adjustedHtml, { ADD_ATTR: ['class'] })
}
