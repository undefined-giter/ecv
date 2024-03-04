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
    { text: "Everybody in this country should learn to program a computer, because it teaches you how to think", author: "Steve Jobs" },
    { text: "Work hard in silence, let success make the noise", author: "Frank Ocean" },
    { text: "The difference between a dream and a projet, is a date", author: "Walt Disney" },
    { text: "The best way to predict the futur is to invent it", author: "Alan Kay" },
    { text: "La vie est ce que nous en faisons.", author: "John Lennon" },
    { text: "Le seul vrai voyage... ne serait pas d'aller vers de nouveaux paysages, mais d'avoir d'autres yeux.", author: "Marcel Proust" }
  ]


  return <div className='px-4'>
    <div className={`-translate-x-3 ${s.inner_tab_div} ${darkMode ? '' : s.inner_tab_div_light}`}>
      <button onClick={() => setTabSelected(0)} className={`${s.tabs} ${s.left_tab} ${!tabSelected ? s.selected : ''} ${!darkMode & !tabSelected ? s.selected_light : ''} ${!darkMode ? s.tabs_light : ''}`}>Professionnelle</button>
      <span  className={s.separator}>|</span>
      <button onClick={() => setTabSelected(1)} className={`${s.tabs} ${s.right_tab} ${tabSelected ? s.selected : ''} ${!darkMode & tabSelected ? s.selected_light : ''} ${!darkMode ? s.tabs_light : ''}`}>personnelle</button>
    </div>
    <div className='overflow-hidden'>
      <p style={{textAlign:'center', transform: `${!tabSelected ? 'translate(-68px, -10px)' : 'translate(59px, -10px)'}`}}>🔻</p>
    </div>
    <div className='max-w-[750px] min-w-[210px] mx-auto mb-8'>
      { !tabSelected &&
        <p style={{ textAlign: 'justify' }}>
          &nbsp;&nbsp;&nbsp;&nbsp;Vous êtes certainement ici suite à ma candidature, vous savez donc que je suis en recherche d'emploi, et que vous avez un besoin qui correspond à mes compétences.
          <br /><br />
          &nbsp;&nbsp;&nbsp;&nbsp;Mon expérience professionnelle sur des projets de grande envergure, et la réalisation de multiples petits projets personnels FullStack m'ont construit une solide base de connaissances en développement.
          <br /><br />
          &nbsp;&nbsp;&nbsp;&nbsp;Prenant plaisir à créer, je suis déterminé à poursuivre ma formation sur diverses technologies et à approfondir mes compétences aquises.<br />
          Ma curiosité et mon implication naturelles sont des atouts que je souhaite mettre en avant, car en pratique ils se traduisent en une véritable valeur ajoutée à l'équipe.
          <br /><br />
          &nbsp;&nbsp;&nbsp;&nbsp;Ayant travaillé dans différents domaines, je me sens particulièrement en phase avec le développement, ce domaine où l'apprentissage continu, la créativité, l'apport personnel et la veille technologique sont une passion plus qu'une nécessité.<br />
          C'est pourquoi je suis convaincu de ma contribution positive à l'entreprise.
          <br /><br />
          &nbsp;&nbsp;&nbsp;&nbsp;Pour toutes ces raisons et bien d'autres je pense être un élément à avoir dans son équipe.<br />
          Bonne nouvelle : je recherche un emploi autour de Lyon !<br />
          Et comme une bonne nouvelle ne vient jamais seule, sachez que je suis disponible immédiatement !<br /><br />
          Alors n'attendez pas plus pour <Link onClick={() => setOpenContactModal(true)} to={{ pathname: "/", state: { openContactModal: true } }}><b>me contacter</b></Link> !
          <br /><br />
          &nbsp;&nbsp;&nbsp;&nbsp;Ayant envie de travailler, j'espère avoir un retour de votre part pour pouvoir échanger sur notre éventuelle collaboration.
        </p>
      }
      {
        tabSelected === 1 &&
        <div className='mx-auto'>
          <div style={{ textAlign: 'justify', marginBottom: '16px' }}>
            <p>Célibataire et sans enfants, j'ai particulièrement envie d'évoluer pour pouvoir construire ma vie pérennement et comme je le désire.</p>
            <p>Agréable et positif, je pense être un collègue sympathique comme l'on montré mes précédentes expériences.</p>
          </div>
          <CitationsCarousel quotes={quotes} />
          <br />
          <div className='relative'>
            <p className='absolute left-1/2 -translate-x-1/2 -translate-y-4 z-10 text-sm'>Habitant de l'agglomération lyonnaise</p>
            <div className={darkMode ? s.dark_iframe_map : ''}>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62978.12976235903!2d4.81781879230826!3d45.76585083713645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4ea516ae88797%3A0x408ab2ae4bb21f0!2sLyon!5e0!3m2!1sfr!2sfr!4v1709564000993!5m2!1sfr!2sfr" style={{border:0, width: '100%', maxWidth: '750px', height: '370px', maxHeight: '400px'}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      }
    </div>
    <Footer checkShowFooter={tabSelected} />
  </div>
}
