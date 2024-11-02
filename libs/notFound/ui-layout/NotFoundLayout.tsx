import classNames from 'classnames/bind'

import IconButton from '@/libs/shared/components/button/IconButton'
import Layout from '@/libs/shared/components/layout/Layout'

import styles from './NotFoundLayout.module.scss'

const cx = classNames.bind(styles)

const ITEMS = [
  'make it simple, but significant.',
  'less is more.',
  'stay simple stay true.',
  'but first, love.',
  'on minimalism.',
  'there is luxury in simplicity.',
  'space is the breath of art.',
  'the best desgin trend is to not follow one.',
]

const NotFoundLayout = () => {
  const description = ITEMS[Math.floor(Math.random() * ITEMS.length)]

  return (
    <Layout title="not found">
      <div className={cx('container')}>
        <div className={cx('row', 'text')}>{description}</div>
        <div className={cx('row', 'buttons')}>
          <IconButton type="goHome" />
          <IconButton type="refresh" />
        </div>
      </div>
    </Layout>
  )
}

export default NotFoundLayout
