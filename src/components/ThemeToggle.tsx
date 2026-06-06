'use client'

import { cn } from '@/lib/utils'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Button } from './ui/button'

const iconTransition =
  'transition-[transform,opacity] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]'

const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = resolvedTheme === 'dark'

  if (!mounted) {
    return (
      <Button
        variant='ghost'
        size='icon'
        className='relative h-9 w-9 overflow-hidden'
        disabled>
        <Sun className='h-5 w-5' />
        <span className='sr-only'>Toggle theme</span>
      </Button>
    )
  }

  return (
    <Button
      variant='ghost'
      size='icon'
      className='relative h-9 w-9 overflow-hidden'
      onClick={() => setTheme(isDark ? 'light' : 'dark')}>
      <Sun
        className={cn(
          'absolute h-5 w-5',
          iconTransition,
          isDark
            ? 'rotate-90 scale-0 opacity-0'
            : 'rotate-0 scale-100 opacity-100'
        )}
      />
      <Moon
        className={cn(
          'absolute h-5 w-5',
          iconTransition,
          isDark
            ? 'rotate-0 scale-100 opacity-100'
            : '-rotate-90 scale-0 opacity-0'
        )}
      />
      <span className='sr-only'>Toggle theme</span>
    </Button>
  )
}

export default ThemeToggle
