import { useEffect } from 'react'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'
import { useScreen } from '/src/contexts/ScreenContext'
import { useVisited } from '/src/contexts/VisitedContext'

export default function Goal(){

  const { setOtherPageHasBeenVisited } = useVisited()
  useEffect(()=>{setOtherPageHasBeenVisited(true)}, [setOtherPageHasBeenVisited])

  const { openContactModal, setOpenContactModal } = useScreen()

  return <div>
    <div className='max-w-[750px] min-w-[450px] mx-auto'> 🔻🚧Faire 2 pans : 1 LM déguisée | 1 Qui suis-je ?🚧🔻
      <p style={{ textAlign: 'justify' }}>
        &nbsp;&nbsp;&nbsp;&nbsp;Vousêtes certainement ici suite à ma candidature, vous savez donc que je suis en recherche d'emploi, et que vous avez un besoin qui correspond à mes compétences.
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
    </div>
    <Footer />
  </div>
}
