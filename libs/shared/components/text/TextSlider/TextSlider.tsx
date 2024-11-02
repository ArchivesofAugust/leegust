'use client'

import { useEffect, useRef } from 'react'

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

  useEffect(() => {
    if (defaultRef.current && hoverRef.current && containerRef.current) {
      const defaultWidth = defaultRef.current.offsetWidth
      const hoverWidth = hoverRef.current.offsetWidth
      const maxWidth = Math.max(defaultWidth, hoverWidth) * 2 // 5% 여유
      containerRef.current.style.width = `${maxWidth}px`
    }
  }, [value, hoverValue])

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
