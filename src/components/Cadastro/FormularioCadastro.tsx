import "./FormularioCadastro.css"
import { useState } from "react";

export function FormularioCadastro(){
    const [cnpjInstituicao, setCnpjInstituicao] = useState("");
    const [curso, setCurso] = useState("");
    const [turma, setTurma] = useState("");
    const [nome_completo, setNome] = useState("");
    const [cpf, setCpf] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmarSenha, setConfirmarSenha] = useState("");
    


    async function validarCadastro(){

        if(senha != confirmarSenha){alert('Senha não confere')}

        const resultado = await fetch("https://sistemaeva-api.onrender.com/login", { 
            method: 'POST',
            headers: {
            'Content-Type': 'application/json', // Essencial para a API entender o JSON
            },
            body: "{\"cnpj_instituição\": \""+cnpjInstituicao+
            "\",\"curso\": \""+curso+
            "\",\"turma\": \""+turma+
            "\",\"nome_completo\": \""+nome_completo+
            "\",\"cpf\": \""+cpf+
            "\",\"email\": \""+email+
            "\",\"senha\": \""+senha+"\"}", // Converte o objeto TS para string JSON
        });

        if (!resultado.ok) {
            setErro(true);
            throw new Error(`Erro: ${resultado.status} - ${resultado.statusText}`);
        }

        setLogado(true);
    }

    return(
        <div className="formulario">
        
        
        <h2>Cadastro de aluno</h2>
        <form>
            <div className='campo_formulario' onChange={(e) => setCnpjInstituicao(e.target.value)}>
                <label>
                    Instituição*
            
                <select
                >
                    Instituição
                    <option id="0" value="0">
                        
                    </option>
                    <option id="1" value="1">
                        IFB - Campus São Sebastião
                    </option>
                    <option id="2" value="2">
                        IFB - Campus Brasília
                    </option>
                </select>
                </label>
            </div>
            <div className='campo_formulario' onChange={(e) => setCurso(e.target.value)}>
                <label>
                    Curso
                <input
                >
                </input>
                </label>
            </div>
          
            <div className='campo_formulario' onChange={(e) => setTurma(e.target.value)}>
                <label>
                    Turma

                <input
                >
                </input>
                </label>
            </div>
            
            <div className='campo_formulario'>
            <label>
                <div>Nome Completo*</div>
                <input placeholder='' onChange={(e) => setNome(e.target.value)}>
                </input>
            </label>
            </div>

            
            <div className='campo_formulario'>
            <label>
                <div>Digite o CPF*</div>
                <input placeholder='000.111.222-33' onChange={(e) => setCpf(e.target.value)}>
                </input>
            </label>
            </div>
            <div className='campo_formulario'>
            <label>
                <div>E-mail*</div>
                <input placeholder='' onChange={(e) => setEmail(e.target.value)}>
                </input>
            </label>
            </div>


            
            <div className='campo_formulario'>
            <label>
                <div>Digite a senha*</div>
                <input placeholder='••••••••••••' type='password' onChange={(e) => setSenha(e.target.value)}>
                </input>
            </label>
            </div>
            <div className='campo_formulario'>
            <label>
                <div>Confirmar senha*</div>
                <input placeholder='••••••••••••' type='password' onChange={(e) => setConfirmarSenha(e.target.value)}>
                </input>
            </label>
            </div>
        </form>
            <button onClick={() => validarCadastro()} >
            Cadastrar 
            </button>
        </div>
    )
}