import "./FormularioLogin.css"
import Logo from "../../assets/Logo.png"
import { useState } from "react";
import { useNavigate, Link } from 'react-router-dom';
import { Notificacao } from "../Notificacao/Notificacao";

export function FormularioLogin(){
    const navigate = useNavigate();
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
            setTimeout(() => setErro(false), 3000);
            throw new Error(`Erro: ${resultado.status} - ${resultado.statusText}`);
        }

        const data = await resultado.json();
        const nome = data.usuario.nome || "";
        const tipo = data.usuario.tipo || "";
        const email = data.usuario.email || "";
        const cpf_cnpj = data.usuario.cpf || data.usuario.cnpj || "";
        const instituicao = data.usuario.instituicao || "";
        const token = data.token
        
        localStorage.setItem("usuario", JSON.stringify({ nome, tipo, email, cpf_cnpj, instituicao, token}));

        setLogado(true);
        setTimeout(() => setLogado(false), 3000);
        navigate("/dashboard", { state: { nome, tipo, email, cpf_cnpj, instituicao}});
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
            <Link to="/recuperar">Esqueceu a senha?</Link> 
            </p>
        <p>
            <Link to="/cadastro">Cadastre-se aqui</Link>
        </p>

        {logado?
            <Notificacao tipo="sucesso" titulo="Login" mensagem="Login realizado com sucesso"/>
        :
        erro?
            <Notificacao tipo="falha" titulo="Login" mensagem="Login falhou"/>
            :
            <></>
        }
        </div>
    )
}