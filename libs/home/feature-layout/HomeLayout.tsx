import classNames from 'classnames/bind'

import Categories from '@/libs/home/ui-categories/Categories'
import Layout from '@/libs/shared/components/layout/Layout'
import SplitedText from '@/libs/shared/components/text/SplitedText/SplitedText'

import styles from './HomeLayout.module.scss'

const cx = classNames.bind(styles)

const HomeLayout = () => {
  const TITLE = 'Archives of August'
  const DESCRIPTION = 'Write code. Love design. Somewhere in between, keeping it simple.'

  const items: { name: string; href: string }[] = [
    {
      name: 'THINK,DO,WRITE',
      href: '/',
    },
    {
      name: 'SEE,HEAR',
      href: '/',
    },
    {
      name: 'ABOUT',
      href: '/about',
    },
    {
      name: 'GITHUB',
      href: 'https://github.com/ArchivesofAugust',
    },
    {
      name: 'LINKEDIN',
      href: 'https://www.linkedin.com/in/archivesofaugust',
    },
    {
      name: 'GMAIL',
      href: 'mailto:archivesofaugust@gmail.com',
    },
  ]

  return (
    <Layout title={TITLE} hoverTitle="leegust">
      <div className={cx('container')}>
        <div className={cx('header')}>
          <p className={cx('row', 'description')}>
            <SplitedText target={DESCRIPTION} />
          </p>
          <div className={cx('row', 'contents')}>
            <Categories items={items} />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default HomeLayout
