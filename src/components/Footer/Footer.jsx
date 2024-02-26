import s from './style.module.css'
import { useDarkMode } from '/src/contexts/DarkModeContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'



export default function Footer(){
    const { darkMode } = useDarkMode()
    const year = new Date().getFullYear()

    
    const [userIsBottom, setUserIsBottom] = useState(false)

    useEffect(() => {
        const checkScrollPosition = () => {
            const totalPageHeight = document.documentElement.scrollHeight
            const viewportHeight = window.innerHeight
            const currentScrollPosition = window.scrollY + viewportHeight

            if(currentScrollPosition >= totalPageHeight - 10){setUserIsBottom(true)}
            else{setUserIsBottom(false)}
        }
        checkScrollPosition()

        window.addEventListener('scroll', checkScrollPosition)

        return()=>window.removeEventListener('scroll', checkScrollPosition)
    }, [])

    return(
        userIsBottom ?
            <div className={`text-sm ${s.footer} ${darkMode ? s.footer_dark : s.footer_light}`} title="📱06 15 16 64 90" >
                <FontAwesomeIcon icon={faAngleRight} /> Léo RIPERT {year}
            </div>
        :
            <></>
    )
}