export interface SubItem {
  content: string | React.ReactNode
  items?: SubItem[]
}

export interface AboutItem {
  title: string | React.ReactNode
  items: SubItem[]
}

export interface AboutSection {
  title: string
  items: AboutItem[]
}
