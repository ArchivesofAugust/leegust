import { PropsWithChildren } from 'react'

import classNames from 'classnames/bind'

import TextSlider from '@/libs/shared/components/text/TextSlider/TextSlider'

import styles from './Layout.module.scss'

const cx = classNames.bind(styles)

interface Props {
  title: string
}

const Layout = ({ title, children: contents }: PropsWithChildren<Props>) => {
  return (
    <div className={cx('container')}>
      <div className={cx('contents')}>
        <p className={cx('title')}>
          <TextSlider value={title} />
        </p>
        {contents}
      </div>
      <div className={cx('contents', 'footer')}></div>
    </div>
  )
}

export default Layout
