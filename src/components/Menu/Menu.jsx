import React, { useState, useEffect } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import s from "./style.module.css";

export  default function Menu(){

  const thirdUserScreenWidth = window.screen.width / 3;
  const MENU_WIDTH = Math.max(thirdUserScreenWidth, 767);
  const navigate = useNavigate();
  const location = useLocation();

  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    const htmlElement = document.querySelector('html')
    if (htmlElement) {
      if (darkMode) { 
        htmlElement.classList.add('dark')
        htmlElement.classList.remove('light')
      }
      else {
        htmlElement.classList.add('light')
        htmlElement.classList.remove('dark')
      }
    }
  }, [darkMode]);


  function googleTranslateElementInit(){
    new google.translate.TranslateElement(
      {pageLanguage: 'auto'},
      'google_translate_element'
    )

    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = 'src/components/Menu/googleTrad.css'
    document.head.appendChild(link)
    document.querySelector('.goog-te-combo').setAttribute('title', 'Choose Language\n 🗣️🌎🌍🌏🤌');
  }
  
  const [imgLangShown, setimgLangShown] = useState(true)
  const switchImgInput = ()=>{
    setimgLangShown(!imgLangShown)

    googleTranslateElementInit();
  }


  const [widthMenu, setWidthMenu] = useState(window.innerWidth >= MENU_WIDTH && window.screen.width >= MENU_WIDTH);
  const [menuBurgerDeployed, setMenuBurgerDeployed] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWidthMenu(window.innerWidth >= MENU_WIDTH && window.screen.width >= MENU_WIDTH)
    };

    window.addEventListener("resize", handleResize)
    return()=>{window.removeEventListener("resize", handleResize)}
  }, []);

  const toggleMenu = () =>{setMenuBurgerDeployed(!menuBurgerDeployed)}

  const separator = widthMenu ? <span className={s.gray}>|</span> : ''

  return(
    <div>
      <div className={s.menuContainer}>
        <nav className={`${darkMode ? s.dark_menu : s.light_menu}`}>
          {!widthMenu && !darkMode && <img onClick={() => setMenuBurgerDeployed(!menuBurgerDeployed)} src='/img/menu_burger.svg' width='40px' className={s.svg} />}
          {!widthMenu && darkMode && <img onClick={() => setMenuBurgerDeployed(!menuBurgerDeployed)} src='/img/menu_burger_cyan.svg' width='40px' className={s.svg} />}
          <ul className={`${s.menu} ${widthMenu ? '' : s.menu_burger} ${menuBurgerDeployed && !widthMenu ? `${s.burger_open} ${!darkMode && s.light_deployed}` : ''}`}>
            <li onClick={() => {navigate("/"); toggleMenu()}} className={`${location.pathname === "/" ? s.active : ""} ${darkMode ? s.dark_hover : s.light_hover}`}>Présentation</li>{separator}
            <li onClick={() => {navigate("/Curriculum"); toggleMenu()}} className={`${location.pathname === "/Curriculum" ? s.active : ""} ${darkMode ? s.dark_hover : s.light_hover}`}>Curriculum</li>{separator}
            <li onClick={() => {navigate("/Objectif"); toggleMenu()}} className={`${location.pathname === "/Objectif" ? s.active : ""} ${darkMode ? s.dark_hover : s.light_hover}`}>Mon Objectif</li>{separator}
            <li onClick={() => {navigate("/Realisations"); toggleMenu()}} className={`${location.pathname === "/Realisations" ? s.active : ""} ${darkMode ? s.dark_hover : s.light_hover}`}>Réalisations</li>{separator}
            <li onClick={() => {navigate("/Hobbys"); toggleMenu()}} className={`${location.pathname === "/Hobbys" ? s.active : ""} ${darkMode ? s.dark_hover : s.light_hover}`}>Hobbys</li>
          </ul>
          <div className='flex absolute right-1 top-1'>
            {imgLangShown && <button onClick={switchImgInput} className={s.btnLang}>
                <img src="img/world.png" alt="Language Selection" title={"Choose Language\n 🗣️🌎🌍🌏🤌"} />
              </button>
            }
            <div id='google_translate_element'></div>
            <button onClick={() => setDarkMode(!darkMode)} className={s.darkModeSwitcher}>
              {darkMode ? '☀️' : '🌑'}
            </button>
          </div>
        </nav>
      </div>
      <div className={s.outlet}>
        <Outlet />
      </div>
    </div>
  )
}
