import s from './style.module.css'
import { Link, useLocation } from 'react-router-dom'
import Footer from '../Footer/Footer.jsx'
import { useEffect, useState } from 'react'
import { useScreen } from '/src/contexts/ScreenContext'
import { useVisited } from '/src/contexts/VisitedContext'
import { useDarkMode } from '/src/contexts/darkModeContext'
import CitationsCarousel from './CitationsCarousel.jsx'

export default function Goal(){

  const location = useLocation()
  const { darkMode } = useDarkMode()
  const { setOpenContactModal } = useScreen()
  const { setOtherPageHasBeenVisited } = useVisited()

  useEffect(()=>{setOtherPageHasBeenVisited(true)}, [])

  const { kindOfPresentation } = location.state || 0
  const [ tabSelected, setTabSelected ] = useState(kindOfPresentation)

  useEffect(()=>{
    setTabSelected(kindOfPresentation)
  }, [kindOfPresentation])

  const quotes = [
    { text: "Le seul vrai voyage... ne serait pas d'aller vers de nouveaux paysages, mais d'avoir d'autres yeux.", author: "Marcel Proust" },
    { text: "Everybody in this country should learn to program a computer, because it teaches you how to think", author: "Steve Jobs" },
    { text: "Work hard in silence, let success make the noise", author: "Frank Ocean" },
    { text: "The best way to predict the futur is to invent it", author: "Alan Kay" },
    { text: "The difference between a dream and a projet, is a date", author: "Walt Disney" },
    { text: "Life is what we make it", author: "John Lennon" }
  ]


  return <div className='px-4 mt-2'>
    <div className={`${s.inner_tab_div} ${darkMode ? '' : s.inner_tab_div_light}`}>
      <button onClick={() => setTabSelected(0)} className={`${s.tabs} ${s.left_tab} ${!tabSelected ? s.selected : ''} ${!darkMode & !tabSelected ? s.selected_light : ''} ${!darkMode ? s.tabs_light : ''}`}>Professionnelle</button>
      <span  className={s.separator}>|</span>
      <button onClick={() => setTabSelected(1)} className={`${s.tabs} ${s.right_tab} ${tabSelected ? s.selected : ''} ${!darkMode & tabSelected ? s.selected_light : ''} ${!darkMode ? s.tabs_light : ''}`}>personnelle</button>
    </div>
    <div className='overflow-hidden'>
      <p style={{textAlign:'center', transform: `${!tabSelected ? 'translate(-68px, -10px)' : 'translate(59px, -10px)'}`}}>🔻</p>
    </div>
    <div className='max-w-[750px] min-w-[210px] mx-auto mb-8'>
      { 
        !tabSelected &&
        <p style={{textAlign:'justify'}}>
          Si vous consultez cette page, c'est probablement suite à ma candidature. Permettez-moi de vous expliquer pourquoi je suis le candidat idéal pour répondre à vos besoins.
        <br /><br />
        Ayant une expérience significative dans les projets de grande envergure, et la réalisation de plusieurs petits projets personnels FullStack, j'ai déjà acquis des compétences variées, notamment en développement web.
        <br /><br />
        Aimant créer, je suis engagé dans un apprentissage continu pour enrichir mes compétences. De plus, ma curiosité et mon implication sont des avantages concrets lors de la réalisation de projets.
        <br /><br />
        L'expérience acquise dans divers secteurs m'a conforté dans mon attrait pour le développement, un champ où innovation, créativité et veille technologique sont essentielles.
        <br /><br />
        Convaincu d'être un atout pour l'équipe, je suis motivé et disponible immédiatement pour commencer un emploi dans la région lyonnaise.
        <br /><br />
        N'hésitez pas à <Link onClick={()=>setOpenContactModal(true)} to={{pathname: "/", state: {openContactModal:true} }}><b>me contacter</b></Link> pour discuter de ma contribution au sein de votre entreprise.
        <br /><br />
        Enthousiaste à l'idée de collaborer avec vous, j'attends avec impatience l'opportunité d'échanger sur notre éventuelle collaboration.
        </p>      
      }
      {
        tabSelected === 1 &&
        <div className='mx-auto'>
          <div style={{textAlign:'justify', marginBottom:'16px'}}>
            <p>Désireux d'évoluer professionnellement pour construire durablement mon avenir, je suis motivé et prêt à m'engager pleinement dans un nouvel emploi.</p>
            <p>Agréable et positif, je pense être un collègue sympathique comme l'on montré mes précédentes expériences.</p>
          </div>
          <CitationsCarousel quotes={quotes} />
          <br />
          <div className='relative'>
            <p className='absolute left-1/2 -translate-x-1/2 -translate-y-3.5 z-10 text-xs'>Habitant de l'agglomération lyonnaise</p>
            <div className={darkMode ? s.dark_iframe_map : ''}>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62978.12976235903!2d4.81781879230826!3d45.76585083713645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4ea516ae88797%3A0x408ab2ae4bb21f0!2sLyon!5e0!3m2!1sfr!2sfr!4v1709564000993!5m2!1sfr!2sfr?entry=ttu" style={{border:0, width: '100%', maxWidth: '750px', height: '300px'}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      }
    </div>
    <Footer checkShowFooter={tabSelected} />
  </div>
}
