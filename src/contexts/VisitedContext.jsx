import { createContext, useContext, useState, useEffect } from 'react'

const VisitedContext = createContext()

export const useVisited = () => useContext(VisitedContext)

export const VisitedProvider = ({ children }) => {
  const [homepageHasBeenVisited, setHomepageHasBeenVisited] = useState(false)
  const [otherPageHasBeenVisited, setOtherPageHasBeenVisited] = useState(false)
  const [welcomeDoneOnce, setWelcomeDoneOnce] = useState(false)
  const [homepageNotFirstVisited, setHomepageNotFirstVisited] = useState(false)

  useEffect(() => {
    if(otherPageHasBeenVisited && !welcomeDoneOnce){setHomepageNotFirstVisited(true)}
  }, [otherPageHasBeenVisited])
  

  return (
    <VisitedContext.Provider value={{ welcomeDoneOnce, setWelcomeDoneOnce, homepageHasBeenVisited, setHomepageHasBeenVisited, otherPageHasBeenVisited, setOtherPageHasBeenVisited, homepageNotFirstVisited }}>
      {children}
    </VisitedContext.Provider>
  )
}
