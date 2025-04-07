import Link from 'next/link'
import { getAllPosts } from '../lib/blog'
import { format } from 'date-fns'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog - Iftekhar Ahmed Shafi | Technology & Leadership Insights',
  description: 'Read insights on enterprise IT solutions, digital transformation, and strategic leadership from Iftekhar Ahmed Shafi. Regular updates on technology trends and business strategy.',
  openGraph: {
    title: 'Blog - Iftekhar Ahmed Shafi | Technology & Leadership Insights',
    description: 'Read insights on enterprise IT solutions, digital transformation, and strategic leadership.',
    url: 'https://iftekharshafi.org/blog',
  },
  twitter: {
    title: 'Blog - Iftekhar Ahmed Shafi | Technology & Leadership Insights',
    description: 'Read insights on enterprise IT solutions, digital transformation, and strategic leadership.',
  }
}

export default async function BlogPage() {
  const posts = await getAllPosts()

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Latest Insights</h1>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Thoughts and insights on technology, leadership, and digital transformation.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.slug} className="flex flex-col items-start">
              <div className="rounded-2xl bg-gray-50 p-8 ring-1 ring-inset ring-gray-900/5">
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={post.date} className="text-gray-500">
                    {format(new Date(post.date), 'MMMM d, yyyy')}
                  </time>
                </div>
                <div className="group relative">
                  <h2 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <Link href={`/blog/${post.slug}`}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </Link>
                  </h2>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.excerpt}</p>
                </div>
                <div className="mt-4">
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="text-sm font-medium text-teal-600 hover:text-teal-500"
                    aria-label={`Read more about ${post.title}`}
                  >
                    Read more →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
} 