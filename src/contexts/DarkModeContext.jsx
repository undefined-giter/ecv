import { createContext, useState, useEffect, useContext } from 'react'

const DarkModeContext = createContext()

export const useDarkMode = () => useContext(DarkModeContext)

export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    const htmlElement = document.querySelector('html')
    if (htmlElement) {
      if(darkMode){
        htmlElement.classList.add('dark')
        htmlElement.classList.remove('light')}
      else{
        htmlElement.classList.add('light')
        htmlElement.classList.remove('dark')
      }
    }
  }, [darkMode])

  const toggleDarkMode = ()=>{setDarkMode(prevMode => !prevMode)}

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  )
}
