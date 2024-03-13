import Card from './Card'
import { useEffect } from 'react'
import Footer from '../Footer/Footer.jsx'
import { useScreen } from '/src/contexts/ScreenContext'
import { useVisited } from '/src/contexts/VisitedContext'
import { useDarkMode } from '/src/contexts/DarkModeContext'
import { faCode, faLaptopCode, faPlane, faIndustry, faWheatAwn, faPencil } from '@fortawesome/free-solid-svg-icons'


export default function Curriculum() {

  const { darkMode } = useDarkMode()
  const { isLargeScreen } = useScreen()
  const { setOtherPageHasBeenVisited } = useVisited()

  useEffect(()=>{setOtherPageHasBeenVisited(true)}, [])
  

  return(
    isLargeScreen ?
      <>
        <div className="flex flex-col relative overflow-hidden mb-2">

        <div className={`timeline absolute border-opacity-90 border h-full ${darkMode ? 'border-cyan-500' : 'border-cyan-800'}`} style={{left: 'calc(50% - 1px)', border:'2px solid', borderRadius:'2px'}}></div>

          <div className="flex justify-center px-8 mt-4 ml-5">
            <Card icon={faCode} goRightIcon firstLeftItem title='Développeur' subtitle='Carrefour, Apprentissage en Alternance' duration='1 an' src='2022_analysteInformatique_bac+3.jpg' src2='2022 _adminSystemesInformation_bac+3.jpg' customImgWidth='693px'>Développement et maintenance d'applications internes, principalement en PHP, SQL et JS.<br />Environnements Windows et Linux, Git.<br />Équipe restreinte, méthode Agile.<br /><br />Utilisation de Linux au quotidien.<br />Gestion de VM en grande entreprise.<br />Git, VM de dev, hors-prod et production.</Card>
          </div>

          <div className="flex justify-end px-8 mb-8 ml-1.5">
            <div className="w-1/2" style={{ marginLeft: 'calc(50% + 15px)' }}>
              <Card icon={faLaptopCode} title='Développeur Web' subtitle='Formation continue chez 3w Academy' duration='3 mois' src='2020_bac_2.jpg' customImgHeight='252px'>Acquisition des bases du Développement Web.<br />Créations desites avec les langages HTML, CSS, JS, PHP et SQL. Ainsi que mySQL, Bootstrap, WordPress et jQuery.<br /><br />Émerveillement du potentiel informatique.<br />Intérêt croissant envers le développement.<br />Naissance d'une passion.</Card>
            </div>
          </div>

          <div className="flex justify-center px-8 mb-4 ml-8">
            <Card icon={faPlane} goRightIcon title='Logistique Aéronautique' subtitle='Liebherr Aérospace' duration='1 an'>Préparation et regroupement de pièces.<br />Gestion du planning, répartissement des sorties.<br />Borderaux douanes, formation nouveaux, priorisation urgences, communication clients.<br /><br />Adaptation à un emploi en open-space.<br />Appréciation d'une collaboration durable.</Card>
          </div>

          <div className="flex justify-end px-8 mb-8 ml-1.5">
            <div className="w-1/2" style={{ marginLeft: 'calc(50% + 15px)' }}>
              <Card icon={faIndustry} title='Industries Pharmaceutique, Agroalimentaire et Métallurgique' breakIt subtitle='Gattefossé, Biomérieux, Uriage Lab, Medtronic, Minitubes' duration='1 an'>Extraction de composés biochimiques.<br />Contrôle qualité, passation de consignes.<br />Assimilation de roulements et process stricts.<br />Création d'outils pour diagnostiques médicaux.<br />Suivi en parallèles d'OF physiques et virtuels.<br /><br />Limitant ma créativité et réflexion, le travail industriel a eu le mérite de clarifié mes envies.</Card>
            </div>
          </div>

          <div className="flex justify-center px-8 mb-4 ml-9">
              <Card icon={faWheatAwn} goRightIcon lastLeftItem title='Brasseur' subtitle='Brasserie Georges, La Soyeuse, McAuslan' duration='3 ans' src='2014_bac_pro.jpg' customImgWidth='394px' customImgHeight='232px'>Fabrication de bières savoureuses et variées.<br />Contrôle des brassins du grain au verre.<br />Conseils et explications aux clients.<br /><br />Intérêt de la théorie des transformations biochimiques.<br />Découverte d'un monde convivial, et d'un nouveau loisir.</Card>
          </div>

          <div className="flex justify-end w-full px-8 mb-6 ml-1">
            <div className="w-1/2" style={{ marginLeft: 'calc(50% + 15px)' }}>
              <Card icon={faPencil} title='Menuisier' subtitle='Komilfo, SDCC, Berriat Bâtiment, Sarrazin, Gontard' duration='5 ans' src='2010_cap_fab_men.jpg' src2='2011_cap_ins_men.jpg' customImgWidth='240px' customImgHeight='272px'>Fabrication et pose de fenêtres, portes, volets et meubles anciens en menuiseries artisanales. Fabrication d'ossature bois et pose de menuiseries aluminium.<br /><br />1 an chez les Compagnons du Devoir.<br />Véritable découverte du plaisir de créer.<br />Appréciation de l'échange avec les clients.<br />Apprentissage de l'autonomie et du travail soigné.</Card>
            </div>
          </div>
        </div>
        <Footer />
      </>

    :

      <>
        <div className="flex flex-col items-center justify-center overflow-hidden mb-8">
          <div className="relative mb-2">
            <div className="timeline absolute border-cyan-500 h-full border -translate-x-2.5 translate-y-4" style={{border:'2px solid', borderRadius:'2px'}}></div>
            
            <Card icon={faCode} title='Développeur' subtitle='Carrefour, Apprentissage en Alternance' duration='1 an' src='2022_analysteInformatique_bac+3.jpg' src2='2022 _adminSystemesInformation_bac+3.jpg'>Développement et maintenance d'applications internes, principalement en PHP, SQL et JS.<br />Environnements Windows et Linux, Git.<br />Équipe restreinte, méthode Agile.<br /><br />Utilisation quotidienne de Linux.<br />Gestion de VM en grande entreprise.<br />Git, VM de dev, hors-prod et production.</Card>
            <Card icon={faLaptopCode} title='Développeur Web' subtitle='Formation continue chez 3w Academy' duration='3 mois' src='2020_bac_2.jpg'>Acquisition des bases du Développement Web.<br />Créations desites avec les langages HTML, CSS, JS, PHP et SQL. Ainsi que mySQL, Bootstrap, WordPress et jQuery.<br /><br />Émerveillement du potentiel informatique.<br />Intérêt croissant envers le développement.<br />Naissance d'une passion.</Card>
            <Card icon={faPlane} title='Logistique Aéronautique' subtitle='Liebherr Aérospace' duration='1 an'>Préparation et regroupement de pièces.<br />Gestion du planning, répartissement des sorties.<br />Borderaux douanes, formation de nouveaux, priorisation urgences, communication clients.<br /><br />Adaptation à un emploi en open-space.<br />Appréciation d'une collaboration durable.</Card>
            <Card icon={faIndustry} title='Industries Pharmaceutique, Agroalimentaire et Métallurgique' breakIt subtitle='Gattefossé, Biomérieux, Uriage Lab, Medtronic, Minitubes' duration='1 an'>Extraction de composés biochimiques.<br />Contrôle qualité, passation de consignes.<br />Assimilation de roulements et process stricts.<br />Création d'outils pour diagnostiques médicaux.<br />Suivi en parallèles d'OF physiques et virtuels.<br /><br />Limitant ma créativité et réflexion, le travail industriel a eu le mérite de clarifié mes envies.</Card>
            <Card icon={faWheatAwn} title='Brasseur' subtitle='Brasserie Georges, La Soyeuse, McAuslan' duration='3 ans' src='2014_bac_pro.jpg' customImgHeight='252px'>Fabrication de bières savoureuses et variées.<br />Contrôle des brassins du grain au verre.<br />Conseils et explications aux clients.<br /><br />Intérêt de la théorie des transformations biochimiques. Découverte d'un monde convivial, et d'un nouveau loisir.</Card>
            <Card icon={faPencil} title='Menuisier' subtitle='Komilfo, SDCC, Berriat Bâtiment, Sarrazin, Gontard' duration='5 ans' src='2010_cap_fab_men.jpg' src2='2011_cap_ins_men.jpg' customImgHeight='336px'>Fabrication et pose de fenêtres, portes, volets et meubles anciens en menuiseries artisanales. Fabrication d'ossature bois et pose de menuiseries aluminium.<br /><br />1 an chez les Compagnons du Devoir.<br />Véritable découverte du plaisir de créer.<br />Appréciation de l'échange avec les clients.<br />Développement de l'autonomie et travail soigné.</Card>
          </div>
        </div>
        <Footer />
      </>
  )
}