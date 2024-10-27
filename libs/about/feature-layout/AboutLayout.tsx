import Link from 'next/link'

import classNames from 'classnames/bind'

import { AboutSection } from '@/libs/about/types'
import AboutSubList from '@/libs/about/ui-sub-list/AboutSubList'
import Icon from '@/libs/shared/components/Icon/Icon'
import Layout from '@/libs/shared/components/layout/Layout'
import SplitedText from '@/libs/shared/components/text/SplitedText/SplitedText'

import styles from './AboutLayout.module.scss'

const cx = classNames.bind(styles)

const AboutLayout = () => {
  const sections: AboutSection[] = [
    {
      icon: 'work',
      title: 'Work experience',
      items: [
        {
          title: (
            <div className={cx('linkWrapper')}>
              <Link target="_blank" href="https://www.lattice.im/">
                Lattice
              </Link>{' '}
              <SplitedText target=" | November 2023 - Present" />
            </div>
          ),
          items: [
            {
              content: <SplitedText target="Software Engineer, Web Front-End" />,
              items: [
                { content: <SplitedText target="TypeScript, React, Next.js" /> },
                { content: <SplitedText target="Responsible for core features development" /> },
              ],
            },
          ],
        },
        {
          title: (
            <span className={cx('linkWrapper')}>
              <Link target="_blank" href="https://sites.google.com/view/yonseidmlab">
                Digital Media Lab, Yonsei University
              </Link>
              <SplitedText target=" | Summer 2022 (3 months)" />
            </span>
          ),
          items: [
            { content: <SplitedText target="Qualitative UX Research Intern" /> },
            { content: <SplitedText target="Conducted user research and analysis" /> },
          ],
        },
      ],
    },
    {
      icon: 'education',
      title: 'Education',
      items: [
        {
          title: (
            <span className={cx('linkWrapper')}>
              <SplitedText target="Yonsei University, Seoul, South Korea " />
              <SplitedText target="| Graduated: August 2022" />
            </span>
          ),
          items: [
            {
              content: (
                <span className={cx('linkWrapper', 'shouldBeRowInMobile')}>
                  <SplitedText target="B.S. in " />{' '}
                  <Link
                    target="_blank"
                    href="https://che-en.yonsei.ac.kr/che_en/design/design_intro01.do"
                  >
                    Human Environment & Design
                  </Link>
                </span>
              ),
              items: [
                { content: <SplitedText target="Double Major in Culture and Criticism Studies" /> },
                {
                  content: <SplitedText target="Focus areas: UX Design, Product Design" />,
                },
              ],
            },
          ],
        },
      ],
    },
  ]

  return (
    <Layout title="About" hoverTitle="leegust" backHref="/">
      <div className={cx('container')}>
        {sections.map((section, index) => (
          <div key={index} className={cx('section')}>
            <div className={cx('header')}>
              <div className={cx('icon')}>
                <Icon name={section.icon} size={16} weight="regular" />
              </div>
              <h2 className={cx('sectionTitle')}>
                <SplitedText target={section.title} />
              </h2>
            </div>
            {section.items.map((item, itemIndex) => (
              <div key={itemIndex} className={cx('sectionItem')}>
                <div className={cx('itemTitle')}>{item.title}</div>
                <AboutSubList items={item.items} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default AboutLayout
