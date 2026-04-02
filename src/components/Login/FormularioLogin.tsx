import "./FormularioLogin.css"
import Logo from "../../assets/Logo.png"
import { useState } from "react";

export function FormularioLogin(){
    const [logado, setLogado] = useState(false);
    const [erro, setErro] = useState(false);
    const [cpf, setCpf] = useState("");
    const [senha, setSenha] = useState("");


    async function validarLogin(){
        const resultado = await fetch("https://sistemaeva-api.onrender.com/login", { 
            method: 'POST',
            headers: {
            'Content-Type': 'application/json', // Essencial para a API entender o JSON
            },
            body: "{\"login\": \""+cpf+"\",\"senha\": \""+senha+"\"}", // Converte o objeto TS para string JSON
        });

        if (!resultado.ok) {
            setErro(true);
            throw new Error(`Erro: ${resultado.status} - ${resultado.statusText}`);
        }

        setLogado(true);
    }

    return(
        <div className="formulario">
        <img src={Logo} className="Logo"></img>
        
        <form>
            <div className='campo_formulario'>
            <label>
                <div>Digite o CPF</div>
                <input placeholder='000.111.222-33' onChange={(e) => setCpf(e.target.value)}>
                </input>
            </label>
            </div>
            <div className='campo_formulario'>
            <label>
                <div>Digite a senha</div>
                <input placeholder='••••••••••••' type='password' onChange={(e) => setSenha(e.target.value)}>
                </input>
            </label>
            </div>
        </form>
            <button onClick={() => validarLogin()}>
            ENTRAR
            </button>
            <p>
            Esqueceu a senha?
            </p>
        <p>
            Cadastre-se aqui
        </p>

        {logado?
        <p>Login com sucesso</p>
        :
        erro?
            <p>Login falhou</p>
            :
            <></>
        }
        
        </div>
    )
}