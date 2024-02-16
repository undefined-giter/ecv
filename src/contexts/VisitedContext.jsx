import { createContext, useContext, useState, useEffect } from 'react'

const VisitedContext = createContext()

export const useVisited = () => useContext(VisitedContext)

export const VisitedProvider = ({ children }) => {
  const [presentationHasBeenVisited, setPresentationHasBeenVisited] = useState(false)
  const [otherPageHasBeenVisited, setOtherPageHasBeenVisited] = useState(false)
  const [welcomeDoneOnce, setWelcomeDoneOnce] = useState(false)

  return (
    <VisitedContext.Provider value={{ welcomeDoneOnce, setWelcomeDoneOnce, presentationHasBeenVisited, setPresentationHasBeenVisited, otherPageHasBeenVisited, setOtherPageHasBeenVisited }}>
      {children}
    </VisitedContext.Provider>
  )
}
