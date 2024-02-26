import React, { createContext, useState, useEffect, useContext } from 'react'

const ScreenContext = createContext()

export const ScreenProvider = ({ children }) => {

  const PIXEL_BREAK_MIDDLE = 768
  const PIXEL_BREAK_LARGE = 992

  const [isMiddleScreen, setIsMiddleScreen] = useState(window.innerWidth >= PIXEL_BREAK_MIDDLE)
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= PIXEL_BREAK_LARGE)

  useEffect(() => {
    const handleResize = ()=>{
      setIsMiddleScreen(window.innerWidth >= PIXEL_BREAK_MIDDLE)
      setIsLargeScreen(window.innerWidth >= PIXEL_BREAK_LARGE)
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const [openContactModal, setOpenContactModal] = useState(false)

  return (
    <ScreenContext.Provider value={{isMiddleScreen, isLargeScreen, openContactModal, setOpenContactModal}}>
      {children}
    </ScreenContext.Provider>
  )
}

export const useScreen = ()=>useContext(ScreenContext)
