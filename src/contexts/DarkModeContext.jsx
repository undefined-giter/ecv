import { createContext, useState, useEffect, useContext } from 'react'

const DarkModeContext = createContext()

export const useDarkMode = () => useContext(DarkModeContext)

export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    const htmlElement = document.querySelector('body')
    
    if (htmlElement) {
      if(darkMode){
        htmlElement.classList.add('dark')
        htmlElement.classList.remove('light')}
      else{
        htmlElement.classList.add('light')
        htmlElement.classList.remove('dark')
      }
    }

    const favicon = document.querySelector('link[rel="icon"]')
    if(favicon){
      const faviconPath = darkMode ? './../../faviconDark.ico' : './../../faviconLight.ico'
      favicon.href = faviconPath
    }

  }, [darkMode])

  const toggleDarkMode = ()=>{setDarkMode(prevMode => !prevMode)}

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  )
}
