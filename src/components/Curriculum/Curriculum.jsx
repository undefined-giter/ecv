import { useEffect } from 'react'
import s from './style.module.css'
import { useVisited } from '/src/contexts/VisitedContext'

export default function Curriculum() {
  const { setOtherPageHasBeenVisited } = useVisited()

  useEffect(()=>{
    setOtherPageHasBeenVisited(true)
    document.querySelector('html').classList.add('bg_curriculum')
    return()=>{document.querySelector('html').classList.remove('bg_curriculum')}
  }, [setOtherPageHasBeenVisited])

  return(
    <div></div>
  )
}