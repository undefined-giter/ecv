import s from "./style.module.css"
import React, { useState, useEffect } from "react"
import { Outlet, useNavigate, useLocation } from "react-router-dom"
import { useScreen } from '/src/contexts/ScreenContext'
import { useDarkMode } from '/src/contexts/DarkModeContext'

export default function Menu(){

  const { isLargeScreen } = useScreen()
  const { darkMode, toggleDarkMode } = useDarkMode()
  
  const navigate = useNavigate()
  const location = useLocation()

  function googleTranslateElementInit(){
    new google.translate.TranslateElement(
      {pageLanguage: 'auto'},
      'google_translate_element'
    )

    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = 'src/components/Menu/googleTrad.css'
    document.head.appendChild(link)
    document.querySelector('.goog-te-combo').setAttribute('title', 'Choose Language\n 🗣️🌎🌍🌏🤌')
  }
  
  const [imgLangShown, setimgLangShown] = useState(true)
  const switchImgInput = ()=>{
    setimgLangShown(!imgLangShown)

    googleTranslateElementInit()
  }
  

  const [menuBurgerDeployed, setMenuBurgerDeployed] = useState(false)

  const toggleMenu = () =>{setMenuBurgerDeployed(!menuBurgerDeployed)}

  const separator = isLargeScreen && <span className={s.gray}>|</span>

  useEffect(() => {
    if(menuBurgerDeployed){
      const handleClickOutside = ()=>{setMenuBurgerDeployed(false)}
      setTimeout(()=>{document.addEventListener('click', handleClickOutside)}, 0)
      return()=>{document.removeEventListener('click', handleClickOutside)}
    }
  }, [menuBurgerDeployed])

  useEffect(() =>{
    setMenuBurgerDeployed(false)
  }, [isLargeScreen])
  
  return(
    <main>
      <nav className={`${s.navbar} ${darkMode ? s.dark_menu : s.light_menu} ${isLargeScreen ? '' : 'w-[40px]'}`}>
      {!isLargeScreen && <img onClick={() => setMenuBurgerDeployed(!menuBurgerDeployed)} src={darkMode ? '/img/menu_burger_cyan.svg' : '/img/menu_burger.svg'} width='40px' className={s.svg} />}
        <ul className={`${s.menu} ${isLargeScreen ? '' : s.menu_burger} ${menuBurgerDeployed && !isLargeScreen ? `${s.burger_open} ${!darkMode && s.light_deployed}` : ''}`}>
          <li onClick={() => {navigate("/"); toggleMenu()}} className={`${location.pathname === "/" ? s.active : ""} ${darkMode ? s.dark_hover : s.light_hover}`}>Présentation</li>{separator}
          <li onClick={() => {navigate("/Curriculum"); toggleMenu()}} className={`${location.pathname === "/Curriculum" ? s.active : ""} ${darkMode ? s.dark_hover : s.light_hover}`}>Curriculum</li>{separator}
          <li onClick={() => {navigate("/Objectif"); toggleMenu()}} className={`${location.pathname === "/Objectif" ? s.active : ""} ${darkMode ? s.dark_hover : s.light_hover}`}>Objectif</li>{separator}
          <li onClick={() => {navigate("/Realisations"); toggleMenu()}} className={`${location.pathname === "/Realisations" ? s.active : ""} ${darkMode ? s.dark_hover : s.light_hover}`}>Réalisations</li>{separator}
          <li onClick={() => {navigate("/Hobbys"); toggleMenu()}} className={`${location.pathname === "/Hobbys" ? s.active : ""} ${darkMode ? s.dark_hover : s.light_hover}`}>Hobbys</li>
        </ul>
      </nav>
      <div className={`flex fixed right-1 top-1`} style={{zIndex: '995'}}>
        {imgLangShown && <button onClick={switchImgInput} className={s.btnLang}>
            <img src="/img/world.png" alt="Language Selection" title={"Choose Language\n 🗣️🌎🌍🌏🤌"} />
        </button>}
        <div id='google_translate_element'></div>
        <button onClick={toggleDarkMode} className={s.darkModeSwitcher}>
          {darkMode ? '☀️' : '🌑'}
        </button>
      </div>
      <div className={isLargeScreen ? s.outlet : ''}>
        <Outlet />
      </div>
    </main>
  )
}
