import ReactDOM from 'react-dom'
import { useDarkMode } from '/src/contexts/DarkModeContext'


export default function Modal({ isOpen, onClose, children }){
  if (!isOpen) return null

  const { darkMode } = useDarkMode()


  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 flex justify-center items-center" style={{background: `rgba(${darkMode ? '0, 0, 185' : '0, 255, 255'}, 0.8)`}}>
        <div className='-translate-y-4'>
            {children}
            <button id='close' onClick={onClose} className="mt-2 -ml-12 px-2 py-1 -translate-x-12 bg-red-500 text-white rounded hover:bg-red-700 transition duration-300">Fermer</button>
        </div>
    </div>,
    document.body
  )
}