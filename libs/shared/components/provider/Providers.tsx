'use client'

import { PropsWithChildren } from 'react'

import useSetHeightForFullScreen from '@/libs/shared/hooks/useSetHeightForFullScreen'

interface Props {}

const Providers = ({ children }: PropsWithChildren<Props>) => {
  useSetHeightForFullScreen()
  return children
}

export default Providers
