import s from './creationCard.module.css'

export default function CreationCard({ src, projectName, language, children }){
  return(
    <div className={s.wrapper}>
      <div className={s.borderPurpose}>
        <div className={s.card} style={{ backgroundImage: `url(${src})` }}>
          <div className={s.content}>
            <h1>{projectName}</h1>
            <br />
            <h2>{language}</h2>
            <br />
            <p>{children}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
