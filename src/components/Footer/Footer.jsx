import s from './style.module.css'
import { useLocation } from 'react-router-dom'
import { useDarkMode } from '/src/contexts/DarkModeContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'


export default function Footer(){

    const location = useLocation()
    let appear = location.pathname === '/'

    const { darkMode } = useDarkMode()
    const year = new Date().getFullYear()

    if(appear){
        setTimeout(()=>{
            document.querySelector('#footer').classList.add(s.footer_show)
        }, 5700)
    }

    return <div id='footer' className={`text-sm ${s.footer} ${darkMode ? s.footer_dark : s.footer_light} ${ appear ? s.hide : ''}`}>
        <FontAwesomeIcon icon={faAngleRight} /> Léo RIPERT {year}
    </div>
}