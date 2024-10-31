'use client'

import { useEffect, useRef, useState } from 'react'

import Link from 'next/link'

import classNames from 'classnames/bind'

import styles from './Categories.module.scss'

const cx = classNames.bind(styles)

interface Props {
  items: {
    name: string
    href: string
  }[]
}

const Categories = ({ items }: Props) => {
  const [showBlur, setShowBlur] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const shouldOpenNewTab = (href: string) => {
    return href.startsWith('http') || href.startsWith('mailto')
  }

  const handleScroll = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current
      setShowBlur(scrollLeft < scrollWidth - clientWidth)
    }
  }

  useEffect(() => {
    handleScroll()
  }, [])

  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')} ref={containerRef} onScroll={handleScroll}>
        {items.map((item, index) => (
          <Link
            key={index.toString()}
            href={item.href}
            className={cx('item')}
            target={shouldOpenNewTab(item.href) ? '_blank' : undefined}
          >
            {item.name}
          </Link>
        ))}
      </div>
      {showBlur && <div className={cx('blur')} />}
    </div>
  )
}

export default Categories
