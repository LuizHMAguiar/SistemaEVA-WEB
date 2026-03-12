import { useState } from 'react'
import './App.css'
import Logo from './assets/Logo.png'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="formulario">
      <img src={Logo} className="Logo"></img>
      <h1>Sistema-EVA</h1>
      <form>
        <div>
        <input placeholder='Digite CPF ou E-mail'>
        </input>
        </div>
        <div>
        <input placeholder='Digite sua senha' type='password'>
        </input>
        </div>
      </form>
        <button >
          ENTRAR
        </button>
        <p>
          Esqueceu a senha?
        </p>
      <p>
        Cadastre-se aqui
      </p>
      </div>
    </>
  )
}

export default App
