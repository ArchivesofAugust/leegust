import path from 'path'

export const NOTES_DIRECTORY = 'notes'

export const BASE_DIRECTORY = path.join(process.cwd(), NOTES_DIRECTORY)

export const ALLOWED_EXTENSIONS = [
  'jpg',
  'jpeg',
  'png',
  'gif',
  'svg',
]
