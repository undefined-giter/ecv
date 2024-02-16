import { createContext, useContext, useState, useEffect } from 'react'

const VisitedContext = createContext()

export const useVisited = () => useContext(VisitedContext)

export const VisitedProvider = ({ children }) => {
  const [presentationHasBeenVisited, setPresentationHasBeenVisited] = useState(false)
  const [otherPageHasBeenVisited, setOtherPageHasBeenVisited] = useState(false)

  return (
    <VisitedContext.Provider value={{ presentationHasBeenVisited, setPresentationHasBeenVisited, otherPageHasBeenVisited, setOtherPageHasBeenVisited }}>
      {children}
    </VisitedContext.Provider>
  )
}
