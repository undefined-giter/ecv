import { useState, useEffect } from 'react'
import { useScreen } from '/src/contexts/ScreenContext'

export default function Grid({hobbies}){

    const { isLargeScreen } = useScreen()
    const [visibleCount, setVisibleCount] = useState(isLargeScreen ? 16 : 4)

    const handleScroll = ()=>{
        if(window.innerHeight + document.documentElement.scrollTop + 50 >= document.documentElement.scrollHeight){
            setVisibleCount(prevCount => prevCount + 4)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)

        return()=>{window.removeEventListener('scroll', handleScroll)}
    }, [])

    return (
        <div className="relative grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-12 p-4 mx-8 justify-items-center justify-center">
            {hobbies.slice(0, visibleCount).map(({src, title, verticalImg, txtDark, moveLeft}, index)=>(
                <div key={index} className="w-full flex flex-col my-auto">
                    <div className="relative hover:scale-110 transition-transform duration-300 ease-in-out rounded-lg">
                        <img src={`/img/hobbies/${src}`}  alt={`${title} : représentation`} className="w-full h-auto object-cover my-auto rounded-lg" style={{aspectRatio: verticalImg ? '9/10' : '16/9',  userSelect: 'none'}} />
                        <p className="absolute text-center" style={{right: moveLeft ? '22%' : '5px', bottom: 0, margin: 'auto', height: 'fit-content', width: 'fit-content', color: txtDark ? 'var(--navyBlue)' : ''}}>{title}</p>
                        <div className="absolute top-0 left-0 right-0 bottom-0 bg-transparent rounded-lg z-20"></div>
                    </div>
                </div>
            ))}
        </div>
    )
}