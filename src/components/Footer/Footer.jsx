import s from './style.module.css'
import { useDarkMode } from '/src/contexts/DarkModeContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'


export default function Footer(){

    const { darkMode } = useDarkMode()
    const year = new Date().getFullYear();

    return <div className={`text-sm ${s.footer} ${darkMode ? s.footer_dark : s.footer_light}`}>
        <FontAwesomeIcon icon={faAngleRight} /> Léo RIPERT {year}
    </div>
}