export interface IPost {
    node: {
        author: Author
        categories: Category[]
        excerpt: string
        createdAt: string
        slug: string
        title: string
        id: string
        featuredImage: {
            url: string
        }
        featuredPost: boolean
    }
}

export interface Author {
    bio: string
    id: string
    name: string
    photo: {
        url: string
    }
}
export interface Category {
    name: string
    slug: string
}
export interface RecentPost {
    createdAt: string
    featuredImage:{
        url: string
    }
    slug: string
    title: string
}
export interface Category{
    name:string
    slug: string
}

export interface IPostDetails{
    author: Author
    categories: Category[]
    excerpt: string
    createdAt: string
    slug: string
    title: string
    id: string
    featuredImage: {
        url: string
    }
    featuredPost: Boolean
    content: any
}
export interface ICommentData{
    comment?: string
    name?: string
    email?: string
    storeData?: boolean  
}

export interface IComment{
    comment?: string
    name?: string
    createdAt: string
}
