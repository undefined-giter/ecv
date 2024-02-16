import React, { createContext, useState, useEffect, useContext } from 'react'

const ScreenContext = createContext()

export const ScreenProvider = ({ children }) => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 768)

  useEffect(() => {
    const handleResize = ()=>{setIsLargeScreen(window.innerWidth >= 768)}

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <ScreenContext.Provider value={isLargeScreen}>
      {children}
    </ScreenContext.Provider>
  )
}

export const useScreen = ()=>useContext(ScreenContext)
