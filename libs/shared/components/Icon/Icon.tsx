'use client'

import { IconWeight } from '@phosphor-icons/react'

import RawIcon from '@/libs/shared/components/Icon/RawIcon'
import useWindowSize from '@/libs/shared/hooks/useWindowSize'

export type IconName = 'github' | 'linkedin' | 'gmail' | 'about' | 'back' | 'education' | 'work'

interface Props {
  name: IconName
  size: number
  mobileSize?: number
  weight: IconWeight
}

const Icon = ({ name, size, mobileSize, weight }: Props) => {
  const { isDesktop } = useWindowSize()
  const getRawIconName = () => {
    switch (name) {
      case 'linkedin':
        return 'LinkedinLogo'
      case 'github':
        return 'GithubLogo'
      case 'gmail':
        return 'GoogleLogo'
      case 'about':
        return 'GitBranch'
      case 'back':
        return 'ArrowUUpLeft'
      case 'education':
        return 'GraduationCap'
      case 'work':
        return 'FileCode'
    }
  }
  return (
    <RawIcon
      name={getRawIconName()}
      size={isDesktop ? size : (mobileSize ?? size)}
      weight={weight}
    />
  )
}

export default Icon
