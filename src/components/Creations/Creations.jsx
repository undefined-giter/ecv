import { useEffect } from 'react'
import Footer from '../Footer/Footer'
import { useVisited } from '/src/contexts/VisitedContext'

export default function Creations() {
  const { setOtherPageHasBeenVisited } = useVisited()
  
  useEffect(()=>{setOtherPageHasBeenVisited(true)}, [setOtherPageHasBeenVisited])

  return <div>
    Quelques Projets parmis d'autres

    <Footer />
  </div>
}
