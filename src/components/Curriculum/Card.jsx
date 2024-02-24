import { useScreen } from '/src/contexts/ScreenContext'
import { useDarkMode } from '/src/contexts/DarkModeContext'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



export default function Cart({icon, goRightIcon, firstItem, title, subtitle, breakIt, duration, children}){
  
    const { darkMode } = useDarkMode()
    const { isLargeScreen } = useScreen()

    if(breakIt){title = title.replace('e e', 'e e')}

    const leftIcon = 
    <div className={`${darkMode ? 'bg-black' : 'bg-cyan-200'} shadow-xl w-8 h-8 rounded-full translate-y-12 relative z-50 ${isLargeScreen ? '-translate-x-8' : '-translate-x-6'}`}>
        <h1 className={`${darkMode ? 'text-cyan-200' : 'text-black'} font-semibold text-lg`}><FontAwesomeIcon icon={icon} /></h1>
    </div>

    const rightIcon = 
    <div className={`${darkMode ? 'bg-black' : 'bg-cyan-200'} shadow-xl w-8 h-8 rounded-full translate-y-3 z-50 ${firstItem ? 'translate-x-1 w-[44px]' : 'translate-x-1'}`}>
        <h1 className={`${darkMode ? 'text-cyan-200' : 'text-black'} font-semibold text-lg`}><FontAwesomeIcon icon={icon} /></h1>
    </div>


    return(
        <div className={`max-w-[480px] min-w-[210px] -mr-6 ${goRightIcon ? '-translate-x-1/2 flex' : ''}`}>
            { !goRightIcon && leftIcon }
            <div className={`rounded-lg shadow-xl px-6 py-4 hover:scale-105 transition-all ${isLargeScreen ? '' : 'ml-3'} ${darkMode ? 'bg-blue-800' : 'bg-cyan-300'}`}>
                <h2 className="mb-3 font-bold text-xl" style={{ color: 'var(--green)' }}>{ title }</h2>
                <h5 className={`mb-3 font-semibold  ${darkMode ? 'text-cyan-400' : 'text-blue-900'}`} >{ subtitle }</h5>
                <h6 className="mb-3 font-normal" style={{ color: 'var(--green)' }}><FontAwesomeIcon icon={faClock} style={{color:'var(--green)'}} /> { duration }</h6>
                <p className={`text-sm font-medium tracking-wide ${darkMode ? 'text-gray-200' : 'text-gray-900'}`}>{ children }</p>
            </div>
            { goRightIcon && rightIcon }
        </div>
    )
}