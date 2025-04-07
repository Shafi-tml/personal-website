import { getPostBySlug } from '@/lib/blog'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { format } from 'date-fns'
import Link from 'next/link'

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)

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
    <article className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <div className="flex items-center gap-x-4 text-xs">
            <time dateTime={post.date} className="text-gray-500">
              {format(new Date(post.date), 'MMMM d, yyyy')}
            </time>
          </div>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {post.title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">{post.excerpt}</p>
          <div className="mt-10 prose prose-lg prose-blue mx-auto">
            <MDXRemote source={post.content} />
          </div>
          <div className="mt-16">
            <Link
              href="/blog"
              className="text-base font-semibold leading-7 text-blue-600 hover:text-blue-500"
            >
              ← Back to blog
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
} 