import { useEffect } from 'react'
import { useVisited } from '/src/contexts/VisitedContext'

export default function Creations() {
  const { setOtherPageHasBeenVisited } = useVisited()
  
  useEffect(()=>{setOtherPageHasBeenVisited(true)}, [setOtherPageHasBeenVisited])

  return (
    <div>Quelques Projets / parmis bien d'autres...</div>
  )
}
