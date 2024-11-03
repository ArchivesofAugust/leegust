import Link from 'next/link'

import classNames from 'classnames/bind'

import Layout from '@/libs/shared/components/layout/Layout'
import SplitedText from '@/libs/shared/components/text/SplitedText/SplitedText'

import styles from './HomeLayout.module.scss'

const cx = classNames.bind(styles)

const HomeLayout = () => {
  const TITLE = 'leegust'
  const DESCRIPTION = 'write code. love design. keeping it simple.'

  const items: { name: string; href: string }[] = [
    {
      name: 'notes',
      href: 'https://www.notion.so/Notes-Archives-of-August-13205b4b915e80408957e5e8b2a04768?pvs=4',
    },
    {
      name: 'archives, studies',
      href: 'https://www.notion.so/collection-Archives-of-August-13205b4b915e809b8386e1a6d0485c71?pvs=4',
    },
    {
      name: 'about',
      href: 'https://www.notion.so/About-13205b4b915e8011a730c033d17faf4d?pvs=4',
    },
    {
      name: 'github',
      href: 'https://github.com/ArchivesofAugust',
    },
    {
      name: 'linkedin',
      href: 'https://www.linkedin.com/in/archivesofaugust',
    },
    {
      name: 'gmail',
      href: 'mailto:archivesofaugust@gmail.com',
    },
  ]

  const shouldOpenNewTab = (href: string) => {
    return href.startsWith('http') || href.startsWith('mailto')
  }

  return (
    <Layout title={TITLE}>
      <div className={cx('container')}>
        <div className={cx('header')}>
          <p className={cx('row', 'description')}>
            <SplitedText target={DESCRIPTION} />
          </p>
          <div className={cx('row', 'contents')}>
            {items.map((item, index) => (
              <li key={index.toString()} className={cx('item')}>
                <Link
                  key={index.toString()}
                  href={item.href}
                  target={shouldOpenNewTab(item.href) ? '_blank' : undefined}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default HomeLayout
