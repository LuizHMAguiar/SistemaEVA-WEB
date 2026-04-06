import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import { FormularioLogin } from './components/Login/FormularioLogin.tsx'
import { FormularioCadastro } from './components/Cadastro/FormularioCadastro.tsx'
import { Dashboard } from './components/Dashboard/Dashboard.tsx'
import { Avaliacao } from './components/Avaliacao/Avaliacao.tsx'


function App() {

  return (
    <>

      <Router>

        <Routes>
          <Route path="/" element={<FormularioLogin />} />
          <Route path="/login" element={<FormularioLogin />} />
          <Route path="/cadastro" element={<FormularioCadastro />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/avaliacao" element={<Avaliacao />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
