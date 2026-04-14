import { useState } from "react";
import "./Conteudo.css"

interface Avaliacao {
    CPF_professor: string;
    ID: number;
    codigo_acesso: string;
    curso: string;
    data_fim: string;
    data_inicio: string;
    disciplina: string;
    tempo: string;
    tipo: string;
    titulo: string;
    turma: string;
}

interface ConteudoProps {
    nome?: string;
    tipo?: string;
    email?: string;
    cpf_cnpj?: string;
    instituicao?: string;
}

export function Conteudo({ nome, tipo, email, cpf_cnpj, instituicao }: ConteudoProps){
    const nomeExibido = nome || "";
    const tipoExibido = tipo || "";
    const emailExibido = email || "";
    const cpf_cnpjExibido = cpf_cnpj || "";
    const instituicaoExibido = instituicao || "";
    const [mostraModal,setMostraModal] = useState(false);
    const [buscouAvaliacoes,setBuscouAvaliacoes] = useState(false);
    const [avaliacoesAtivas, setAvaliacoesAtivas] = useState<Avaliacao[]>();

    async function buscaAvaliacoesAtivas(){
        const resultado = await fetch("https://sistemaeva-api.onrender.com/aluno/avaliacoes/11111111111");

        if (!resultado.ok) {
            //alert("Erro ao buscar lista de avaliacoes ativas.")
            throw new Error(`Erro: ${resultado.status} - ${resultado.statusText}`);
        }

        const data = await resultado.json();
        setAvaliacoesAtivas(data);
        setBuscouAvaliacoes(true)
    }

    if (avaliacoesAtivas == null && buscouAvaliacoes == false){
        buscaAvaliacoesAtivas()
    }

    const [cod_avaliacao, setCod_Avaliacao] = useState("");
    
    async function AdicionaAvaliacao(){
        const resultado = await fetch("https://sistemaeva-api.onrender.com/aluno/avaliacao", { 
            method: 'POST',
            headers: {
            'Content-Type': 'application/json', // Essencial para a API entender o JSON
            },
            body: "{\"cpf_aluno\": \""+"12345678910"+
            "\",\"cod_avaliacao\": \""+cod_avaliacao+"\"}"
        });
        if (!resultado.ok) {
            alert("Erro ao buscar avaliacao.")
            throw new Error(`Erro: ${resultado.status} - ${resultado.statusText}`);
        }
    }

    return (
        
        <div className="Conteudo">
             <div className="BuscarAvaliacoes">
                <input placeholder='Código da Avaliação' onChange={(e) => setCod_Avaliacao(e.target.value)}>
                </input>
                <button onClick={() => {AdicionaAvaliacao()}}> 
                Buscar Avalição   
                </button>
            </div>
            
            {mostraModal && <div className="pelicula"></div>}

            {mostraModal && 
            <div className="Modal">
                
                <div className="icone"></div>
                
                <div className="titulo">
                    Iniciar Avaliação?
                </div>
                <div className="avaliacao">
                    <div className="label">
                        Avaliação
                    </div>
                    <div className="valor">
                        Prova de Algoritmos
                    </div>
                </div>

                <div className="avaliacao">
                    <div className="label">
                        Tempo Limite:
                    </div>
                    <div className="valor">
                        120 min
                    </div>
                </div>

                <div className="avaliacao">
                    <div className="label">
                        Disponivel Até:
                    </div>
                    <div className="valor">
                        20/03/2026 - 11:50
                    </div>
                </div>
                
                <div className="botoes">
                    <button onClick={() => setMostraModal(false)}>
                        Cancelar
                    </button>
                    <button>
                        Iniciar Avaliação
                    </button>
                </div>
            </div>
            }

            <div className="Avaliacoes">
                

            {!avaliacoesAtivas && <p>Nenhuma avaliação adicionada</p>}

            {avaliacoesAtivas?.map((avaliacao) => (
                <div className="Avaliacao">
                    <div className="Cabecalho">
                        <div className="TipoAvaliacao TipoProva">
                        {avaliacao.tipo}
                        </div>
                        <div className="TituloProva">
                            {avaliacao.titulo}
                        </div>
                    </div>
                    <div className="Disciplina">
                        Código: {avaliacao.codigo_acesso}
                    </div>
                    <div className="Disciplina">
                        {avaliacao.curso} - {avaliacao.turma} - {avaliacao.disciplina}
                    </div>
                    <div className="MaisDetalhesAvaliacao">
                        <div className="Data">
                        {new Date(avaliacao.data_inicio).toLocaleDateString('pt-BR')} - {new Date(avaliacao.data_fim).toLocaleDateString('pt-BR')}
                        </div>
                        <div className="Tempo">
                            {avaliacao.tempo}
                        </div>
                    </div>
                    <div className="Botao">
                        <button onClick={() => setMostraModal(true)}>
                            Iniciar Avaliação
                        </button>
                    </div>
                </div>
            ))}
            
            </div>
        </div>
        )
}

