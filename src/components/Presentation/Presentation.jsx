import './style.module.css'
import { useState, useEffect } from 'react'

export default function Presentation(){
  const [welcome, setWelcome] = useState('')
  const txt = 'Bienvenue sur mon eCV !'

  useEffect(() => {
    const welcomeInterval = setInterval(()=>{
      if(welcome.length < txt.length){
        setWelcome(prevTxt => txt.substring(0, prevTxt.length + 1))
      }else{clearInterval(welcomeInterval)}
    }, 75)

    return ()=> clearInterval(welcomeInterval)
  }, [txt])

  return(
    <div>
      <h1 className="welcome">{welcome}</h1>
    </div>
  )
}
