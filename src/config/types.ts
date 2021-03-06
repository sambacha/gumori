export type FrontMatter = {
  path: string
  title?: string
  created?: string
  published?: string
  photo?: string
  alt?: string
  summary?: string
  tags?: string[]
  flags?: string[]
}

export type SiteConfig = {
  url: string
  title: string
  description?: string
  keywords?: string[]
  author?: string
  lang?: string
  stylesheets?: string[]
  scripts?: {
    src: string
    type: string
    async: boolean
    defer: boolean
  }[]
}

export type PageConfig = {
  paginationDir?: 'ltr' | 'rtl'
  pageSize?: number
}

export type NavConfig =
  | {
      text: string
      link: string
    }[]
  | []

export type RSSConfig = {
  limit?: number
  customData?: string
  stylesheet?: string
  xmlns?: { [key: string]: string }
}

export type DateConfig = {
  locales: string
  options: Intl.DateTimeFormatOptions
}
