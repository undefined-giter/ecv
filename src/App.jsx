import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Menu from './components/Menu/Menu'
import Presentation from './components/Presentation/Presentation'
import Curriculum from './components/Curriculum/Curriculum'
import Goal from './components/Goal/Goal'
import Creations from './components/Creations/Creations'
import Hobbies from './components/Hobbies/Hobbies'
import NotFound from './components/NotFound/NotFound'
import { ScreenProvider } from './contexts/ScreenContext';
import { DarkModeProvider } from './contexts/DarkModeContext';
import { VisitedProvider } from './contexts/VisitedContext';

function App() {
  return (
    <BrowserRouter>
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
              <Route path="*" element={<NotFound />} />
            </Routes>
          </VisitedProvider>
        </DarkModeProvider>
      </ScreenProvider>
    </BrowserRouter>
  )
}

export default App
