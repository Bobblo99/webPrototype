import { useEffect, useState } from "react"

const useDarkMode = () => {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches
    setIsDark(prefersDark)

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
    const handleChange = (event: any) => setIsDark(event.matches)

    mediaQuery.addEventListener("change", handleChange)

    return () => {
      mediaQuery.removeEventListener("change", handleChange)
    }
  }, [])

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }, [isDark])

  return [isDark, setIsDark]
}

export default useDarkMode
