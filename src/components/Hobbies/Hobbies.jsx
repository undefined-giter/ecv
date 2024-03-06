import { useEffect } from 'react'
import s from './style.module.css'
import Footer from '../Footer/Footer.jsx'
import Grid from './Grid.jsx'
import { useVisited } from '/src/contexts/VisitedContext'

export default function Hobbies() {
  
  const { setOtherPageHasBeenVisited } = useVisited()
  useEffect(()=>{setOtherPageHasBeenVisited(true)}, [])
  
  const hobbies = [
    {src: 'animaux.png', title: 'les animaux'},
    {src: 'archery tag.jpg', title: 'archery tag', txtDark:true},
    {src: 'billard.png', title: 'activités diverses', txtDark:true},
    {src: 'decouverte.jpg', title: 'découvertes', txtDark:true},
    {src: 'marche.jpg', title: 'marche'},
    {src: 'montagnes.jpg', title: 'montagnes'},
    {src: 'hick.jpg', title: 'hick'},
    {src: 'humour.jpg', title: 'spectacles d\'humour'},
    {src: 'toulouse.jpg', title: 'villes françaises'},
    {src: 'voyage.jpg', title: 'voyages'},
    {src: 'visites.jpg', title: 'visites'},
    {src: 'vue.jpg', title: 'vues'},
    {src: 'monuments.jpg', title: 'monuments'},
    {src: 'palais.jpg', title: 'le plaisir des yeux'},
    {src: 'barStarWars.jpg', title: 'le plaisir d\'imaginer'},
    
    {src: 'spectacles.jpg', title: 'spectacles de lumières', verticalImg:true},
    {src: 'nourriture.jpg', title: 'nourriture', verticalImg:true},
    {src: 'createur.png', title: 'créateur🖐️', verticalImg:true},
    {src: 'rat.jpg', title: 'tous les animaux', verticalImg:true},
    {src: 'imaginaire.png', title: 'univers imaginaires', verticalImg:true, moveLeft:true},
    {src: 'botc.png', title: 'jeux à identité cachée', verticalImg:true, txtDark:true},
    {src: 'taywin.png', title: 'cinéphile', verticalImg:true}
  ]

  return(
    <div>
      <div className={s.wrapper}>
        <img src="/img/bg/hobbies.jpg" alt="Background" className={s.background} />

        <div className={s.txt}>Hobbys</div>

        <img src="/img/bg/hobbies_noBg.png" alt="Foreground" className={s.foreground} />
      </div>

      <div className='z-999 relative text-center font-semibold underline underline-offset-2'>Quelques activités :</div>

      <Grid hobbies={hobbies} />

      <p className='relative mb-8 md:mb-3 z-20 text-center'>Et bien d'autres centres d'intérêts !</p>

      <Footer />
    </div>
  )
}