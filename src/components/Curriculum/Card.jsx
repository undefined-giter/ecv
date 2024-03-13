import { useScreen } from '/src/contexts/ScreenContext'
import { useDarkMode } from '/src/contexts/DarkModeContext'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'



export default function Cart({icon, goRightIcon, firstLeftItem, lastLeftItem, title, subtitle, breakIt, duration, src, src2, customImgWidth, customImgHeight, children}){
  
    const { darkMode } = useDarkMode()
    const { isLargeScreen } = useScreen()

    if(breakIt){title = title.replace('e e', 'e e')}

    const leftIcon = 
    <div onClick={handleCardClick} className={`${darkMode ? 'bg-black' : 'bg-cyan-200'} shadow-xl w-8 h-8 rounded-full translate-y-12 relative z-50 ${isLargeScreen ? '-translate-x-8' : '-translate-x-6'}`}>
        <h1 className={`${darkMode ? 'text-cyan-200' : 'text-black'} font-semibold text-lg`}><FontAwesomeIcon icon={icon} /></h1>
    </div>

    const rightIcon = 
    <div onClick={handleCardClick} className={`${darkMode ? 'bg-black' : 'bg-cyan-200'} shadow-xl w-8 h-8 rounded-full translate-y-3 z-50 ${firstLeftItem ? 'translate-x-1 w-[44px]' : 'translate-x-1'} ${lastLeftItem ? 'translate-x-0 w-[36px]' : ''}`}>
        <h1 className={`${darkMode ? 'text-cyan-200' : 'text-black'} font-semibold text-lg`}><FontAwesomeIcon icon={icon} /></h1>
    </div>

    const [ clicked, setClicked ] = useState(0)

    function handleCardClick(){
        if(!clicked && src){setClicked(1)}
        else if(clicked === 1 && src2){setClicked(2)}
        else{setClicked(0)}
    }

    return(
        <div className={`max-w-[480px] ${goRightIcon ? '-translate-x-1/2 flex' : ''}`}>
            { !goRightIcon && leftIcon }
            <div onClick={handleCardClick} className={`rounded-lg shadow-xl px-6 py-4 hover:scale-105 transition-all ${isLargeScreen ? '' : 'ml-3'} ${darkMode ? 'bg-blue-800' : 'bg-cyan-300'}`}>
                {
                    !clicked ?
                        <div style={{textAlign: 'left'}}>
                            <h2 className="mb-3 font-bold text-xl" style={{ color: 'var(--green)' }}>{ title }</h2>
                            <h5 className={`mb-3 font-semibold  ${darkMode ? 'text-cyan-400' : 'text-blue-900'}`} >{ subtitle }</h5>
                            <h6 className="mb-3 font-normal" style={{ color: 'var(--green)' }}><FontAwesomeIcon icon={faClock} style={{color:'var(--green)'}} /> { duration }</h6>
                            <p className={`text-sm font-medium tracking-wide ${darkMode ? 'text-gray-200' : 'text-gray-900'}`}>{ children }</p>
                        </div>
                    :
                        <img src={`/docs/qualifications/${clicked === 1 ? src : src2}`} alt={`diplome relatif a l'activité : ${(clicked === 1 ? src : src2).split('.').slice(0, -1).join('.')}`} style={{ borderRadius: '0.3em', height: customImgHeight || '272px', pointerEvents: 'none', margin:'auto', width: customImgWidth || '' }} />
                }
            </div>
            { goRightIcon && rightIcon }
        </div>
    )
}