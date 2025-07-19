import { useState, useEffect } from 'react'
import { Moon, Sun } from 'lucide-react'

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(true) // Default to dark mode

  useEffect(() => {
    // Check for saved theme preference or default to dark mode
    const savedTheme = localStorage.getItem('theme')
    
    if (savedTheme === 'light') {
      // Only use light mode if explicitly saved as light
      setDarkMode(false)
      document.documentElement.classList.remove('dark')
    } else {
      // Default to dark mode (including first visit)
      setDarkMode(true)
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
      setDarkMode(false)
    } else {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
      setDarkMode(true)
    }
  }

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
      aria-label="Toggle dark mode"
    >
      {darkMode ? (
        <Sun className="h-5 w-5 text-gray-600 dark:text-gray-300" />
      ) : (
        <Moon className="h-5 w-5 text-gray-600" />
      )}
    </button>
  )
}

export default DarkModeToggle