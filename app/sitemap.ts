import { MetadataRoute } from 'next'

import getNotes from '@/libs/notes/data-access-note/getNotes'
import { META_URL } from '@/libs/shared/constants/meta'
import { isProduction } from '@/libs/shared/functions/environment'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  if (!isProduction()) {
    return []
  }
  const notes = getNotes().map((note) => ({
    url: `${META_URL}/notes/${note.category}/${note.uuid}`,
    lastModified: new Date(note.date).toISOString(),
    changeFrequency: 'weekly' as const,
  }))

  return [
    {
      url: META_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
    },
    ...notes,
  ]
}
