'use client'

import { motion } from 'framer-motion'
import { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}: ButtonProps) {
  // Tailwind classes based on variant and size
  const variantClasses = {
    primary: 'bg-primary text-white hover:bg-primary/90',
    secondary: 'bg-secondary text-gray-800 hover:bg-secondary/90',
    outline: 'bg-transparent border border-gray-300 hover:bg-gray-100',
  }

  const sizeClasses = {
    sm: 'py-1 px-3 text-sm',
    md: 'py-2 px-4 text-base',
    lg: 'py-3 px-6 text-lg',
  }

  return (
    <button
      className={`font-medium rounded-md transition-colors ${variantClasses[variant]} ${sizeClasses[size]} ${className} transform hover:scale-105 active:scale-95`}
      {...props}
    >
      {children}
    </button>
  )
} 