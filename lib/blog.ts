import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'content/blog')

export type BlogPost = {
  slug: string
  title: string
  date: string
  excerpt: string
  content: string
}

export function getAllPosts(): BlogPost[] {
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '')
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)

      return {
        slug,
        title: data.title,
        date: data.date,
        excerpt: data.excerpt,
        content,
      }
    })

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getLatestPosts(limit: number = 3): BlogPost[] {
  const files = fs.readdirSync(postsDirectory)
  
  const posts = files
    .filter(filename => filename.endsWith('.mdx'))
    .map(filename => {
      const filePath = path.join(postsDirectory, filename)
      const fileContent = fs.readFileSync(filePath, 'utf8')
      const { data, content } = matter(fileContent)
      
      return {
        slug: filename.replace(/\.mdx$/, ''),
        title: data.title,
        date: data.date,
        excerpt: data.excerpt || '',
        content
      }
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit)

  return posts
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      slug,
      title: data.title,
      date: data.date,
      excerpt: data.excerpt,
      content,
    }
  } catch (error) {
    return null
  }
} 