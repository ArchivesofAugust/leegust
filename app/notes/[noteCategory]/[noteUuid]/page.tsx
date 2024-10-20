import { notFound } from 'next/navigation'

import classNames from 'classnames/bind'

import { NOTES_DIRECTORY } from '@/libs/notes/constants'
import getNote from '@/libs/notes/data-access-note/getNote'
import getNotes from '@/libs/notes/data-access-note/getNotes'
import { categorizeTocItems, getNoteNavigation, sanitizeHtml } from '@/libs/notes/utils'

import styles from './page.module.scss'

const cx = classNames.bind(styles)

interface Props {
  params: { noteCategory?: string; noteUuid?: string }
}

const page = async ({ params }: Props) => {
  const { noteCategory, noteUuid } = params
  if (!noteUuid) {
    notFound()
  }
  const note = await getNote(noteUuid, noteCategory)
  if (!note || !note.contentHtml) {
    notFound()
  }
  const imageBasePath = `/${NOTES_DIRECTORY}/${noteCategory}`
  const { sanitizedHtml, tocItems } = sanitizeHtml(note.contentHtml, imageBasePath)
  const { hasPrevious, hasNext, previousUuid, nextUuid } = getNoteNavigation(
    getNotes(noteCategory),
    noteUuid,
  )
  console.log(hasPrevious, hasNext, previousUuid, nextUuid)
  console.log(categorizeTocItems(tocItems))
  return (
    <div className={cx('container')}>
      <div className={cx('wrapper')}>
        <div className={cx('contents')} dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />
      </div>
    </div>
  )
}

export default page
