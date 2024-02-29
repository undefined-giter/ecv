import s from "./style.module.css"
import React, { useState, useEffect } from "react"
import { Outlet, useNavigate, useLocation } from "react-router-dom"
import { useScreen } from '/src/contexts/ScreenContext'
import { useDarkMode } from '/src/contexts/DarkModeContext'

export default function Menu(){

  const { isMiddleScreen } = useScreen()
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

  const separator = isMiddleScreen && <span className={s.gray}>|</span>

  useEffect(() => {
    if(menuBurgerDeployed){
      const handleClickOutside = ()=>{setMenuBurgerDeployed(false)}
      setTimeout(()=>{document.addEventListener('click', handleClickOutside)}, 0)
      return()=>{document.removeEventListener('click', handleClickOutside)}
    }
  }, [menuBurgerDeployed])

  useEffect(() =>{
    setMenuBurgerDeployed(false)
  }, [isMiddleScreen])

  function childsAppear(){
    let presentationChilds = document.querySelectorAll('.presentationChilds')
    let separatorhiddedInBurger = document.querySelector('.separatorhiddedInBurger')
    presentationChilds.forEach(li=>{li.classList.add(s.subMenu)})
    document.querySelector('#childsUl').style.display = isMiddleScreen ? 'block' : 'inline'
    document.querySelector('#childsUl').style.outline = 'var(--green) 2px solid'
    document.querySelector('#presentation').style.borderRadius = '1em 1em 0 0'
    if(isMiddleScreen){separatorhiddedInBurger.style.display = 'inline'}
    else{separatorhiddedInBurger.style.display = 'none'}
  }
  function childsDisappear(){
    let presentationChilds = document.querySelectorAll('.presentationChilds')
    let separatorhiddedInBurger = document.querySelector('.separatorhiddedInBurger')
    presentationChilds.forEach(li=>{li.classList.remove(s.subMenu)})
    document.querySelector('#childsUl').style.display = 'none'
    document.querySelector('#childsUl').style.outline = 'none'
    document.querySelector('#presentation').style.borderRadius = '1em'
    if(separatorhiddedInBurger){separatorhiddedInBurger.style.display = 'none'}
  }

  return(
    <main>
      <nav className={`${s.navbar} ${darkMode ? s.dark_menu : s.light_menu} ${isMiddleScreen ? '' : 'w-[40px]'}`}>
      {!isMiddleScreen && <img onClick={() => setMenuBurgerDeployed(!menuBurgerDeployed)} src={darkMode ? '/img/menu_burger_cyan.svg' : '/img/menu_burger.svg'} width='40px' className={s.svg} />}
        <ul className={`${s.menu} ${isMiddleScreen ? '' : s.menu_burger} ${menuBurgerDeployed && !isMiddleScreen ? `${s.burger_open} ${!darkMode && s.light_deployed}` : ''}`}>
          <li onClick={() => {navigate("/"); toggleMenu()}} className={`${location.pathname === "/" ? s.active : ""} ${darkMode ? s.dark_hover : s.light_hover}`}>Accueil</li>{separator}
          <li onClick={() => {navigate("/Curriculum"); toggleMenu()}} className={`${location.pathname === "/Curriculum" ? s.active : ""} ${darkMode ? s.dark_hover : s.light_hover}`}>Curriculum</li>{separator}
          <li id='presentation' onClick={() => {navigate("/Presentation"); toggleMenu(); childsDisappear()}} onMouseEnter={childsAppear} onMouseLeave={childsDisappear} className={`${s.presentation_parent} ${location.pathname === "/Presentation" ? s.active : ""} ${darkMode ? s.dark_hover : s.light_hover } ${isMiddleScreen ? '' : s.burger_subMenuParent}`}>Présentation
            <ul id='childsUl' className={`absolute font-medium text-xs p-0.5 ${darkMode ? s.childsUl : s.childsUl_light} ${isMiddleScreen ? s.transform_translate : s.burger_subMenuUl}`}>
              <li onClick={e => {e.stopPropagation(); navigate("/Presentation", { state: { kindOfPresentation: 0 } }); toggleMenu(); childsDisappear()}} className={`presentationChilds ${s.hide} ${s.leftChild} px-2 ${darkMode ? '' : s.leftChild_light} ${isMiddleScreen ? '' : s.burger_leftChild}`}>Professionnelle</li>
              <li className={`presentationChilds separatorhiddedInBurger ${s.hide} ${s.separator_unique}`}>|</li>
              <li onClick={e => {e.stopPropagation(); navigate("/Presentation", { state: { kindOfPresentation: 1 } }); toggleMenu(); childsDisappear()}} className={`presentationChilds ${s.hide} ${s.rightChild} px-2 ${darkMode ? '' : s.rightChild_light} ${isMiddleScreen ? '' : s.burger_rightChild}`}>Personnelle</li>
            </ul>
          </li>{separator}
          <li onClick={() => {navigate("/Realisations"); toggleMenu()}} className={`${location.pathname === "/Realisations" ? s.active : ""} ${darkMode ? s.dark_hover : s.light_hover}`}>Réalisations</li>{separator}
          <li onClick={() => {navigate("/Hobbys"); toggleMenu()}} className={`${location.pathname === "/Hobbys" ? s.active : ""} ${darkMode ? s.dark_hover : s.light_hover}`}>Hobbys</li>
        </ul>
      </nav>
      <div className={`flex fixed right-1 top-1`} style={{zIndex: '995'}}>
        {imgLangShown && <button onClick={switchImgInput} className={s.btnLang}>
            <img src="/img/world.png" width='20px' alt="Language Selection" title={"Choose Language\n 🗣️🌎🌍🌏🤌"} />
        </button>}
        <div id='google_translate_element'></div>
        <button onClick={toggleDarkMode} className={s.darkModeSwitcher}>
          {darkMode ? '☀️' : '🌑'}
        </button>
      </div>
      <div className={isMiddleScreen ? s.outlet : ''}>
        <Outlet />
      </div>
    </main>
  )
}
