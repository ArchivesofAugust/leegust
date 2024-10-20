import fs from 'fs'

import { BASE_DIRECTORY } from '@/libs/notes/constants'
import { DirectoryCategoryEnum } from '@/libs/notes/types'
import { isValidCategory } from '@/libs/notes/utils'

const getAllCategories = (): DirectoryCategoryEnum[] => {
  try {
    return fs
      .readdirSync(BASE_DIRECTORY, { withFileTypes: true })
      .filter((dirent) => dirent.isDirectory() && isValidCategory(dirent.name))
      .map((dirent) => dirent.name as DirectoryCategoryEnum)
  } catch (error) {
    console.error('Error reading categories:', error)
    return []
  }
}
export default getAllCategories
