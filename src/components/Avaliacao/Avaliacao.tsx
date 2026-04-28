import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { BotoesNavegacao } from "./BotoesNavegacao"
import { BarraNavegacao } from "./BarraNavegacao"
import { Questao } from "./Questao"


interface AvaliacaoState {
    id?: string;
    titulo?: string;
    cpf_aluno?: string;
    cpf_professor?: string;
    tipo?: string;
    curso?: string; 
    disciplina?: string;
    data_inicio?: string;
    data_fim?: string;
    tempo?: string;
    codigo_acesso?: string;
    token?: string;
}

interface Questao {
    id: string;
    tipo: string;
    enunciado: string;
    opcoes: {
        a: string;
        b: string;
        c: string;
        d: string;
        e: string;
    }

}


export function Avaliacao(){
    const location = useLocation();
    const locationState = location.state as AvaliacaoState | null;
    const storageUser = JSON.parse(localStorage.getItem("usuario") || "{}") as AvaliacaoState;
    const token = locationState?.token || storageUser?.token || "";
    const id = locationState?.id || storageUser?.id || "";
    const titulo = locationState?.titulo || storageUser?.titulo || "";
    const cpf_aluno = locationState?.cpf_aluno || storageUser?.cpf_aluno || "";
    const disciplina = locationState?.disciplina || storageUser?.disciplina || "";
    const tempo = locationState?.tempo || storageUser?. tempo  || "";
    const [questoes, setQuestoes] = useState<Questao[]>();
    const [questaoAtual, setQuestaoAtual] = useState<Questao>();
    const [buscaRealizada, setBuscaRealizada] = useState<boolean>(false);
    
    

    useEffect(() => {
        async function buscaQuestoes(){
            if (buscaRealizada) return;

            const resultado = await fetch(`https://sistemaeva-api.onrender.com/avaliacao/${id}/questoes`, { 
                method: 'GET',
                headers: {
                'Content-Type': 'application/json', // Essencial para a API entender o JSON
                'Authorization': `Bearer ${token}`
                }
            });

            if (!resultado.ok) {
                alert(`Erro ao buscar lista de questoes. Erro: ${resultado.status} - ${resultado.statusText}`)
                throw new Error(`Erro: ${resultado.status} - ${resultado.statusText}`);
            }

            const data = await resultado.json();

            if (data && data.length > 0) {
                setBuscaRealizada(true);
                setQuestoes(data);
                setQuestaoAtual(data[0]);
            }
        }
        buscaQuestoes();
    }, [id, token, buscaRealizada]);

    
    function handleAnteriorQuestao(){
        if (!questoes || !questaoAtual) return;

        const indiceAtual = questoes.findIndex(q => q.id === questaoAtual.id);
        if (indiceAtual > 0) {
            setQuestaoAtual(questoes[indiceAtual - 1]);
        }
    }

    function handleProximaQuestao(){
        if (!questoes || !questaoAtual) return;

        const indiceAtual = questoes.findIndex(q => q.id === questaoAtual.id);
        if (indiceAtual < questoes.length - 1) {
            setQuestaoAtual(questoes[indiceAtual + 1]);
        }
    }

    function handleFinalizar(){
        // Chamar a API para finalizar a avaliação
    }

    return (
        <>
            <BarraNavegacao 
                id={id} 
                titulo={titulo} 
                disciplina={disciplina} 
                tempo={tempo} /*nome={nome} tipo={tipo} email={email} cpf_cnpj={cpf_cnpj} instituicao={instituicao}*/ 
            />
            <Questao 
                cpf_aluno={cpf_aluno}
                token={token}
                id_avaliacao={id}
                id_questao={questaoAtual?.id} 
                tipo={questaoAtual?.tipo} 
                enunciado={questaoAtual?.enunciado} 
                opcao_a={questaoAtual?.opcoes.a} 
                opcao_b={questaoAtual?.opcoes.b} 
                opcao_c={questaoAtual?.opcoes.c} 
                opcao_d={questaoAtual?.opcoes.d} 
                opcao_e={questaoAtual?.opcoes.e} />
            <BotoesNavegacao 
                indiceAtual={questoes?.findIndex(q => q.id === questaoAtual?.id) || 0}
                totalQuestoes={questoes?.length || 0}
                irParaAnterior={handleAnteriorQuestao}
                irParaProximo={handleProximaQuestao}
                finalizar={handleFinalizar}
                />
        </>
    )
}