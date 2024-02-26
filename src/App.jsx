import Goal from './components/Goal/Goal'
import Menu from './components/Menu/Menu'
import Hobbies from './components/Hobbies/Hobbies'
import NotFound from './components/NotFound/NotFound'
import Creations from './components/Creations/Creations'
import { ScreenProvider } from './contexts/ScreenContext'
import Curriculum from './components/Curriculum/Curriculum'
import { VisitedProvider } from './contexts/VisitedContext'
import { DarkModeProvider } from './contexts/DarkModeContext'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Presentation from './components/Presentation/Presentation'

function App() {

  return (
    <BrowserRouter>
      <ScreenProvider>
        <DarkModeProvider>
          <VisitedProvider>
              <ScreenProvider>
                <DarkModeProvider>
                  <VisitedProvider>
                    <Routes>
                      <Route path="/" element={<Menu />} >
                        <Route index element={<Presentation />} />
                        <Route path="/Curriculum" element={<Curriculum />} />
                        <Route path="/Objectif" element={<Goal />} />
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
  )
}

export default App
