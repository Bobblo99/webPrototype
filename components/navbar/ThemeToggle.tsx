"use client"
import DarkModeIcon from "@mui/icons-material/DarkMode"
import LightModeIcon from "@mui/icons-material/LightMode"

import useDarkMode from "../../hooks/useDarkMode"

const ThemeToggle: React.FC = () => {
  const [isDark, setIsDark] = useDarkMode()

  const handleToggleClick = () => {
    if (typeof setIsDark === "function") setIsDark(!isDark)
  }

  return (
    <div
      className="relative flex cursor-pointer items-center rounded-full bg-white p-1 dark:bg-gray-700"
      onClick={handleToggleClick}
    >
      {isDark ? <DarkModeIcon className="text-blue-200" /> : <LightModeIcon />}
    </div>
  )
}
export default ThemeToggle
