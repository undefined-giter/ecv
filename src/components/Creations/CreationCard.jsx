import s from './creationCard.module.css'
import { useState } from 'react'

export default function CreationCard({ src, projectName, language, children, link }){

  const [mouseOver, setMouseOver] = useState(false)

  return(
    <div className={s.wrapper} onMouseOver={() => setMouseOver(true)} onMouseOut={() => setMouseOver(false)} >
      <div className={s.borderPurpose}>
        <div className={s.card} style={{ backgroundImage: `url(${src})` }}>
          <div className={s.content}>
            <div>
              <h6><span>Nom du Projet</span></h6>
              <h1>{projectName}</h1>
            </div>
            <br />
            <div>
              <h6><span>Technologie</span></h6>
              <h2>{language}</h2>
            </div>
            <br />
            <div>
              <h6><span>Description</span></h6>
              <div className={s.descriptionChildren}>{children}</div>
            </div>
            <a href={link} target='_blank' className={`${s.link} ${mouseOver ? '' : s.opacity0}`}>Lien vers {projectName}</a>
          </div>
        </div>
      </div>
    </div>
  )
}
