export default function AboutPage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">About Me</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            I am a seasoned technology executive and entrepreneur with over 19 years of progressive experience in enterprise IT solutions, 
            business development, and strategic leadership.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            <div className="flex flex-col">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                Current Roles
              </dt>
              <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="text-lg text-gray-700 mb-6">
                  Currently serving as Partner Director & Chief Business Officer at Technometrics Limited, 
                  a well-established System Integrator company specializing in enterprise IT solutions and digital transformation.
                </p>
              </dd>
            </div>
            <div className="flex flex-col">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                Expertise
              </dt>
              <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">
                  Building and managing enterprise business verticals including systems infrastructure, networking, 
                  data center operations, and business management systems. Proven track record of driving business 
                  growth through strategic OEM partnerships and delivering complex enterprise solutions.
                </p>
              </dd>
            </div>
            <div className="flex flex-col">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                Global Experience
              </dt>
              <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">
                  Extensive experience working across diverse industries including telecom, banking, and government 
                  sectors in Bangladesh, Nepal, Bahrain, Brunei, and Laos. Strong focus on international business 
                  development and cross-cultural collaboration.
                </p>
              </dd>
            </div>
          </dl>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <h3 className="text-2xl font-bold tracking-tight text-gray-900">Key Skills</h3>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              'AI & Data-Driven Solutions',
              'Large Language Models',
              'Strategic Planning',
              'Enterprise Systems',
              'Business Development',
              'Cloud Infrastructure',
              'Data Center Solutions',
              'Project Management',
              'OEM Partnership Management',
              'IT Service Management',
              'Channel Development',
              'Team Leadership',
              'Client Relationship Management',
              'Solution Design',
              'Cloud Infrastructure',
              'Disaster Recovery'
            ].map((skill) => (
              <div key={skill} className="rounded-lg bg-gray-50 p-4">
                <p className="text-sm font-medium text-gray-900">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 