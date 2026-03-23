import './App.css'
import { FormularioLogin } from './components/Login/FormularioLogin.tsx'
import { FormularioCadastro } from './components/Cadastro/FormularioCadastro.tsx'
import { BarraTitulo } from './components/Dashboard/BarraTitulo.tsx'
import { Menu } from './components/Dashboard/Menu.tsx'




function App() {

  return (
    <>
      <BarraTitulo />
      <Menu />
    </>
  )
}

export default App
