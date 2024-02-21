import { useVisited } from '/src/contexts/VisitedContext'

export default function Objective(){
  const { setOtherPageHasBeenVisited } = useVisited()
  setOtherPageHasBeenVisited(true)

  return(
    <div>Objectif</div>
  )
}
