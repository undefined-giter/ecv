import 'animate.css'
import s from './style.module.css'
import Contact from './Contact.jsx'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useScreen } from '/src/contexts/ScreenContext'
import { useDarkMode } from '/src/contexts/DarkModeContext'
import { useVisited } from '/src/contexts/VisitedContext'


export default function Presentation(){
  
  const { darkMode } = useDarkMode()
  const { isLargeScreen, scrollToContact } = useScreen()
  const { welcomeDoneOnce, setWelcomeDoneOnce, presentationHasBeenVisited, setPresentationHasBeenVisited, otherPageHasBeenVisited } = useVisited()
  
  const contact = "N'hésitez pas à me <a href='#contact'><b>contacter</b><small>⤵️</small></a>"
  
  const [welcome, setWelcome] = useState(' ')
  const txt = 'Bienvenue sur mon eCV !'

  useEffect(() => {
    const welcomeInterval = setInterval(()=>{
      if(welcome.length < txt.length & !welcomeDoneOnce){
        setWelcome(prevTxt => txt.substring(0, prevTxt.length +1))}
      else{
        clearInterval(welcomeInterval)
        setWelcomeDoneOnce(true)
        setTimeout(()=>{
          setPresentationHasBeenVisited(true)
        }, 5000)
      }
    }, 60)

    return ()=>clearInterval(welcomeInterval)
  }, [txt, welcome])

  const [ProfileImage, setProfileImage] = useState(null)
  const [imageLoaded, setImageLoaded] = useState(false);
  useEffect(() => {
    const loadProfileImage = async () => {
      const module = await import('./ProfilImg')
      setProfileImage(() => module.default)
      setImageLoaded(true)
    }
    loadProfileImage()
  }, [])

  useEffect(() => {
    const cv = document.querySelector('#cv')
    const lm = document.querySelector('#lm')
  
    const addAnimationClasses = doc => {doc.classList.add('animate__animated', 'animate__bounce')}
    
    const cvTimeout = setTimeout(()=>{addAnimationClasses(cv)}, 3600)
    const lmTimeout = setTimeout(()=>{addAnimationClasses(lm)}, isLargeScreen ? 3800 : 3600)
  
    return()=>{clearTimeout(cvTimeout);clearTimeout(lmTimeout);}
  }, [])

  const location = useLocation();
  useEffect(() => {
    if(location.state?.scrollToContact){
      const contactSection = document.querySelector('#contact')
      if(contactSection){  contactSection.scrollIntoView({ behavior:'smooth' })
      }
    }
  }, [location])

  useEffect(() => {
    if(scrollToContact){document.querySelector('#contact').scrollIntoView()}
  }, [scrollToContact])


  return (
    <div className='text-center'>
      <div style={{ display: 'inline-block' }}>{presentationHasBeenVisited & otherPageHasBeenVisited ? <div style={{position:'relative', zIndex:970, width:'content'}} dangerouslySetInnerHTML={{ __html: contact }} /> : !presentationHasBeenVisited & welcomeDoneOnce ? <p>{txt}</p> : <p>{welcome}</p>}</div>

      <div className="mt-8">
        {!ProfileImage && <div style={{ height:'120px', textAlign:'center', paddingTop:'45px' }}>Chargement🔎</div>}
        <div className={`${s.hide} ${imageLoaded ? s.fade_in : ''}`}>
          {ProfileImage && <ProfileImage />}
        </div>
        <h2 className={`${s.my_name} ${!darkMode ? s.my_name_light : ''}`}>Léo RIPERT</h2>
        <p className={s.job_title}>Développeur Web</p>
      </div>      
      <div className={`flex mt-2 ${isLargeScreen ? 'flex-row items-center justify-center' : 'flex-col items-center justify-center'}`}>
        <a href="/docs/CV_RIPERTLéo_Développeur.pdf" target="_blank" className={`${s.docs} ${!darkMode ? s.docs_light : ''}`} id="cv">Télécharger CV</a>
        <a href="/docs/LM_RIPERTLéo_Développeur.pdf" target="_blank" className={`${s.docs} ${!darkMode ? s.docs_light : ''} ${!isLargeScreen ? 'mt-2' : ''}`} id="lm" >Télécharger LM</a>
      </div>
      <br />
      <h2>Envoyez-moi un email</h2>
      <div id='contact'>
        <Contact />
      </div>
    </div>
  )
}
