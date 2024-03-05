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
        <div className="flex flex-col relative overflow-hidden">

        <div className={`absolute border-opacity-90 border h-full mb-8 ${darkMode ? 'border-cyan-500' : 'border-cyan-800'}`} style={{left: 'calc(50% - 2px)'}}></div>

          <div className="flex justify-center px-8 mt-4 -ml-2">
            <Card icon={faCode} goRightIcon firstItem title='Développeur' subtitle='Carrefour, Apprentissage en Alternance' duration='1 an' src='2022_analysteInformatique_bac+3.png' src2='2022 _adminSystemesInformation_bac+3.png'>Développement et maintenance d'applications internes, principalement en PHP, mais aussi en SQL et JS.<br />Environnement Windows et Linux, Git.<br />Équipe restreinte, méthode Agile.<br /><br />Utilisation quotidienne de Linux.<br />Git, dev, hors-prod et production en équipe.<br />Découverte de la gestion des VM en grande entreprise.</Card>
          </div>

          <div className="flex justify-end px-8 mb-8">
            <div className="w-1/2" style={{ marginLeft: 'calc(50% + 15px)' }}>
              <Card icon={faLaptopCode} title='Développeur Web' subtitle='Formation continue chez 3w Academy' duration='3 mois' src='2020_bac_2.jpg'>Acquisition des bases du Développement Web et autoformation.<br />Création de site avec les langages HTML, CSS, JS, PHP et SQL.<br />Découverte de VSC, mySQL, Bootstrap, WordPress, jQuery, Git...<br /><br />Émerveillement du potentiel informatique.<br />Intérêt croissant envers le développement.<br />Naissance d'une passion.</Card>
            </div>
          </div>

          <div className="flex justify-center px-8 mb-4">
            <Card icon={faPlane} goRightIcon title='Logistique Aéronautique' subtitle='Liebherr Aérospace' duration='1 an'>Gestion du planning, répartissement des sorties.<br />Préparation et regroupement de pièces.<br />priorisation des urgences et communication sous-traitants.<br />Borderaux d'envoie douanes. Formation de nouveaux.<br /><br />Adaptation à un emploi en open-space.<br />Appréciation du confort d'avoir des collègues de longue date.</Card>
          </div>

          <div className="flex justify-end px-8 mb-8">
            <div className="w-1/2" style={{ marginLeft: 'calc(50% + 15px)' }}>
              <Card icon={faIndustry} title='Industries Pharmaceutique, Agroalimentaire et Métallurgique' breakIt subtitle='Gattefossé, Biomérieux, Uriage Lab, Medtronic, Minitubes' duration='1 an'>Extraction de composés biochimiques.<br />Création d'outils pour diagnostiques médicaux.<br />Assimilation de roulements et process stricts.<br />Suivi parallèles de multiples OF physique et informatique.<br />Contrôle qualité, passation de consignes.<br /><br />N'ayant pas la possibilité d'apporter ma touche personnelle ni le plaisir de réfléchir suffisemment, le travail en production industriel m'as permis de mieux cerner mes désirs.</Card>
            </div>
          </div>

          <div className="flex justify-center px-8 mb-4">
              <Card icon={faWheatAwn} goRightIcon title='Brasseur' subtitle='Brasserie Georges, La Soyeuse, McAuslan' duration='3 ans' src='2014_bac_pro.jpg'>Fabrication de bières variées.<br />Création et suivi de recettes traditionnels.<br />Contrôle des brassins du grain au verre.<br />Conseils et explications aux clients.<br /><br />Découverte d'un monde chaleureux, puis devenu un hobby.</Card>
          </div>

          <div className="flex justify-end w-full px-8 mb-6">
            <div className="w-1/2" style={{ marginLeft: 'calc(50% + 15px)' }}>
              <Card icon={faPencil} title='Menuisier' subtitle='Komilfo, SDCC, Berriat Bâtiment, Sarrazin, Gontard' duration='5 ans' src='2010_cap_fab_men.jpg' src2='2011_cap_ins_men.jpg'>Fabrication et pose de fenêtres, portes, volets et meubles de style anciens dans des menuiseries artisanales.<br />Fabrication d'ossature bois et pose de menuiseries aluminium.<br /><br />Véritable découverte du plaisir de créer.<br />Appréciation de l'échange avec les clients.<br />Apprentissage de l'autonomie et du travail soigné.</Card>
            </div>
          </div>
        </div>
        <Footer />
      </>

    :

      <>
        <div className="flex flex-col items-center justify-center overflow-hidden mb-8">
          <div className="relative mb-2">
            <div className="absolute border-cyan-500 h-full border -translate-x-2 translate-y-4"></div>
            
            <Card icon={faCode} title='Développeur' subtitle='Carrefour, Apprentissage en Alternance' duration='1 an' src='2022_analysteInformatique_bac+3.png' src2='2022 _adminSystemesInformation_bac+3.png'>Développement et maintenance d'applications internes.<br />Principalement en PHP, mais aussi en SQL et JS.<br />Environnement Windows et Linux, Git.<br />Équipe restreinte, méthode Agile.<br /><br />Utilisation quotidienne de Linux.<br />Git, dev, hors-prod et production en équipe.<br />Découverte de la gestion des VM en grande entreprise.</Card>
            <Card icon={faLaptopCode} title='Développeur Web' subtitle='Formation continue chez 3w Academy' duration='3 mois' src='2020_bac_2.jpg'>Acquisition des bases du Développement Web.<br />Création de site avec les langages HTML, CSS, JS, PHP et SQL.<br />Découverte de VSC, mySQL, Bootstrap, WordPress, jQuery, Git et logiciels annexes.<br /><br />Émerveillement du potentiel informatique.<br />Intérêt croissant envers le développement.<br />Naissance d'une passion.</Card>
            <Card icon={faPlane} title='Logistique Aéronautique' subtitle='Liebherr Aérospace' duration='1 an'>Gestion du planning, répartissement des sorties aux personnes consernées. Préparation et regroupement de commandes.<br />Priorisation des urgences et communication sous-traitants.<br />Borderaux d'envoie douanes. Formation de nouveaux.<br /><br />Adaptation à un emploi en open-space.<br />Appréciation du confort d'avoir des collègues de longue date.</Card>
            <Card icon={faIndustry} title='Industries Pharmaceutique, Agroalimentaire et Métallurgique' breakIt subtitle='Gattefossé, Biomérieux, Uriage Lab, Medtronic, Minitubes' duration='1 an'>Extraction de composés biochimiques.<br />Création d'outils pour diagnostiques médicaux.<br />Assimilation de roulements et process stricts.<br />Suivi parallèles de multiples OF physique et informatique.<br />Contrôle qualité, passation de consignes.<br /><br />N'ayant pas la possibilité d'apporter ma touche personnelle ni le plaisir de réfléchir suffisemment, le travail en production industriel m'as permis de mieux cerner mes désirs.</Card>
            <Card icon={faWheatAwn} title='Brasseur' subtitle='Brasserie Georges, La Soyeuse, McAuslan' duration='3 ans' src='2014_bac_pro.jpg'>Fabrication de bières variées.<br />Création et suivi de recettes traditionnels.<br />Contrôle des brassins du grain au verre.<br />Conseils et explications aux clients.<br /><br />Découverte d'un monde chaleureux.<br />Appréciation de la théorie des transformations biochimiques.<br />Devenu un hobby.</Card>
            <Card icon={faPencil} title='Menuisier' subtitle='Komilfo, SDCC, Berriat Bâtiment, Sarrazin, Gontard' duration='5 ans' src='2010_cap_fab_men.jpg' src2='2011_cap_ins_men.jpg'>Fabrication et pose de fenêtres, portes, volets et meubles de style anciens dans des menuiseries artisanales.<br />Fabrication d'ossature bois et pose de menuiseries aluminium.<br /><br />Véritable découverte du plaisir de créer.<br />1 an chez les Compagnons du Devoir.<br />Appréciation de l'échange avec les clients.<br />Apprentissage de l'autonomie et du travail soigné.</Card>
          </div>
        </div>
        <Footer />
      </>
  )
}