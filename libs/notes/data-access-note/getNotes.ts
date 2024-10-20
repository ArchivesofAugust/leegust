import fs from 'fs'
import path from 'path'

import { BASE_DIRECTORY } from '@/libs/notes/constants'
import { Note } from '@/libs/notes/types'
import { getCategoryOrDefault, isValidCategory, processMarkdownFile } from '@/libs/notes/utils'

const getNotes = (category?: string): Note[] => {
  const categoryPath = category ? path.join(BASE_DIRECTORY, category) : BASE_DIRECTORY

  try {
    const fileNames = fs.readdirSync(categoryPath, { withFileTypes: true })

    const allNotesData: Note[] = fileNames.flatMap((dirent): Note[] => {
      if (dirent.isDirectory()) {
        const subCategory = dirent.name
        if (isValidCategory(subCategory)) {
          return getNotes(subCategory)
        }
        return []
      }

      if (!dirent.name.endsWith('.md')) return []

      const fullPath = path.join(categoryPath, dirent.name)
      return [processMarkdownFile(fullPath, getCategoryOrDefault(category))]
    })

    return allNotesData.sort((a, b) => (a.date < b.date ? 1 : -1))
  } catch (error) {
    console.error(`Error reading directory ${categoryPath}:`, error)
    return []
  }
}

export default getNotes
