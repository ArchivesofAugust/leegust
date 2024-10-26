'use client'

import { useEffect, useRef } from 'react'

import Link from 'next/link'

import classNames from 'classnames/bind'

import Icon from '@/libs/shared/components/Icon/Icon'

import styles from './TextSlider.module.scss'

const cx = classNames.bind(styles)

interface Props {
  value: string
  hoverValue?: string
  href?: string
  enableHoverLink?: boolean
}

const TextSlider = ({ value, hoverValue = 'Yongwoo', href, enableHoverLink = false }: Props) => {
  const defaultRef = useRef<HTMLSpanElement>(null)
  const hoverRef = useRef<HTMLSpanElement>(null)
  const containerRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (defaultRef.current && hoverRef.current && containerRef.current) {
      const defaultWidth = defaultRef.current.offsetWidth
      const hoverWidth = hoverRef.current.offsetWidth
      const maxWidth = Math.max(defaultWidth, hoverWidth) * 1.05 // 5% 여유
      containerRef.current.style.width = `${maxWidth}px`
    }
  }, [value, hoverValue])

  return (
    <span className={cx('wrapper')}>
      {href && (
        <Link href={href} className={cx('back')}>
          <Icon name="back" size={16} weight="duotone" />
        </Link>
      )}
      <span className={cx('textContainer')} ref={containerRef}>
        <span className={cx('item', 'default')} ref={defaultRef}>
          {value}
        </span>
        <span className={cx('item', 'hover')} ref={hoverRef}>
          {href && enableHoverLink ? (
            <Link href={href} className={cx('link')}>
              {hoverValue}
            </Link>
          ) : (
            hoverValue
          )}
        </span>
      </span>
    </span>
  )
}

export default TextSlider
