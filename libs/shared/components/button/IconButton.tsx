'use client'

import { useRouter } from 'next/navigation'

import classNames from 'classnames/bind'

import Icon, { IconName } from '@/libs/shared/components/Icon/Icon'

import styles from './IconButton.module.scss'

const cx = classNames.bind(styles)

interface Props {
  type: 'refresh' | 'goHome'
}
const IconButton = ({ type }: Props) => {
  const router = useRouter()

  const getItemByType = (): { text: string; onClick: () => void; icon: IconName } => {
    switch (type) {
      case 'goHome':
        return {
          text: 'go home',
          onClick: () => router.push('/'),
          icon: 'back',
        }
      case 'refresh':
        return {
          text: 'refresh',
          onClick: () => router.refresh(),
          icon: 'refresh',
        }
    }
  }
  const { onClick, icon, text } = getItemByType()
  return (
    <button type="button" className={cx('button')} onClick={onClick}>
      <div className={cx('icon', type)}>
        <Icon name={icon} size={16} weight="bold" />
      </div>
      {text}
    </button>
  )
}

export default IconButton
