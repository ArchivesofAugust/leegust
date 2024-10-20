export enum DirectoryCategoryEnum {
  Reflections = 'reflections',
  Studies = 'studies',
  Uncategorized = 'uncategorized',
}

export interface Note {
  uuid: string
  category: DirectoryCategoryEnum
  date: string
  title: string
  contentHtml?: string
}

export type HeadingTag = 'h1' | 'h2' | 'h3'

export interface TocItem {
  id: string
  tag: HeadingTag
  text: string
}

export interface MatterResult {
  date: string
  title: string
}
