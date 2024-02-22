import { useEffect } from 'react';
import { Link } from 'react-router-dom'
import { useScreen } from '/src/contexts/ScreenContext'


export default function NotFound(){

  const { setScrollToContact } = useScreen()

  useEffect(() => {
    document.body.style.overflow = 'hidden'

    return()=>{document.body.style.overflow = 'auto'}
  }, [])

  return(
    <div style={{textAlign:'center', transform:'translateY(25vh)'}}>
      <p className='mb-4'>🤚 Ce n'est pas cette page que vous recherchez ✋<br /></p>
      <Link onClick={setScrollToContact(true)} to={{ pathname: "/", state: { scrollToContact: true } }}><b>Contactez-moi</b></Link>
      <img src="/img/notFound.png" alt="Écran vide" className='-mt-4 mx-auto scale-75' />
    </div>
  )
}
