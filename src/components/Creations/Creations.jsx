import { useEffect } from 'react'
import Footer from '../Footer/Footer.jsx'
import CreationCard from './CreationCard.jsx'
import { useVisited } from '/src/contexts/VisitedContext'
import foodtruck from '/img/creations/foodtruck_representation.png'

export default function Creations() {
  
  const { setOtherPageHasBeenVisited } = useVisited()
  
  useEffect(()=>{setOtherPageHasBeenVisited(true)}, [])

  return (
    <div>
      Quelques Projets parmis d'autres
      <CreationCard src={foodtruck} projectName='Fruit Market' language='react'>
        Site pour un foodtruck.
      </CreationCard>
      <br />
      <Footer />
    </div>
  )
}
