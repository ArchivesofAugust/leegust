import { PropsWithChildren, ReactElement } from 'react'

import Link from 'next/link'

import classNames from 'classnames/bind'

import Icon from '@/libs/shared/components/Icon/Icon'
import SplitedText from '@/libs/shared/components/text/SplitedText/SplitedText'

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
          {backHref && (
            <Link href={backHref} className={cx('back')}>
              <Icon name="back" size={16} weight="duotone" />
            </Link>
          )}
          <SplitedText target={title} />
        </p>
        <div className={cx('children')}>{contents}</div>
      </div>
      {!!footer && <div className={cx('contents', 'footer')}>{footer}</div>}
    </div>
  )
}

export default Layout
