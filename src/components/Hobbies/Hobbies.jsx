import { useEffect } from 'react'
import s from './style.module.css'
import Footer from '../Footer/Footer.jsx'
import { useVisited } from '/src/contexts/VisitedContext'

export default function Hobbies() {
  
  const { setOtherPageHasBeenVisited } = useVisited()
  useEffect(()=>{setOtherPageHasBeenVisited(true)}, [])

  return (
    <div className={s.wrapper}>

      <img src="/img/bg/hobbies.jpg" alt="Background" className={s.background} />
      
      <div className={s.txt}>Hobbys</div>

      <img src="/img/bg/hobbies_noBg.png" alt="Foreground" className={s.foreground} />

      

      <Footer />
    </div>
  );
}