import { useDarkMode } from '/src/contexts/DarkModeContext'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Cart({icon, title, subtitle, breakIt, duration, children}){
  const { darkMode } = useDarkMode()

    if(breakIt){title = title.replace(', ', ',        ')}
    

    return(<>
        <div className={`${darkMode ? 'bg-black' : 'bg-cyan-200'} shadow-xl w-8 h-8 rounded-full -translate-x-6 translate-y-12 relative z-50`}>
            <h1 className={`${darkMode ? 'text-cyan-200' : 'text-black'} mx-auto font-semibold text-lg`}><FontAwesomeIcon icon={icon} /></h1>
        </div>
        <div className="ml-3 bg-blue-800 rounded-lg shadow-xl px-6 py-4 hover:scale-105 transition-all max-w-[480px] min-w-[210px]">
            <h2 className="mb-3 font-bold text-cyan-200 text-xl">{ title }</h2>
            <h5 className="mb-3 font-semibold text-cyan-400">{ subtitle }</h5>
            <h6 className="mb-3 font-normal style={{ color: 'var(--green)' }}"><FontAwesomeIcon icon={faClock} style={{color:'var(--green)'}} /> { duration }</h6>
            <p className="text-sm font-medium tracking-wide text-gray-200 text-opacity-100">{ children }</p>
        </div>
    </>)
}