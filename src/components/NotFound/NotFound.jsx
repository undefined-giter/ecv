import { useVisited } from '/src/contexts/VisitedContext'

export default function NotFound() {
  const { setOtherPageHasBeenVisited } = useVisited()
  setOtherPageHasBeenVisited(true)
  
  return (
    <div>NotFound</div>
  )
}