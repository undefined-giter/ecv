import { useEffect } from 'react'
import s from './style.module.css'
import Footer from '../Footer/Footer.jsx'
import Grid from './Grid.jsx'
import { useVisited } from '/src/contexts/VisitedContext'

export default function Hobbies() {
  
  const { setOtherPageHasBeenVisited } = useVisited()
  useEffect(()=>{setOtherPageHasBeenVisited(true)}, [])

  const hobbies = [
    {src: '/img/hobbies/taywin.png', title: 'Cinéphile'},
    {src: '/img/hobbies/taywin.png', title: 'Montagne'},
    {src: '/img/hobbies/taywin.png', title: 'Montagne'},
    {src: '/img/hobbies/taywin.png', title: 'Montagne'},
    {src: '/img/hobbies/taywin.png', title: 'Montagne'},
    {src: '/img/hobbies/taywin.png', title: 'Montagne'},
    {src: '/img/hobbies/taywin.png', title: 'Montagne'},
    {src: '/img/hobbies/taywin.png', title: 'Montagne'},
    {src: '/img/hobbies/taywin.png', title: 'Montagne'},
    {src: '/img/hobbies/taywin.png', title: 'Montagne'},
    {src: '/img/hobbies/taywin.png', title: 'Montagne'},
    {src: '/img/hobbies/taywin.png', title: 'Montagne'},
    {src: '/img/hobbies/taywin.png', title: 'Montagne'},
  ]

  return (
    <div>
      <div className={s.wrapper}>
        <img src="/img/bg/hobbies.jpg" alt="Background" className={s.background} />
        
        <div className={s.txt}>Hobbys</div>

        <img src="/img/bg/hobbies_noBg.png" alt="Foreground" className={s.foreground} />
      </div>

      <Grid hobbies={hobbies} />

      <Footer />
    </div>
  )
}