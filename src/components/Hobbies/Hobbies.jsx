import { useEffect } from 'react'
import Footer from '../Footer/Footer'
import { useVisited } from '/src/contexts/VisitedContext'

export default function Hobbies() {
  const { setOtherPageHasBeenVisited } = useVisited()
  
  useEffect(()=>{
    setOtherPageHasBeenVisited(true)
    document.querySelector('html').classList.add('bg_hobbies')
    return()=>{document.querySelector('html').classList.remove('bg_hobbies')}
  }, [])


  return <div>
      Hobbies

      <Footer />
    </div>
}