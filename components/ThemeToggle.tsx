'use client'

import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const stored = localStorage.getItem('theme') as 'light' | 'dark' | null
    const initial = stored || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    setTheme(initial)
    document.documentElement.classList.toggle('dark', initial === 'dark')
    document.documentElement.style.colorScheme = initial
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.classList.toggle('dark', newTheme === 'dark')
    document.documentElement.style.colorScheme = newTheme
  }

  if (!mounted) return <div className="w-11 h-11 rounded-xl bg-gray-200 dark:bg-gray-800" />

  return (
    <button
      onClick={toggleTheme}
      aria-label="Téma váltása"
      className={`
        relative w-11 h-11 rounded-xl overflow-hidden flex items-center justify-center
        bg-white/10 dark:bg-gray-800/50 backdrop-blur-md
        border border-gray-200/30 dark:border-white/10
        hover:border-blue-400/50 dark:hover:border-blue-500/40
        shadow-sm dark:shadow-none
        transition-all duration-300 active:scale-95
      `}
    >
      <Sun
        size={20}
        className={`
          text-yellow-500 dark:text-yellow-400/70
          transition-all duration-500
          ${theme === 'dark' ? 'opacity-0 scale-75' : 'opacity-100 scale-100'}
        `}
      />
      <Moon
        size={20}
        className={`
          absolute text-indigo-600 dark:text-indigo-400
          transition-all duration-500
          ${theme === 'light' ? 'opacity-0 scale-75' : 'opacity-100 scale-100'}
        `}
      />
    </button>
  )
}