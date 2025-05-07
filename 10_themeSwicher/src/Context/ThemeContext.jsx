
import {  createContext, useState } from "react";



export const ThemeContext = createContext()

 const ThemeProvider = ({children}) => {
    const [themeMode, setThemeMode] = useState("light")
    const darkMode = () => {
        setThemeMode("dark")
    }
    const lightMode = () => {
        setThemeMode("light")
    }
    return (
        <ThemeContext.Provider value={{themeMode, darkMode, lightMode}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider