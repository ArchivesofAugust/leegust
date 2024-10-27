import { IconName } from '@/libs/shared/components/Icon/Icon'

export interface SubItem {
  content: string | React.ReactNode
  items?: SubItem[]
}

export interface AboutItem {
  title: string | React.ReactNode
  items: SubItem[]
}

export interface AboutSection {
  icon: IconName
  title: string
  items: AboutItem[]
}
