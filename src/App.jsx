import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Menu from './components/Menu/Menu'
import Presentation from './components/Presentation/Presentation'
import Curriculum from './components/Curriculum/Curriculum'
import Objective from './components/Objective/Objective'
import Creations from './components/Creations/Creations'
import Hobbies from './components/Hobbies/Hobbies'
import NotFound from './components/NotFound/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />} >
          <Route path="/" element={<Presentation />} />
          <Route path="/Curriculum" element={<Curriculum />} />
          <Route path="/Objectif" element={<Objective />} />
          <Route path="/Réalisations" element={<Creations />} />
          <Route path="/Hobbys" element={<Hobbies />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
