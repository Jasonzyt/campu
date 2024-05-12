import rawMetaData from '@/_meta.json?raw'
import $config from '@/_config'

import { Type, plainToInstance } from 'class-transformer'

export enum ContentFormat {
  Markdown = 'md'
}

export class Article {
  public slug: string
  public title: string
  public tags: string[]
  public category: string
  @Type(() => Content)
  public content: Content
  @Type(() => Author)
  public author: Author
  public createdAt: string
  public updatedAt: string

  constructor(
    slug: string,
    title: string,
    tags: string[],
    category: string,
    content: Content,
    author: Author,
    createdAt: string,
    updatedAt: string
  ) {
    this.slug = slug
    this.title = title
    this.tags = tags
    this.category = category
    this.content = content
    this.author = author
    this.createdAt = createdAt
    this.updatedAt = updatedAt
  }

  static create(
    slug: string,
    title: string,
    tags: string[],
    category: string,
    content: Content,
    author: Author
  ) {
    const now = new Date().toISOString()
    return new Article(slug, title, tags, category, content, author, now, now)
  }
}

export class Author {
  public name: string
  public location: string
  public avatar: string

  constructor(name: string, location: string = '', avatar: string = '') {
    this.name = name
    this.location = location
    this.avatar = avatar
  }
}

export class Content {
  public format: ContentFormat
  public url: string

  constructor(format: ContentFormat, url: string) {
    this.format = format
    this.url = url
  }

  fetch(): Promise<Response> {
    return fetch($config.articlesBase + this.url)
  }
}

export class Category {
  public name: string
  public description: string
  public color: string

  constructor(name: string, description: string, color: string) {
    this.name = name
    this.description = description
    this.color = color
  }
}

export class MetaData {
  @Type(() => Article)
  public articles: Article[] = []
  @Type(() => Category)
  public categories: Category[] = []
}

export const metaData = plainToInstance(MetaData, JSON.parse(rawMetaData), {})

export const getArticle = (slug: string): Article | undefined => {
  return metaData.articles.find((article: Article) => article.slug === slug)
}

export default {
  metaData,
  getArticle
}