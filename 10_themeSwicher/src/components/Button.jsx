import React, { useContext, useEffect } from "react";
import { ThemeContext } from "../Context/ThemeContext";



const Button = () => {
    const {themeMode, darkMode, lightMode} = useContext(ThemeContext)
    const handleToggle = (e) => {
        const darkModeStatus = e.currentTarget.checked
        if(darkModeStatus) {
            darkMode()
        } else {
            lightMode()
        }
    } 
      useEffect(() => {
        document.querySelector('html').classList.remove("light", "dark")
        document.querySelector('html').classList.add(themeMode)
      }, [themeMode])

  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input 
      onChange={handleToggle}
      // checked={themeMode === "dark"}
      type="checkbox" 
      value="" 
      className="sr-only peer" 
      />
      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
      <span className="ml-3 text-sm font-medium text-gray-900">
        Toggle Theme
      </span>
    </label>
  );
};

export default Button;
