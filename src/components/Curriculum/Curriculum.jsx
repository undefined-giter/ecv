import { useVisited } from '/src/contexts/VisitedContext'
import { useEffect } from 'react'

export default function Curriculum() {
  const { setOtherPageHasBeenVisited } = useVisited()
  setOtherPageHasBeenVisited(true)

  useEffect(()=>{document.querySelector('html').classList.add('bg_curriculum')
    return()=>{document.querySelector('html').classList.remove('bg_curriculum')}
  }, [])

  return(
    <div>Curriculum</div>
  )
}