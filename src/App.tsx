import { MenuLateral } from './components/Menu-lateral'
import { Dashboard } from './components/Dashboard'
import { FormProf } from './components/FormProf';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import { FormAluno } from './components/FormAluno';
import { EditDeleteProf } from './components/Edit&DeleteProf';
import { EditDeleteAluno } from './components/Edit&DeleteAlunos';

function App() {
  return (
  
    <div className="App">
      <BrowserRouter>
        <MenuLateral />
        <Routes>
          <Route path='/'  element={<Dashboard />} />
          <Route path='/cProfessor' element={<FormProf />} />
          <Route path='/cAluno' element={<FormAluno />} />
          <Route path='/editProf/:id' element={<EditDeleteProf />} />
          <Route path='/editAluno/:id' element={<EditDeleteAluno />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
