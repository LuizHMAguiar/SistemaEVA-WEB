import './App.css'
/*
import { FormularioLogin } from './components/Login/FormularioLogin.tsx'
import { FormularioCadastro } from './components/Cadastro/FormularioCadastro.tsx'
import { BarraTitulo } from './components/Dashboard/BarraTitulo.tsx'
import { Menu } from './components/Dashboard/Menu.tsx'
import { Conteudo } from './components/Dashboard/Conteudo.tsx'
import { Modal } from './components/Dashboard/Modal.tsx'*/
import {BarraNavegacao} from './components/Avaliacao/BarraNavegacao.tsx'
import { BotoesNavegacao } from './components/Avaliacao/BotoesNavegacao.tsx'
import { Questao } from './components/Avaliacao/Questao.tsx'

function App() {

  return (
    <>
      <BarraNavegacao />
      <Questao />
      <BotoesNavegacao />
    </>
  )
}

export default App
