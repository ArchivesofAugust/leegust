import path from 'path'

import { HeadingTag } from '@/libs/notes/types'

export const NOTES_DIRECTORY = 'notes'

export const BASE_DIRECTORY = path.join(process.cwd(), NOTES_DIRECTORY)

export const ALLOWED_EXTENSIONS = [
  'jpg',
  'jpeg',
  'png',
  'gif',
  'svg',
]

export const TAG_LIST_NEEDING_CUSTOM_CLASS = [
  'p',
  'h1',
  'h2',
  'h3',
  'a',
  'ul',
  'ol',
  'li',
  'hr',
  'blockquote',
  'pre',
  'code',
  'img',
  'table',
  'tr',
  'td',
  'th',
]

export const TOC_TAGS: HeadingTag[] = [
  'h1',
  'h2',
  'h3',
]
