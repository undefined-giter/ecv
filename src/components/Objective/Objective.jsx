import { useEffect } from 'react'
import { useVisited } from '/src/contexts/VisitedContext'

export default function Objective(){
  const { setOtherPageHasBeenVisited } = useVisited()
  
  useEffect(()=>{setOtherPageHasBeenVisited(true)}, [setOtherPageHasBeenVisited])

  return(
    <div>Objectif</div>
  )
}
