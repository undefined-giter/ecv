import 'animate.css'
import s from './style.module.css'
import Contact from './Contact.jsx'
import Modal from '../Modal/Modal.jsx'
import Footer from '../Footer/Footer.jsx'
import { useScreen } from '/src/contexts/ScreenContext'
import { useVisited } from '/src/contexts/VisitedContext'
import { useDarkMode } from '/src/contexts/DarkModeContext'
import React, { useState, useEffect, Suspense  } from 'react'

const TechStack = React.lazy(() => import('./TechStack.jsx'))


export default function Homepage(){

  const { darkMode } = useDarkMode()
  const { setOpenContactModal } = useScreen()
  const { isMiddleScreen, openContactModal } = useScreen()
  const { welcomeDoneOnce, setWelcomeDoneOnce, homepageHasBeenVisited, setHomepageHasBeenVisited, otherPageHasBeenVisited } = useVisited()
  
  const contact = "<p style='cursor:pointer'>N'hésitez pas à me contacter<small>⤵️</small></p>"
  
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
          setHomepageHasBeenVisited(true)
        }, 5000)
      }
    }, 42)

    return ()=>clearInterval(welcomeInterval)
  }, [txt, welcome])

  const [ProfileImage, setProfileImage] = useState(null)
  const [imageLoaded, setImageLoaded] = useState(false);
  useEffect(() => {
    const loadProfileImage = async () => {
      const module = await import('./ProfilImg.jsx')
      setProfileImage(() => module.default)
      setImageLoaded(true)
    }
    loadProfileImage()
  }, [])

  useEffect(() => {
    const cv = document.querySelector('#cv')
    const lm = document.querySelector('#lm')
  
    const addAnimationClasses = doc => {doc.classList.add('animate__animated', 'animate__bounce')}
    let cvTimeout
    let lmTimeout
    if(!welcomeDoneOnce){
      cvTimeout = setTimeout(()=>{addAnimationClasses(cv)}, 4600)
      lmTimeout = setTimeout(()=>{addAnimationClasses(lm)}, isMiddleScreen ? 4800 : 4600)
    }
  
    return()=>{clearTimeout(cvTimeout); clearTimeout(lmTimeout);}
  }, [])

  const [isModalOpen, setIsModalOpen] = useState(openContactModal | false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {setIsModalOpen(false); setOpenContactModal(false)}


  return (
    <div className={s.ctn}>
      <div className='text-center mb-8'>
        <div style={{ display: 'inline-block' }}>{homepageHasBeenVisited ? <div onClick={()=>{setIsModalOpen(!isModalOpen)}} style={{position:'relative', zIndex:970, width:'content'}} dangerouslySetInnerHTML={{ __html: contact }} /> : !homepageHasBeenVisited & welcomeDoneOnce ? <p>{txt}</p> : <p>{welcome}</p>}</div>

        <div className="mt-8">
          {!ProfileImage && <div style={{ height:'120px', textAlign:'center', paddingTop:'45px' }}>{ welcomeDoneOnce && <p>Chargement🔎</p>}</div>}
          <div className={`${!welcomeDoneOnce ? s.hide : s.show} ${imageLoaded & !homepageHasBeenVisited ? s.fade_in : ''}`}>
            {ProfileImage && <ProfileImage />}
          </div>
          <h2 className={`${`${s.my_name} ${!welcomeDoneOnce ? s.hide : s.show}`} transition-opacity duration-900 ${!homepageHasBeenVisited & !otherPageHasBeenVisited ? s.my_name_firstTime : ''} ${!darkMode ? s.my_name_light : ''}`}>Léo RIPERT</h2>
          <p className={`${`${s.job_title} ${!welcomeDoneOnce ? s.hide : s.show}`} transition-opacity duration-1000 ${!homepageHasBeenVisited & !otherPageHasBeenVisited ? s.job_title_firstTime : ''}`}>Développeur Web</p>
          <div className={`flex items-center justify-center h-24`}>
            <Suspense fallback={<div>{/* Chargement🔎 */}</div>}>
              <TechStack />
            </Suspense>
          </div>
        </div>
        <div className={`flex mt-2 items-center justify-center ${isMiddleScreen ? 'flex-row' : 'flex-col'} ${!welcomeDoneOnce ? s.hide : s.docs_show}`}>
          <a href="/docs/CV_RIPERTLéo_Développeur.pdf" target="_blank" className={`${s.docs} ${!darkMode ? s.docs_light : ''}`} id="cv">Télécharger CV</a>
          <a href="/docs/LM_RIPERTLéo_Développeur.pdf" target="_blank" className={`${s.docs} ${!darkMode ? s.docs_light : ''} ${!isMiddleScreen ? 'mt-2' : ''}`} id="lm" >Télécharger LM</a>
        </div>
        <br />
        <br />
        <div id='contact'>
          <button onClick={openModal} className={`${s.docs} ${!darkMode ? s.docs_light : ''} ${!welcomeDoneOnce ? s.hide : s.mail_show} text-4xl`}>📧</button>
          <Modal isOpen={isModalOpen} onClose={closeModal}>
            <Contact />
          </Modal>
        </div>
      </div>
      <Footer />
    </div>
  )
}
