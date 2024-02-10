import React, { useState, useEffect } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import s from "./style.module.css";

export  default function Menu(){
  const navigate = useNavigate();
  const location = useLocation();

  const [darkMode, setDarkMode] = useState(true)
  const [widthMenu, setWidthMenu] = useState(window.innerWidth >= 600 && window.screen.width >= 600);
  const [menuBurgerDeployed, setMenuBurgerDeployed] = useState(false);


  useEffect(() => {
    const htmlElement = document.querySelector('html')
    if (htmlElement) {
      if (darkMode) { htmlElement.classList.add('dark') }
      else { htmlElement.classList.remove('dark') }
    }
  }, [darkMode]);

  useEffect(() => {
    const handleResize = () => {
      setWidthMenu(window.innerWidth >= 600 && window.screen.width >= 600)
    };

    window.addEventListener("resize", handleResize)
    return()=>{window.removeEventListener("resize", handleResize)}
  }, []);

  const toggleMenu = () =>{
    setMenuBurgerDeployed(!menuBurgerDeployed)
  }

  return (
    <div>
      <menu>
        <div>
          <div className={s.menu}>
              <ul>
                <li onClick={() => {navigate("/")}} className={location.pathname === "/" ? s.active : ""}>Présentation</li>
                <li onClick={() => {navigate("/Curriculum")}} className={location.pathname === "/Curriculum" ? s.active : ""}>Curriculum</li>
                <li onClick={() => {navigate("/Objectif")}} className={location.pathname === "/Objectif" ? s.active : ""}>Mon Objectif</li>
                <li onClick={() => {navigate("/Réalisations")}} className={location.pathname === "/R%C3%alisations" ? s.active : ""}>Réalisations</li>
                <li onClick={() => {navigate("/Hobbys")}} className={location.pathname === "/Hobbys" ? s.active : ""}>Hobbys</li>
              </ul>
          </div>
        </div>
        <div className='flex absolute left-2 top-2'>
          <button onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? '☀️' : '🌑'}
          </button>
          <button>
            <img width='20px' src="@/public/img/world.png" alt="Language Selection" />
          </button>
        </div>
      </menu>
      <div>
        <Outlet />
      </div>
    </div>
  )
}
