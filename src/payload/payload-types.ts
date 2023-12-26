/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  collections: {
    pages: Page
    posts: Post
    projects: Project
    media: Media
    categories: Category
    users: User
    comments: Comment
    redirects: Redirect
    'payload-preferences': PayloadPreference
    'payload-migrations': PayloadMigration
  }
  globals: {
    settings: Settings
    header: Header
    footer: Footer
  }
}
export interface Page {
  id: number
  title: string
  publishedAt?: string | null
  hero: {
    type: 'none' | 'highImpact' | 'mediumImpact' | 'lowImpact'
    richText: {
      [k: string]: unknown
    }[]
    links?:
      | {
          link: {
            type?: ('reference' | 'custom') | null
            newTab?: boolean | null
            reference?: {
              relationTo: 'pages'
              value: number | Page
            } | null
            url?: string | null
            label: string
            icon?: number | Media | null
            appearance?: ('default' | 'primary' | 'secondary') | null
          }
          id?: string | null
        }[]
      | null
    media?: number | Media | null
  }
  layout: (
    | {
        invertBackground?: boolean | null
        richText: {
          [k: string]: unknown
        }[]
        links?:
          | {
              link: {
                type?: ('reference' | 'custom') | null
                newTab?: boolean | null
                reference?: {
                  relationTo: 'pages'
                  value: number | Page
                } | null
                url?: string | null
                label: string
                icon?: number | Media | null
                appearance?: ('primary' | 'secondary') | null
              }
              id?: string | null
            }[]
          | null
        id?: string | null
        blockName?: string | null
        blockType: 'cta'
      }
    | {
        invertBackground?: boolean | null
        columns?:
          | {
              size?: ('oneThird' | 'half' | 'twoThirds' | 'full') | null
              richText: {
                [k: string]: unknown
              }[]
              enableLink?: boolean | null
              link?: {
                type?: ('reference' | 'custom') | null
                newTab?: boolean | null
                reference?: {
                  relationTo: 'pages'
                  value: number | Page
                } | null
                url?: string | null
                label: string
                icon?: number | Media | null
                appearance?: ('default' | 'primary' | 'secondary') | null
              }
              id?: string | null
            }[]
          | null
        id?: string | null
        blockName?: string | null
        blockType: 'content'
      }
    | {
        invertBackground?: boolean | null
        position?: ('default' | 'fullscreen') | null
        media: number | Media
        id?: string | null
        blockName?: string | null
        blockType: 'mediaBlock'
      }
    | {
        introContent: {
          [k: string]: unknown
        }[]
        populateBy?: ('collection' | 'selection') | null
        relationTo?: ('posts' | 'projects') | null
        categories?: (number | Category)[] | null
        limit?: number | null
        selectedDocs?:
          | (
              | {
                  relationTo: 'posts'
                  value: number | Post
                }
              | {
                  relationTo: 'projects'
                  value: number | Project
                }
            )[]
          | null
        populatedDocs?:
          | (
              | {
                  relationTo: 'posts'
                  value: number | Post
                }
              | {
                  relationTo: 'projects'
                  value: number | Project
                }
            )[]
          | null
        populatedDocsTotal?: number | null
        id?: string | null
        blockName?: string | null
        blockType: 'archive'
      }
  )[]
  slug?: string | null
  meta?: {
    title?: string | null
    description?: string | null
    image?: number | Media | null
  }
  updatedAt: string
  createdAt: string
  _status?: ('draft' | 'published') | null
}
export interface Media {
  id: number
  alt: string
  caption?:
    | {
        [k: string]: unknown
      }[]
    | null
  updatedAt: string
  createdAt: string
  url?: string | null
  filename?: string | null
  mimeType?: string | null
  filesize?: number | null
  width?: number | null
  height?: number | null
}
export interface Category {
  id: number
  title?: string | null
  parent?: (number | null) | Category
  breadcrumbs?:
    | {
        doc?: (number | null) | Category
        url?: string | null
        label?: string | null
        id?: string | null
      }[]
    | null
  updatedAt: string
  createdAt: string
}
export interface Post {
  id: number
  title: string
  categories?: (number | Category)[] | null
  publishedAt?: string | null
  authors?: (number | User)[] | null
  populatedAuthors?:
    | {
        id?: string | null
        name?: string | null
      }[]
    | null
  hero: {
    type: 'none' | 'highImpact' | 'mediumImpact' | 'lowImpact'
    richText: {
      [k: string]: unknown
    }[]
    links?:
      | {
          link: {
            type?: ('reference' | 'custom') | null
            newTab?: boolean | null
            reference?: {
              relationTo: 'pages'
              value: number | Page
            } | null
            url?: string | null
            label: string
            icon?: number | Media | null
            appearance?: ('default' | 'primary' | 'secondary') | null
          }
          id?: string | null
        }[]
      | null
    media?: number | Media | null
  }
  layout: (
    | {
        invertBackground?: boolean | null
        richText: {
          [k: string]: unknown
        }[]
        links?:
          | {
              link: {
                type?: ('reference' | 'custom') | null
                newTab?: boolean | null
                reference?: {
                  relationTo: 'pages'
                  value: number | Page
                } | null
                url?: string | null
                label: string
                icon?: number | Media | null
                appearance?: ('primary' | 'secondary') | null
              }
              id?: string | null
            }[]
          | null
        id?: string | null
        blockName?: string | null
        blockType: 'cta'
      }
    | {
        invertBackground?: boolean | null
        columns?:
          | {
              size?: ('oneThird' | 'half' | 'twoThirds' | 'full') | null
              richText: {
                [k: string]: unknown
              }[]
              enableLink?: boolean | null
              link?: {
                type?: ('reference' | 'custom') | null
                newTab?: boolean | null
                reference?: {
                  relationTo: 'pages'
                  value: number | Page
                } | null
                url?: string | null
                label: string
                icon?: number | Media | null
                appearance?: ('default' | 'primary' | 'secondary') | null
              }
              id?: string | null
            }[]
          | null
        id?: string | null
        blockName?: string | null
        blockType: 'content'
      }
    | {
        invertBackground?: boolean | null
        position?: ('default' | 'fullscreen') | null
        media: number | Media
        id?: string | null
        blockName?: string | null
        blockType: 'mediaBlock'
      }
    | {
        introContent: {
          [k: string]: unknown
        }[]
        populateBy?: ('collection' | 'selection') | null
        relationTo?: ('posts' | 'projects') | null
        categories?: (number | Category)[] | null
        limit?: number | null
        selectedDocs?:
          | (
              | {
                  relationTo: 'posts'
                  value: number | Post
                }
              | {
                  relationTo: 'projects'
                  value: number | Project
                }
            )[]
          | null
        populatedDocs?:
          | (
              | {
                  relationTo: 'posts'
                  value: number | Post
                }
              | {
                  relationTo: 'projects'
                  value: number | Project
                }
            )[]
          | null
        populatedDocsTotal?: number | null
        id?: string | null
        blockName?: string | null
        blockType: 'archive'
      }
  )[]
  enablePremiumContent?: boolean | null
  premiumContent?:
    | (
        | {
            invertBackground?: boolean | null
            richText: {
              [k: string]: unknown
            }[]
            links?:
              | {
                  link: {
                    type?: ('reference' | 'custom') | null
                    newTab?: boolean | null
                    reference?: {
                      relationTo: 'pages'
                      value: number | Page
                    } | null
                    url?: string | null
                    label: string
                    icon?: number | Media | null
                    appearance?: ('primary' | 'secondary') | null
                  }
                  id?: string | null
                }[]
              | null
            id?: string | null
            blockName?: string | null
            blockType: 'cta'
          }
        | {
            invertBackground?: boolean | null
            columns?:
              | {
                  size?: ('oneThird' | 'half' | 'twoThirds' | 'full') | null
                  richText: {
                    [k: string]: unknown
                  }[]
                  enableLink?: boolean | null
                  link?: {
                    type?: ('reference' | 'custom') | null
                    newTab?: boolean | null
                    reference?: {
                      relationTo: 'pages'
                      value: number | Page
                    } | null
                    url?: string | null
                    label: string
                    icon?: number | Media | null
                    appearance?: ('default' | 'primary' | 'secondary') | null
                  }
                  id?: string | null
                }[]
              | null
            id?: string | null
            blockName?: string | null
            blockType: 'content'
          }
        | {
            invertBackground?: boolean | null
            position?: ('default' | 'fullscreen') | null
            media: number | Media
            id?: string | null
            blockName?: string | null
            blockType: 'mediaBlock'
          }
        | {
            introContent: {
              [k: string]: unknown
            }[]
            populateBy?: ('collection' | 'selection') | null
            relationTo?: ('posts' | 'projects') | null
            categories?: (number | Category)[] | null
            limit?: number | null
            selectedDocs?:
              | (
                  | {
                      relationTo: 'posts'
                      value: number | Post
                    }
                  | {
                      relationTo: 'projects'
                      value: number | Project
                    }
                )[]
              | null
            populatedDocs?:
              | (
                  | {
                      relationTo: 'posts'
                      value: number | Post
                    }
                  | {
                      relationTo: 'projects'
                      value: number | Project
                    }
                )[]
              | null
            populatedDocsTotal?: number | null
            id?: string | null
            blockName?: string | null
            blockType: 'archive'
          }
      )[]
    | null
  relatedPosts?: (number | Post)[] | null
  slug?: string | null
  meta?: {
    title?: string | null
    description?: string | null
    image?: number | Media | null
  }
  updatedAt: string
  createdAt: string
  _status?: ('draft' | 'published') | null
}
export interface User {
  id: number
  name?: string | null
  roles?: ('admin' | 'user')[] | null
  updatedAt: string
  createdAt: string
  email: string
  resetPasswordToken?: string | null
  resetPasswordExpiration?: string | null
  salt?: string | null
  hash?: string | null
  loginAttempts?: number | null
  lockUntil?: string | null
  password: string | null
}
export interface Project {
  id: number
  title: string
  categories?: (number | Category)[] | null
  publishedAt?: string | null
  hero: {
    type: 'none' | 'highImpact' | 'mediumImpact' | 'lowImpact'
    richText: {
      [k: string]: unknown
    }[]
    links?:
      | {
          link: {
            type?: ('reference' | 'custom') | null
            newTab?: boolean | null
            reference?: {
              relationTo: 'pages'
              value: number | Page
            } | null
            url?: string | null
            label: string
            icon?: number | Media | null
            appearance?: ('default' | 'primary' | 'secondary') | null
          }
          id?: string | null
        }[]
      | null
    media?: number | Media | null
  }
  layout: (
    | {
        invertBackground?: boolean | null
        richText: {
          [k: string]: unknown
        }[]
        links?:
          | {
              link: {
                type?: ('reference' | 'custom') | null
                newTab?: boolean | null
                reference?: {
                  relationTo: 'pages'
                  value: number | Page
                } | null
                url?: string | null
                label: string
                icon?: number | Media | null
                appearance?: ('primary' | 'secondary') | null
              }
              id?: string | null
            }[]
          | null
        id?: string | null
        blockName?: string | null
        blockType: 'cta'
      }
    | {
        invertBackground?: boolean | null
        columns?:
          | {
              size?: ('oneThird' | 'half' | 'twoThirds' | 'full') | null
              richText: {
                [k: string]: unknown
              }[]
              enableLink?: boolean | null
              link?: {
                type?: ('reference' | 'custom') | null
                newTab?: boolean | null
                reference?: {
                  relationTo: 'pages'
                  value: number | Page
                } | null
                url?: string | null
                label: string
                icon?: number | Media | null
                appearance?: ('default' | 'primary' | 'secondary') | null
              }
              id?: string | null
            }[]
          | null
        id?: string | null
        blockName?: string | null
        blockType: 'content'
      }
    | {
        invertBackground?: boolean | null
        position?: ('default' | 'fullscreen') | null
        media: number | Media
        id?: string | null
        blockName?: string | null
        blockType: 'mediaBlock'
      }
    | {
        introContent: {
          [k: string]: unknown
        }[]
        populateBy?: ('collection' | 'selection') | null
        relationTo?: ('posts' | 'projects') | null
        categories?: (number | Category)[] | null
        limit?: number | null
        selectedDocs?:
          | (
              | {
                  relationTo: 'posts'
                  value: number | Post
                }
              | {
                  relationTo: 'projects'
                  value: number | Project
                }
            )[]
          | null
        populatedDocs?:
          | (
              | {
                  relationTo: 'posts'
                  value: number | Post
                }
              | {
                  relationTo: 'projects'
                  value: number | Project
                }
            )[]
          | null
        populatedDocsTotal?: number | null
        id?: string | null
        blockName?: string | null
        blockType: 'archive'
      }
  )[]
  relatedProjects?: (number | Project)[] | null
  slug?: string | null
  meta?: {
    title?: string | null
    description?: string | null
    image?: number | Media | null
  }
  updatedAt: string
  createdAt: string
  _status?: ('draft' | 'published') | null
}
export interface Comment {
  id: number
  user?: (number | null) | User
  populatedUser?: {
    id?: string | null
    name?: string | null
  }
  doc?: (number | null) | Post
  comment?: string | null
  updatedAt: string
  createdAt: string
  _status?: ('draft' | 'published') | null
}
export interface Redirect {
  id: number
  from: string
  to?: {
    type?: ('reference' | 'custom') | null
    reference?:
      | ({
          relationTo: 'pages'
          value: number | Page
        } | null)
      | ({
          relationTo: 'posts'
          value: number | Post
        } | null)
    url?: string | null
  }
  updatedAt: string
  createdAt: string
}
export interface PayloadPreference {
  id: number
  user: {
    relationTo: 'users'
    value: number | User
  }
  key?: string | null
  value?:
    | {
        [k: string]: unknown
      }
    | unknown[]
    | string
    | number
    | boolean
    | null
  updatedAt: string
  createdAt: string
}
export interface PayloadMigration {
  id: number
  name?: string | null
  batch?: number | null
  updatedAt: string
  createdAt: string
}
export interface Settings {
  id: number
  postsPage?: (number | null) | Page
  projectsPage?: (number | null) | Page
  updatedAt?: string | null
  createdAt?: string | null
}
export interface Header {
  id: number
  navItems?:
    | {
        link: {
          type?: ('reference' | 'custom') | null
          newTab?: boolean | null
          reference?: {
            relationTo: 'pages'
            value: number | Page
          } | null
          url?: string | null
          label: string
          icon?: number | Media | null
        }
        id?: string | null
      }[]
    | null
  updatedAt?: string | null
  createdAt?: string | null
}
export interface Footer {
  id: number
  copyright: string
  navItems?:
    | {
        link: {
          type?: ('reference' | 'custom') | null
          newTab?: boolean | null
          reference?: {
            relationTo: 'pages'
            value: number | Page
          } | null
          url?: string | null
          label: string
          icon?: number | Media | null
        }
        id?: string | null
      }[]
    | null
  updatedAt?: string | null
  createdAt?: string | null
}

declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}
