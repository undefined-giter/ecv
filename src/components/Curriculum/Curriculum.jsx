import Card from './Card'
import { useEffect } from 'react'
import s from './style.module.css'
import { useScreen } from '/src/contexts/ScreenContext'
import { useVisited } from '/src/contexts/VisitedContext'
import { faCode, faLaptopCode, faPlane, faIndustry, faWheatAwn, faPencil } from '@fortawesome/free-solid-svg-icons'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import Footer from '../Footer/Footer'


export default function Curriculum() {
  const { isLargeScreen } = useScreen()
  const { setOtherPageHasBeenVisited } = useVisited()

  useEffect(()=>{
    setOtherPageHasBeenVisited(true)
    document.querySelector('html').classList.add('bg_curriculum')
    return()=>{document.querySelector('html').classList.remove('bg_curriculum')}
  }, [setOtherPageHasBeenVisited])
  

  return(
    isLargeScreen ?

      <div className="container bg-gray-200 mx-auto w-full h-full">
        {/* <div className="relative wrap overflow-hidden p-10 h-full">
          <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border" style={{left: '50%'}}></div>
          
          <div className="mb-8 flex justify-between items-center w-full right-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
              <h1 className="mx-auto font-semibold text-lg text-white">1</h1>
            </div>
            <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
              <h3 className="mb-3 font-bold text-gray-800 text-xl">Lorem Ipsum</h3>
              <p className="text-sm  tracking-wide text-gray-900 text-opacity-100">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
          </div>

          <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
              <h1 className="mx-auto text-white font-semibold text-lg">2</h1>
            </div>
            <div className="order-1 bg-red-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
              <h3 className="mb-3 font-bold text-white text-xl">Lorem Ipsum</h3>
              <p className="text-sm font-medium  tracking-wide text-white text-opacity-100">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
          </div>
          
          <div className="mb-8 flex justify-between items-center w-full right-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
              <h1 className="mx-auto font-semibold text-lg text-white">3</h1>
            </div>
            <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
              <h3 className="mb-3 font-bold text-gray-800 text-xl">Lorem Ipsum</h3>
              <p className="text-sm  tracking-wide text-gray-900 text-opacity-100">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
          </div>

          <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
              <h1 className="mx-auto text-white font-semibold text-lg">4</h1>
            </div>
            <div className="order-1 bg-red-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
              <h3 className="mb-3 font-bold text-white text-xl">Lorem Ipsum</h3>
              <p className="text-sm font-medium  tracking-wide text-white text-opacity-100">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
          </div>
        </div> */}
      </div>

    :

    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="relative overflow-hidden p-6">
        <div className="absolute border-opacity-20 border-cyan-500 h-full border -translate-x-2"></div>
        
        <Card icon={faCode} title='Développeur' subtitle='Carrefour, Apprentissage en Alternance' duration='1 an'>Développement et maintenance d'applications internes.<br />Principalement en PHP, mais aussi en SQL et JS.<br />Environnement Windows et Linux, Git.<br />Équipe réstreinte, méthode Agile.<br /><br />Utilisation quotidienne de Linux.<br />Git, dev, hors-prod et production en équipe.<br />Découverte de la gestion des VM en grande entreprise.</Card>
        <Card icon={faLaptopCode} title='Développeur Web' subtitle='Formation continue chez 3w Academy' duration='3 mois'>Acquisition des bases du Développement Web et autoformation.<br />Création de site avec les langages HTML, CSS, JS, PHP et SQL.<br />Découverte de VSC, mySQL, Bootstrap, WordPress, jQuery, Git...<br /><br />Émerveillement du potentiel informatique.<br />Intérêt croissant envers le développement.<br />Naissance d'une passion.</Card>
        <Card icon={faPlane} title='Logistique Aéronautique' subtitle='Liebherr Aérospace' duration='1 an'>Gestion du planning, répartissement des sorties aux personnes consernées. Préparation et regroupement de commandes.<br />Mails, priorisation des urgences et communication sous-traitants.<br />Borderaux d'envoie douanes. Formation de nouveaux.<br /><br />Adaptation à un emploi en open-space.<br />Appréciation du confort d'avoir des collègues de longue date.</Card>
        <Card icon={faIndustry} title='Industries Pharmaceutique, Agroalimentaire et Métallurgique' breakIt subtitle='Gattefossé, Biomérieux, Uriage Lab, Medtronic, Minitubes' duration='1 an'>Extraction de composés biochimiques.<br />Création d'outils pour diagnostiques médicaux.<br />Compréhension et assimilation de roulements et process stricts.<br />Suivi parallèles de multiples OF physique et informatique.<br />Contrôle qualité, passation de consignes.<br /><br />N'ayant pas la possibilité d'apporter ma touche personnelle ni le plaisir de réfléchir suffisemment, le travail en production industriel m'as permis de mieux cerner mes désirs.</Card>
        <Card icon={faWheatAwn} title='Brasseur' subtitle='Brasserie Georges, La Soyeuse, McAuslan' duration='3 ans'>Fabrication de bières variées.<br />Création et suivi de recettes traditionnels.<br />Contrôle des brassins du grain au verre.<br />Conseils et explications aux clients.<br /><br />Découverte d'un monde chaleureux, devenu un hobby.</Card>
        <Card icon={faPencil} title='Menuisier' subtitle='Komilfo, SDCC, Berriat Bâtiment, Sarrazin, Gontard' duration='5 ans'>Fabrication et pose de fenêtres, portes, volets et meubles de style anciens dans des menuiseries artisanales.<br />Fabrication d'ossature bois et pose de menuiseries aluminium.<br /><br />Véritable découverte du plaisir de créer.<br />Appréciation de l'échange avec les clients.<br />Apprentissage de l'autonomie et du travail soigné.</Card>
        <Footer />
      </div>
    </div>
  )
}