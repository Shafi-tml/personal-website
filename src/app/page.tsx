'use client'

import Button from '@/components/Button'
import Dropdown from '@/components/Dropdown'

export default function Home() {
  const dropdownOptions = [
    { label: 'Option 1', onClick: () => console.log('Option 1 clicked') },
    { label: 'Option 2', onClick: () => console.log('Option 2 clicked') },
    { label: 'Option 3', onClick: () => console.log('Option 3 clicked') },
  ]

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-6">
      <h1 className="text-4xl font-bold">Welcome to Your App</h1>
      
      <div className="flex flex-col gap-4 items-center mt-8">
        <p className="text-xl mb-4">Try out these components:</p>
        
        <div className="flex gap-4">
          <Button>Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="outline">Outline Button</Button>
        </div>
        
        <div className="mt-8">
          <Dropdown label="Select an option" options={dropdownOptions} />
        </div>
      </div>
    </main>
  )
}
