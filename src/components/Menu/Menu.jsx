import React, { useState, useEffect } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import s from "./style.module.css";

export  default function Menu(){
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
  }
  
  const [imgShown, setImgShown] = useState(true)
  const switchImgInput = ()=>{
    setImgShown(!imgShown)

    googleTranslateElementInit();
  }


  const [widthMenu, setWidthMenu] = useState(window.innerWidth >= 600 && window.screen.width >= 600);
  const [menuBurgerDeployed, setMenuBurgerDeployed] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWidthMenu(window.innerWidth >= 600 && window.screen.width >= 600)
    };

    window.addEventListener("resize", handleResize)
    return()=>{window.removeEventListener("resize", handleResize)}
  }, []);

  const toggleMenu = () =>{setMenuBurgerDeployed(!menuBurgerDeployed)}


  return (
    <div>
      <div className={s.menuContainer}>
        <nav>
          <ul className={`${s.menu} ${darkMode ? s.dark_menu : s.light_menu}`}>
            <li onClick={() => {navigate("/"); toggleMenu()}} className={location.pathname === "/" ? s.active : ""}>Présentation</li><span className={s.gray}>|</span>
            <li onClick={() => {navigate("/Curriculum"); toggleMenu()}} className={location.pathname === "/Curriculum" ? s.active : ""}>Curriculum</li><span className={s.gray}>|</span>
            <li onClick={() => {navigate("/Objectif"); toggleMenu()}} className={location.pathname === "/Objectif" ? s.active : ""}>Mon Objectif</li><span className={s.gray}>|</span>
            <li onClick={() => {navigate("/Realisations"); toggleMenu()}} className={location.pathname === "/Realisations" ? s.active : ""}>Réalisations</li><span className={s.gray}>|</span>
            <li onClick={() => {navigate("/Hobbys"); toggleMenu()}} className={location.pathname === "/Hobbys" ? s.active : ""}>Hobbys</li>
          </ul>
          <div className='flex absolute right-1 top-1'>
            {imgShown && <button onClick={switchImgInput} className={s.btnLang}>
                <img src="img/world.png" alt="Language Selection" />
              </button>
            }
            <div id='google_translate_element'></div>
            <button onClick={() => setDarkMode(!darkMode)}>
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
