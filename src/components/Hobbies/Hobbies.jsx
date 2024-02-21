import { useVisited } from '/src/contexts/VisitedContext'
import { useEffect } from "react"

export default function Hobbies() {
  const { setOtherPageHasBeenVisited } = useVisited()
  setOtherPageHasBeenVisited(true)
  
  useEffect(()=>{document.querySelector('html').classList.add('bg_hobbies')
    return()=>{document.querySelector('html').classList.remove('bg_hobbies')}
  }, [])


  return (
    <div>Hobbies</div>
  )
}