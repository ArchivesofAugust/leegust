import Link from 'next/link'

import classNames from 'classnames/bind'

import Icon, { IconName } from '@/libs/shared/components/Icon/Icon'
import Layout from '@/libs/shared/components/layout/Layout'
import SplitedText from '@/libs/shared/components/text/SplitedText/SplitedText'

import styles from './HomeLayout.module.scss'

const cx = classNames.bind(styles)

const HomeLayout = () => {
  const title = 'Archives of August | Lee Gust'
  const description =
    "I'm a software engineer in Seoul, South Korea.\nHere, I write about programming, perspectives, and the spaces in between."

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
      icon: 'mail',
      href: 'mailto:archivesofaugust@gmail.com',
    },
  ]

  return (
    <Layout title={title}>
      <div className={cx('container')}>
        <p className={cx('row', 'description')}>
          <SplitedText target={description} />
        </p>
        <div className={cx('row', 'links')}>
          {socials.map((social) => (
            <Link className={cx('link')} href={social.href} key={social.icon}>
              <Icon name={social.icon} size={16} weight="bold" />
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default HomeLayout