import "./FormularioCadastro.css"
import { useState } from "react";

interface Instituicao{
    cnpj: string,
    email: string,
    nome: string
}

export function FormularioCadastro(){
    const [cnpjInstituicao, setCnpjInstituicao] = useState("");
    const [curso, setCurso] = useState("");
    const [turma, setTurma] = useState("");
    const [nome_completo, setNome] = useState("");
    const [cpf, setCpf] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmarSenha, setConfirmarSenha] = useState("");

    const [instituicoes, setInstituicoes] = useState<Instituicao[]>();
    
    async function buscaInstituicoes(){
        const resultado = await fetch("https://sistemaeva-api.onrender.com/instituicao");

        if (!resultado.ok) {
            alert("Erro ao buscar lista de instituições.")
            throw new Error(`Erro: ${resultado.status} - ${resultado.statusText}`);
        }

        const data = await resultado.json();
        setInstituicoes(data);
    }

    if (instituicoes == null){
        buscaInstituicoes()
    }



    async function validarCadastro(){

        if(senha != confirmarSenha){alert('Senha não confere')}

        const resultado = await fetch("https://sistemaeva-api.onrender.com/aluno", { 
            method: 'POST',
            headers: {
            'Content-Type': 'application/json', // Essencial para a API entender o JSON
            },
            body: "{\"cnpj_instituicao\": \""+cnpjInstituicao+
            "\",\"curso\": \""+curso+
            "\",\"turma\": \""+turma+
            "\",\"nome_completo\": \""+nome_completo+
            "\",\"cpf\": \""+cpf+
            "\",\"email\": \""+email+
            "\",\"senha\": \""+senha+"\"}", // Converte o objeto TS para string JSON
        });

        if (!resultado.ok) {
            alert("Erro ao cadastrar estudante.")
            throw new Error(`Erro: ${resultado.status} - ${resultado.statusText}`);
        }

        alert("Aluno cadastrado com sucesso!")
    }

    return(
        <div className="formulario">

        <h2>Cadastro de aluno</h2>
        <form>
            <div className='campo_formulario' >
                <label>
                    Instituição*
            
                <select onChange={(e) => setCnpjInstituicao(e.target.value)}
                >
                    Instituição
                    <option id="0" value="0">
                        
                    </option>

                    {instituicoes?.map((instituicao) => (
                        <option id={instituicao.cnpj} value={instituicao.cnpj}>
                            {instituicao.nome}
                        </option>  
                    ))}

                </select>
                </label>
            </div>
            <div className='campo_formulario'>
                <label>
                    Curso
                <input onChange={(e) => setCurso(e.target.value)}
                >
                </input>
                </label>
            </div>
          
            <div className='campo_formulario'>
                <label>
                    Turma

                <input onChange={(e) => setTurma(e.target.value)}
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