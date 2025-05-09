import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { format } from 'date-fns'

const postsDirectory = path.join(process.cwd(), 'content/blog')

export interface BlogPost {
  slug: string
  title: string
  date: string
  excerpt?: string
  content?: string
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`)
  
  try {
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    
    return {
      slug,
      title: data.title,
      date: data.date,
      content,
      excerpt: data.excerpt
    }
  } catch (error) {
    return null
  }
}

export async function getAllPosts(): Promise<BlogPost[]> {
  const files = fs.readdirSync(postsDirectory)
  const posts = files
    .filter(file => file.endsWith('.mdx'))
    .map(file => {
      const slug = file.replace(/\.mdx$/, '')
      const fullPath = path.join(postsDirectory, file)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data } = matter(fileContents)
      
      return {
        slug,
        title: data.title,
        date: data.date,
        excerpt: data.excerpt || ''
      }
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    
  return posts
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      slug,
      title: data.title,
      date: format(new Date(data.date), 'MMMM d, yyyy'),
      excerpt: data.excerpt || '',
      content
    }
  } catch (error) {
    return null
  }
}

export async function getLatestPosts(count: number = 3): Promise<BlogPost[]> {
  const posts = await getAllPosts()
  return posts.slice(0, count)
} 