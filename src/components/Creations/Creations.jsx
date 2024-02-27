import { useEffect } from 'react'
import Footer from '../Footer/Footer.jsx'
import { useVisited } from '/src/contexts/VisitedContext'

export default function Creations() {
  
  const { setOtherPageHasBeenVisited } = useVisited()
  
  useEffect(()=>{setOtherPageHasBeenVisited(true)}, [])

  return (
    <div>
      Quelques Projets parmis d'autres
      <br />
      <Footer />
    </div>
  )
}
