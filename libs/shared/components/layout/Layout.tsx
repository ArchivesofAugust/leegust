import { PropsWithChildren, ReactElement } from 'react'

import classNames from 'classnames/bind'

import TextSlider from '@/libs/shared/components/text/TextSlider/TextSlider'

import styles from './Layout.module.scss'

const cx = classNames.bind(styles)

interface Props {
  title: string
  footer?: ReactElement
  backHref?: string
}

const Layout = ({ title, footer, backHref, children: contents }: PropsWithChildren<Props>) => {
  return (
    <div className={cx('container')}>
      <div className={cx('contents')}>
        <p className={cx('title')}>
          <TextSlider value={title} href={backHref} />
        </p>
        <div className={cx('children')}>{contents}</div>
      </div>
      {!!footer && <div className={cx('contents', 'footer')}>{footer}</div>}
    </div>
  )
}

export default Layout
