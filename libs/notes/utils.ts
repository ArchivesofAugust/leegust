import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
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
