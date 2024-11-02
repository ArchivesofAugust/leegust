'use client'

import { useRef } from 'react'

import classNames from 'classnames/bind'

import styles from './TextSlider.module.scss'

const cx = classNames.bind(styles)

interface Props {
  value: string
  hoverValue?: string
}

const TextSlider = ({ value, hoverValue = 'Yongwoo' }: Props) => {
  const defaultRef = useRef<HTMLSpanElement>(null)
  const hoverRef = useRef<HTMLSpanElement>(null)
  const containerRef = useRef<HTMLSpanElement>(null)

  return (
    <span className={cx('wrapper')}>
      <span className={cx('textContainer')} ref={containerRef}>
        <span className={cx('item', 'default')} ref={defaultRef}>
          {value}
        </span>
        <span className={cx('item', 'hover')} ref={hoverRef}>
          {hoverValue}
        </span>
      </span>
    </span>
  )
}

export default TextSlider
