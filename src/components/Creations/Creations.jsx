import { useEffect } from 'react'
import Footer from '../Footer/Footer.jsx'
import CreationCard from './CreationCard.jsx'
import { useVisited } from '/src/contexts/VisitedContext'
import foodtruck from '/img/creations/foodtruck_representation.png'
import fruitsMarket from '/img/creations/fruitsMarket_representation.png'
import spa from '/img/creations/spa_representation.png'
import gilles from '/img/creations/gilles_representation.png'



export default function Creations() {
  
  const { setOtherPageHasBeenVisited } = useVisited()
  
  useEffect(()=>{setOtherPageHasBeenVisited(true)}, [])

  return (
    <div>
      <div className='flex flex-col'>
        <div className='flex justify-around mb-4'>
          <CreationCard src={foodtruck} projectName='Foodtruck' language='react' link='https://foodtruck.leorip.com/'>
            Site pour un foodtruck
          </CreationCard>
          <CreationCard src={fruitsMarket} projectName='Fruits Market' language='react' link='https://fruitsmarket.leorip.com/'>
            Devanture d'un marché de fruits
          </CreationCard>
        </div>
        <div className='flex justify-around'>
          <CreationCard src={spa} projectName='SPA' language='PHP & SQL' link='https://spa.leorip.com/'>
            Société protéctrice des Animaux <small className="pl-12 -mr-12 text-red-800">(<small className='line-through'>Single Page Application</small>)</small>
          </CreationCard>
          <CreationCard src={gilles} projectName='Gilles' language='PHP & SQL' link='https://gilles.leorip.com/'>
            Un projet en commun,<br />dont je me suis occupé du backEnd et de l'invention du jeu
          </CreationCard>
        </div>
      </div>
      <br />
      <Footer />
    </div>
  )
}
