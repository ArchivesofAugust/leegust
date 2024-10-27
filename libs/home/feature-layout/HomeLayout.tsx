import Link from 'next/link'

import classNames from 'classnames/bind'

import Icon, { IconName } from '@/libs/shared/components/Icon/Icon'
import Layout from '@/libs/shared/components/layout/Layout'
import SplitedText from '@/libs/shared/components/text/SplitedText/SplitedText'

import styles from './HomeLayout.module.scss'

const cx = classNames.bind(styles)

const HomeLayout = () => {
  const title = 'Archives of August'
  const description =
    "I'm a maker who codes and designs in Seoul, South Korea.\nHere, I write about things I see and hear, and the spaces in between."

  const socials: { icon: IconName; href: string }[] = [
    {
      icon: 'github',
      href: 'https://github.com/ArchivesofAugust',
    },
    {
      icon: 'linkedin',
      href: 'https://www.linkedin.com/in/archivesofaugust',
    },
    {
      icon: 'gmail',
      href: 'mailto:archivesofaugust@gmail.com',
    },
    {
      icon: 'about',
      href: '/about',
    },
  ]

  return (
    <Layout title={title} hoverTitle="leegust">
      <div className={cx('container')}>
        <div className={cx('header')}>
          <p className={cx('row', 'description')}>
            <SplitedText target={description} />
          </p>
          <div className={cx('row', 'links')}>
            {socials.map((social) => (
              <Link className={cx('link')} href={social.href} key={social.icon}>
                <Icon name={social.icon} size={18} weight="bold" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default HomeLayout
