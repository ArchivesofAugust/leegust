import classNames from 'classnames/bind'

import { SubItem } from '@/libs/about/types'

import styles from './AboutSubList.module.scss'

const cx = classNames.bind(styles)

interface Props {
  items: SubItem[]
  depth?: number
}

const AboutSubList = ({ items, depth = 1 }: Props) => {
  return (
    <div className={cx('container')}>
      {items.map((item, index) => (
        <div key={index}>
          <div className={cx('subItem')} style={{ marginLeft: `${depth * 16}px` }}>
            {item.content}
          </div>
          {item.items && <AboutSubList items={item.items} depth={depth + 1} />}
        </div>
      ))}
    </div>
  )
}
export default AboutSubList
