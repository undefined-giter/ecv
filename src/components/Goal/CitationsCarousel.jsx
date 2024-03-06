import { useState, useEffect } from 'react'

export default function CitationsCarousel({ quotes }){
  const [currentIndex, setCurrentIndex] = useState(0)
  const [opacity, setOpacity] = useState(1)

  const goNext = ()=>{setOpacity(0)}

  const goBack = ()=>{
    const isFirstItem = currentIndex === 0;
    const newIndex = isFirstItem ? quotes.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  useEffect(() =>{
    if(opacity === 0){
      setTimeout(() =>{
        const newIndex = currentIndex === quotes.length - 1 ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
        setOpacity(1)
      }, 500)
    }
  }, [opacity, currentIndex, quotes.length])

  useEffect(() => {
    const intervalId = setInterval(() =>{
      goNext()
    }, 5000)
    return () => clearInterval(intervalId)
  }, [])

  return (
    <div className='relative flex text-center mx-auto h-[72px]' style={{ overflowY: 'auto', opacity, transition:'opacity 500ms ease-in-out' }}>
        <div className='text-center m-auto'>
            <p className='text-center text-zinc-400'>"{quotes[currentIndex].text}"</p>
            <small className='text-center text-zinc-500'>{quotes[currentIndex].author}</small>
        </div>
        <div className='absolute right-2 top-10'>
            <button onClick={goBack}>⬅️</button>
            <button onClick={goNext}>➡️</button>
        </div>        
    </div>
  )
}
