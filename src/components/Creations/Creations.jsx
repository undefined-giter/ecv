import { useEffect } from 'react'
import Footer from '../Footer/Footer.jsx'
import CreationCard from './CreationCard.jsx'
import { useVisited } from '/src/contexts/VisitedContext'
import foodtruck from '/img/creations/foodtruck_representation.jpg'
import fruitsMarket from '/img/creations/fruitsMarket_representation.jpg'
import spa from '/img/creations/spa_representation.jpg'
import gilles from '/img/creations/gilles_representation.jpg'
import cabane from '/img/creations/cabane_representation.png'


export default function Creations() {
  
  const { setOtherPageHasBeenVisited } = useVisited()
  
  useEffect(()=>{setOtherPageHasBeenVisited(true)}, [])

  return (
    <>
      <div className="flex justify-center flex-wrap">
        <div className="p-4">
          <CreationCard src={cabane} projectName="Cabane" language="Laravel & Vue 3" link="https://cabane.leorip.com/">
            Site pour présenter, réserver et gérer<small>(as admin) </small> la réservation d'une cabane.
            <br />
            <span className='text-orange-500 !rounded-lg'>Se connecter (mail/pass) :</span>
            <br /><span className='select-text !rounded-none'>fake_admin@fake.admin</span>
            <br /><span className='select-text !rounded-none'>fake_admin@fake.admin</span>
          </CreationCard>
        </div>
        <div className="p-4">
          <CreationCard src={foodtruck} projectName="Foodtruck" language="react" link="https://foodtruck.leorip.com/">
            Site pour un foodtruck
          </CreationCard>
        </div>
        <div className="p-4">
          <CreationCard src={fruitsMarket} projectName="Fruits Market" language="react" link="https://fruitsmarket.leorip.com/">
            Devanture d'un marché de fruits
          </CreationCard>
        </div>
        <div className="p-4">
          <CreationCard src={spa} projectName="SPA" language="PHP & SQL" link="https://spa.leorip.com/">
            Société protectrice des Animaux
            <div className='absolute ml-4'><small className="text-red-800">(<small className='line-through'>Single Page Application</small>)</small></div>
          </CreationCard>
        </div>
        <div className="p-4">
          <CreationCard src={gilles} projectName="Gilles" language="PHP & SQL" link="https://gilles.leorip.com/">
            Projet en commun, un jeu inventé par mes soins dont j'ai développé le backEnd
          </CreationCard>
        </div>
      </div>
      <div className='text-left md:text-center p-1 mb-8 md:mb-0'>
        D'autres anciens projets sur mon <a href="https://github.com/undefined-giter?tab=repositories" target='_blank' className='font-bold'>github↗️</a>
      </div>
      <Footer />
    </>
  )
}
