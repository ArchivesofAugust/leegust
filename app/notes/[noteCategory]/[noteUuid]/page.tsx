import { notFound } from 'next/navigation'
import getNote from '@/libs/notes/data-access-note/getNote'

interface Props {
  params: { noteCategory?: string; noteUuid?: string }
}

const page = async ({ params }: Props) => {
  const { noteCategory, noteUuid } = params
  if (!noteUuid) {
    notFound()
  }
  const note = await getNote(noteUuid, noteCategory)
  if (!note) {
    notFound()
  }
  return <div>detail page</div>
}

export default page
