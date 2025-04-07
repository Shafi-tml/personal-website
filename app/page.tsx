import Image from 'next/image'
import Link from 'next/link'
import { getLatestPosts } from '@/lib/blog'
import { format } from 'date-fns'

export default function Home() {
  const latestPosts = getLatestPosts()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* Hero Section */}
      <div className="w-full bg-gradient-to-r from-teal-600 to-teal-800 text-white relative">
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Iftekhar Ahmed Shafi
              </h1>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-yellow-400 text-teal-900 px-3 py-1 rounded-full text-sm font-semibold">Entrepreneur</span>
                <span className="bg-teal-500 text-white px-3 py-1 rounded-full text-sm font-semibold">Tech Enthusiast</span>
                <span className="bg-yellow-400 text-teal-900 px-3 py-1 rounded-full text-sm font-semibold">Executor</span>
                <span className="bg-teal-500 text-white px-3 py-1 rounded-full text-sm font-semibold">Operational Leader</span>
                <span className="bg-yellow-400 text-teal-900 px-3 py-1 rounded-full text-sm font-semibold">Pragmatist</span>
                <span className="bg-teal-500 text-white px-3 py-1 rounded-full text-sm font-semibold">Detail-oriented</span>
                <span className="bg-yellow-400 text-teal-900 px-3 py-1 rounded-full text-sm font-semibold">Systems Thinker</span>
                <span className="bg-teal-500 text-white px-3 py-1 rounded-full text-sm font-semibold">Collaborator</span>
                <span className="bg-yellow-400 text-teal-900 px-3 py-1 rounded-full text-sm font-semibold">Builder</span>
                <span className="bg-teal-500 text-white px-3 py-1 rounded-full text-sm font-semibold">Problem-solver</span>
                <span className="bg-yellow-400 text-teal-900 px-3 py-1 rounded-full text-sm font-semibold">Implementation Specialist</span>
                <span className="bg-teal-500 text-white px-3 py-1 rounded-full text-sm font-semibold">Process Optimizer</span>
              </div>
              <p className="text-lg mb-6">
                Technology executive and entrepreneur with over 21 years of experience in enterprise IT solutions, 
                business development, and strategic leadership.
              </p>
              <div className="flex space-x-4">
                <Link href="/blog" className="bg-white text-teal-600 px-6 py-2 rounded-lg font-semibold hover:bg-yellow-400 hover:text-teal-800 transition-colors">
                  Read Blog
                </Link>
                <Link href="/contact" className="border-2 border-white text-white px-6 py-2 rounded-lg font-semibold hover:bg-white hover:text-teal-600 transition-colors">
                  Contact Me
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="w-64 h-64 mx-auto">
                <img
                  src="/images/profile.png"
                  alt="Iftekhar Ahmed Shafi"
                  className="w-full h-full rounded-full border-4 border-white shadow-lg object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div className="w-full py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Current Roles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-teal-800">Technometrics Limited</h3>
              <p className="text-gray-600">
                Partner Director & Chief Business Officer at a leading System Integration company,
                specializing in enterprise IT solutions and digital transformation.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Latest Blog Posts Section */}
      <div className="w-full py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Latest Insights</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {latestPosts.map((post) => (
              <Link 
                key={post.slug} 
                href={`/blog/${post.slug}`}
                className="group"
              >
                <article className="bg-white p-6 rounded-lg shadow-md border-t-4 border-teal-600 h-full flex flex-col hover:shadow-lg transition-shadow">
                  <div className="text-xs text-gray-500 mb-2">
                    {format(new Date(post.date), 'MMMM d, yyyy')}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-teal-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm flex-grow">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 text-teal-600 text-sm font-semibold group-hover:text-teal-700">
                    Read more →
                  </div>
                </article>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link 
              href="/blog" 
              className="inline-flex items-center justify-center px-6 py-2 border border-transparent text-base font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 transition-colors"
            >
              View All Posts
            </Link>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="w-full py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Expertise</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'AI & Data-Driven Solutions',
              'Large Language Models',
              'Strategic Planning',
              'Enterprise Systems',
              'Business Development',
              'Cloud Infrastructure',
              'Data Center Solutions',
              'Project Management'
            ].map((skill, index) => (
              <div key={index} className="bg-teal-50 p-4 rounded-lg text-center hover:bg-yellow-50 transition-colors">
                <p className="text-teal-800 font-medium">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
} 