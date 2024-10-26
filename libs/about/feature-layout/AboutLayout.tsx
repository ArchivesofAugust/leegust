import Link from 'next/link'

import classNames from 'classnames/bind'

import { AboutSection } from '@/libs/about/types'
import AboutSubList from '@/libs/about/ui-sub-list/AboutSubList'
import Layout from '@/libs/shared/components/layout/Layout'
import SplitedText from '@/libs/shared/components/text/SplitedText/SplitedText'

import styles from './AboutLayout.module.scss'

const cx = classNames.bind(styles)

const AboutLayout = () => {
  const sections: AboutSection[] = [
    {
      title: 'Work experience',
      items: [
        {
          title: (
            <>
              <Link target="_blank" href="https://www.linkedin.com/company/latticeholdings/people/">
                Lattice
              </Link>{' '}
              | November 2023 - Present
            </>
          ),
          items: [
            {
              content: 'Software Engineer, Web Front-End',
              items: [
                { content: 'TypeScript, React, Next.js' },
                { content: 'Responsible for core features development' },
              ],
            },
          ],
        },
        {
          title: 'Digital Media Lab, Yonsei University | Summer 2022 (3 months)',
          items: [
            { content: 'Qualitative UX Research Intern' },
            { content: 'Conducted user research and analysis' },
          ],
        },
      ],
    },
    {
      title: 'Education',
      items: [
        {
          title: 'Yonsei University, Seoul, South Korea | Graduated: August 2022',
          items: [
            {
              content: (
                <>
                  B.S. in{' '}
                  <Link
                    target="_blank"
                    href="https://che-en.yonsei.ac.kr/che_en/design/design_intro01.do"
                  >
                    Human Environment & Design
                  </Link>
                </>
              ),
              items: [
                { content: 'Double Major in Culture and Criticism Studies' },
                { content: 'Focus areas: UX Design, Product Design, UX Research' },
              ],
            },
          ],
        },
      ],
    },
  ]

  return (
    <Layout title="About" backHref="/">
      <div className={cx('container')}>
        {sections.map((section, index) => (
          <div key={index} className={cx('section')}>
            <h2 className={cx('sectionTitle')}>
              <SplitedText target={section.title} />
            </h2>
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
