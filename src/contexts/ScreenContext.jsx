import React, { createContext, useState, useEffect, useContext } from 'react'

const ScreenContext = createContext()

export const ScreenProvider = ({ children }) => {

  const PIXEL_BREAK = 768

  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= PIXEL_BREAK)

  useEffect(() => {
    const handleResize = ()=>{setIsLargeScreen(window.innerWidth >= PIXEL_BREAK)}

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const [scrollToContact, setScrollToContact] = useState(false)

  return (
    <ScreenContext.Provider value={{isLargeScreen, scrollToContact, setScrollToContact}}>
      {children}
    </ScreenContext.Provider>
  )
}

export const useScreen = ()=>useContext(ScreenContext)
