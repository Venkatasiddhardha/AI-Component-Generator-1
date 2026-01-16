import React, { useState, useEffect } from 'react'
import { ThemeContext } from './ThemeContextCore'

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
      document.body.classList.add('bg-[#0A0A0A]')
    } else {
      document.documentElement.classList.remove('dark')
      document.body.classList.remove('bg-[#0A0A0A]')
    }
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  )
}
