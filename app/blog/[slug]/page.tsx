import { MDXRemote } from 'next-mdx-remote/rsc'
import { getBlogPost, getAllPosts } from '../../lib/blog'
import { format } from 'date-fns'
import Link from 'next/link'

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getBlogPost(params.slug)
  
  if (!post) {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Post not found</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              The blog post you're looking for doesn't exist.
            </p>
            <div className="mt-6">
              <Link
                href="/blog"
                className="text-base font-semibold leading-7 text-blue-600 hover:text-blue-500"
              >
                ← Back to blog
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <article className="prose lg:prose-xl mx-auto px-4 py-16">
      <header className="mb-16">
        <h1 className="mb-4">{post.title}</h1>
        <time dateTime={post.date} className="text-gray-600 text-sm">
          {format(new Date(post.date), 'MMMM d, yyyy')}
        </time>
      </header>
      {post.content && typeof post.content === 'string' && (
        <MDXRemote source={post.content} />
      )}
      <div className="mt-16">
        <Link
          href="/blog"
          className="text-base font-semibold leading-7 text-blue-600 hover:text-blue-500"
        >
          ← Back to blog
        </Link>
      </div>
    </article>
  )
} 