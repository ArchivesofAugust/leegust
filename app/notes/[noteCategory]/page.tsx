import { Metadata } from 'next'

import { notFound } from 'next/navigation'

import getNotes from '@/libs/notes/data-access-note/getNotes'
import { META_DESCRIPTION } from '@/libs/shared/constants/meta'

export const metadata: Metadata = {
  title: 'leegust | notes',
  description: META_DESCRIPTION,
}

interface Props {
  params: { noteCategory?: string }
}

const page = ({ params }: Props) => {
  const { noteCategory } = params
  const notes = getNotes(noteCategory)
  if (!notes.length) {
    notFound()
  }
  return <div>list page</div>
}

export default page
