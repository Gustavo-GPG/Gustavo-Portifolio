import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom';
import Projetos from './Pages/Projetos';
import Contato from './Pages/Contato';
import DetaleProjeto from './Pages/DetaleProjeto';


function App() {

  return (
    <Routes>
      <Route path="/Gustavo-Portifolio" element={<Home />} />
      <Route path='/Gustavo-Portifolio/Projetos' element={<Projetos />} />
      <Route path='/Gustavo-Portifolio/Contato' element={<Contato />} />
      <Route path='/Gustavo-Portifolio/Projetos/:id' element={<DetaleProjeto />} />
      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
  )
}

export default App
