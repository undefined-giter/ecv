import { useVisited } from '/src/contexts/VisitedContext'

export default function Creations() {
  const { setOtherPageHasBeenVisited } = useVisited()
  setOtherPageHasBeenVisited(true)

  return (
    <div>Quelques Projets / parmis bien d'autres...</div>
  )
}
