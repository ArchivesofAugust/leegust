'use client'

import { IconWeight } from '@phosphor-icons/react'

import RawIcon from '@/libs/shared/components/Icon/RawIcon'

export type IconName = 'github' | 'linkedin' | 'mail'

interface Props {
  name: IconName
  size: number
  weight: IconWeight
}

const Icon = ({ name, size, weight }: Props) => {
  const getRawIconName = () => {
    switch (name) {
      case 'linkedin':
        return 'LinkedinLogo'
      case 'github':
        return 'GithubLogo'
      case 'mail':
        return 'Mailbox'
    }
  }
  return <RawIcon name={getRawIconName()} size={size} weight={weight} />
}

export default Icon
