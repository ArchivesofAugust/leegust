import fs from 'fs'
import path from 'path'

import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

import { BASE_DIRECTORY } from '@/libs/notes/constants'
import { MatterResult, Note } from '@/libs/notes/types'
import { getCategoryOrDefault } from '@/libs/notes/utils'

const getNote = async (uuid: string, category?: string): Promise<Note | null> => {
  try {
    const categoryPath = category ? path.join(BASE_DIRECTORY, category) : BASE_DIRECTORY
    const fullPath = path.join(categoryPath, `${uuid}.md`)

    if (!fs.existsSync(fullPath)) {
      throw new Error(`Note file not found: ${fullPath}`)
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)
    const processedContent = await remark().use(html).process(matterResult.content)
    const contentHtml = processedContent.toString()

    return {
      uuid,
      category: getCategoryOrDefault(category),
      contentHtml,
      ...(matterResult.data as MatterResult),
    }
  } catch (error) {
    console.error(`Error processing ${uuid} note:`, error)
    return null
  }
}

export default getNote
