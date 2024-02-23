import { useEffect } from 'react'
import Footer from '../Footer/Footer'
import { useVisited } from '/src/contexts/VisitedContext'

export default function Goal(){
  const { setOtherPageHasBeenVisited } = useVisited()
  
  useEffect(()=>{setOtherPageHasBeenVisited(true)}, [setOtherPageHasBeenVisited])

  return <div>
    Objectif
    <Footer />
  </div>
}
