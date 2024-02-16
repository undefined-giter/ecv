import { useVisited } from '/src/contexts/VisitedContext';

export default function Curriculum() {
  const { setOtherPageHasBeenVisited } = useVisited()
  setOtherPageHasBeenVisited(true)
  return (
    <div>Curriculum</div>
  )
}