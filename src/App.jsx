import Goal from './components/Goal/Goal'
import Menu from './components/Menu/Menu'
import Hobbies from './components/Hobbies/Hobbies'
import NotFound from './components/NotFound/NotFound'
import Homepage from './components/Homepage/Homepage'
import Creations from './components/Creations/Creations'
import { ScreenProvider } from './contexts/ScreenContext'
import Curriculum from './components/Curriculum/Curriculum'
import { VisitedProvider } from './contexts/VisitedContext'
import { DarkModeProvider } from './contexts/DarkModeContext'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div style={{height:'auto'}}>
      <BrowserRouter>
        <ScreenProvider>
          <DarkModeProvider>
            <VisitedProvider>
                <ScreenProvider>
                  <DarkModeProvider>
                    <VisitedProvider>
                      <Routes>
                        <Route path="/" element={<Menu />} >
                          <Route index element={<Homepage />} />
                          <Route path="/Curriculum" element={<Curriculum />} />
                          <Route path="/Presentation" element={<Goal />} />
                          <Route path="/Realisations" element={<Creations />} />
                          <Route path="/Hobbys" element={<Hobbies />} />
                        </Route>
                        <Route path="/*" element={<NotFound />} />
                      </Routes>
                    </VisitedProvider>
                  </DarkModeProvider>
                </ScreenProvider>
            </VisitedProvider>
          </DarkModeProvider>
        </ScreenProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
