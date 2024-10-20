import fs from 'fs'
import path from 'path'

import createDOMPurify from 'dompurify'
import matter from 'gray-matter'
import { JSDOM } from 'jsdom'

import { ALLOWED_EXTENSIONS, NOTES_DIRECTORY } from '@/libs/notes/constants'
import { DirectoryCategoryEnum, Note } from '@/libs/notes/types'

export const isValidCategory = (category?: string): category is DirectoryCategoryEnum => {
  return (
    !!category && Object.values(DirectoryCategoryEnum).includes(category as DirectoryCategoryEnum)
  )
}

export const getCategoryOrDefault = (category?: string): DirectoryCategoryEnum => {
  return isValidCategory(category)
    ? (category as DirectoryCategoryEnum)
    : DirectoryCategoryEnum.Uncategorized
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

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getImagePath = (src: string) =>
  src.startsWith('http') ? src : path.join(`/${NOTES_DIRECTORY}`, src)

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

export const sanitizeHtml = (html: string, basePath: string): string => {
  const adjustedHtml = adjustImagePaths(html, basePath)
  const window = new JSDOM('').window
  const DOMPurify = createDOMPurify(window as unknown as Window)
  return DOMPurify.sanitize(adjustedHtml)
}
