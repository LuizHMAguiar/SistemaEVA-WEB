import { useState } from "react";
import "./Conteudo.css"

interface Avaliacao{
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


export function Conteudo(){
    const [mostraModal,setMostraModal] = useState(false);
    const [avaliacoesAtivas, setAvaliacoesAtivas] = useState<Avaliacao[]>();

    async function buscaAvaliacoesAtivas(){
        const resultado = await fetch("https://sistemaeva-api.onrender.com/aluno/avaliacao/ativas/12345678910");

        if (!resultado.ok) {
            alert("Erro ao buscar lista de avaliacoes ativas.")
            throw new Error(`Erro: ${resultado.status} - ${resultado.statusText}`);
        }

        const data = await resultado.json();
        setAvaliacoesAtivas(data);
    }

    if (avaliacoesAtivas == null){
        buscaAvaliacoesAtivas()
    }


    return (
        <div className="Conteudo">

            
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
        )
}
