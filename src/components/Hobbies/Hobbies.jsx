import { useEffect } from 'react'
import s from './style.module.css'
import Footer from '../Footer/Footer.jsx'
import Grid from './Grid.jsx'
import { useVisited } from '/src/contexts/VisitedContext'

export default function Hobbies() {
  
  const { setOtherPageHasBeenVisited } = useVisited()
  useEffect(()=>{setOtherPageHasBeenVisited(true)}, [])
  
  const hobbies = [
    {src: 'animaux.jpg', title: 'les animaux'},
    {src: 'archery tag.jpg', title: 'archery tag', txtDark:true},
    {src: 'billard.jpg', title: 'activités diverses', txtDark:true},
    {src: 'decouverte.jpg', title: 'découvertes', txtDark:true},
    {src: 'marche.jpg', title: 'marche'},
    {src: 'montagnes.jpg', title: 'montagnes', txtDark:true},
    {src: 'hick.jpg', title: 'hick'},
    {src: 'humour.jpg', title: 'spectacles d\'humour'},
    {src: 'toulouse.jpg', title: 'villes'},
    {src: 'voyage.jpg', title: 'voyages'},
    {src: 'visites.jpg', title: 'visites'},
    {src: 'vue.jpg', title: 'vues'},
    {src: 'monuments.jpg', title: 'monuments'},
    {src: 'palais.jpg', title: 'le plaisir des yeux'},
    {src: 'barStarWars.jpg', title: 'le plaisir d\'imaginer'},
    
    {src: 'spectacles.jpg', title: 'spectacles de lumières', verticalImg:true},
    {src: 'nourriture.jpg', title: 'nourriture', verticalImg:true},
    {src: 'createur.jpg', title: 'créateur🖐️', verticalImg:true, txtDark:true},
    {src: 'rat.jpg', title: 'tous les animaux', verticalImg:true},
    {src: 'imaginaire.jpg', title: 'univers imaginaires', verticalImg:true, moveLeft:true},
    {src: 'botc.jpg', title: 'jeux à identité cachée', verticalImg:true, txtDark:true},
    {src: 'taywin.jpg', title: 'cinéphile', verticalImg:true}
  ]

  return(
    <div>
      <div className={s.wrapper}>
        <img src="/img/bg/hobbies.jpg" alt="Background" className={s.background} />

        <div className={s.txt}>Hobbys</div>

        <img src="/img/bg/hobbies_noBg.png" alt="Foreground" className={s.foreground} />
      </div>

      <div className='z-999 relative text-center font-semibold underline underline-offset-2'>Quelques activités photographiées :</div>

      <Grid hobbies={hobbies} />

      <p className='relative mb-8 md:my-4 z-20 text-center'>Et bien d'autres centres d'intérêts !</p>

      <Footer />
    </div>
  )
}