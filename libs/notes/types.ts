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
