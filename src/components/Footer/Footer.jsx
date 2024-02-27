import s from './style.module.css'
import { useDarkMode } from '/src/contexts/DarkModeContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
import { useLocation } from "react-router-dom"
import { useVisited } from '/src/contexts/VisitedContext'



export default function Footer({checkShowFooter}){
    const { darkMode } = useDarkMode()
    const year = new Date().getFullYear()
    const location = useLocation()

    const { homepageHasBeenVisited, otherPageHasBeenVisited, homepageNotFirstVisited } = useVisited()
    
    const [ userIsBottom, setUserIsBottom ] = useState(false)
    const [ makeAppear, setMakeAppear ] = useState(false)

    useEffect(() => {
        if(location.pathname === '/' & !otherPageHasBeenVisited || location.pathname === '/' & homepageNotFirstVisited & !homepageHasBeenVisited){setMakeAppear(true)}
        else{setMakeAppear(false)}

        if(makeAppear){
            const footerDiv = document.querySelector('#footer')
            if(footerDiv){footerDiv.classList.add(s.appear)}
        }        

        const checkScrollPosition = () => {
            const totalPageHeight = document.documentElement.scrollHeight
            const viewportHeight = window.innerHeight
            const currentScrollPosition = window.scrollY + viewportHeight

            if(currentScrollPosition >= totalPageHeight - 10){setUserIsBottom(true)}
            else{setUserIsBottom(false)}
        }
        checkScrollPosition()

        window.addEventListener('scroll', checkScrollPosition)
        window.addEventListener('resize', checkScrollPosition)

        return()=>{
            window.removeEventListener('scroll', checkScrollPosition)
            window.removeEventListener('resize', checkScrollPosition)
        }
    }, [makeAppear, location.pathname, checkShowFooter])

    return(
        userIsBottom ?
            <div id='footer' className={`text-sm ${s.footer} ${darkMode ? s.footer_dark : s.footer_light} ${makeAppear ? s.hide : ''}`} title="📞 06 15 16 64 90 📱" >
                <small><FontAwesomeIcon icon={faAngleRight} /></small> Léo RIPERT {year}
            </div>
        :
            <></>
    )
}