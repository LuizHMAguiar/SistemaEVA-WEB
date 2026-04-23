import { useEffect, useState, useRef } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { BotoesNavegacao } from "./BotoesNavegacao"
import { BarraNavegacao } from "./BarraNavegacao"
import { Questao } from "./Questao"


interface AvaliacaoState {
    id?: string;
    titulo?: string;
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
    opcoes: string[];
}


export function Avaliacao(){
    const navigate = useNavigate();
    const location = useLocation();
    const locationState = location.state as AvaliacaoState | null;
    const storageUser = JSON.parse(localStorage.getItem("usuario") || "{}") as AvaliacaoState;
    const token = locationState?.token || storageUser?.token || "";
    const id = locationState?.id || storageUser?.id || "";
    const titulo = locationState?.titulo || storageUser?.titulo || "";
    const cpf_professor = locationState?.cpf_professor || storageUser?.cpf_professor || "";
    const tipo = locationState?.tipo || storageUser?. tipo || "";
    const curso = locationState?.curso || storageUser?.curso || "";
    const disciplina = locationState?.disciplina || storageUser?.disciplina || "";
    const data_inicio = locationState?.disciplina || storageUser?.disciplina || "";
    const data_fim = locationState?.data_fim|| storageUser?.data_fim || "";
    const tempo = locationState?.tempo || storageUser?. tempo  || "";
    const codigo_acesso = locationState?.codigo_acesso || storageUser?.codigo_acesso || "";
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
            }
        }
        buscaQuestoes();
    }, [id, token, buscaRealizada]);


    return (
        <>
            <p> dados das questoes:
            {questoes?.map((questao) => (
                <div key={questao.id}>
                    <p>ID: {questao.id}</p>
                    <p>Tipo: {questao.tipo}</p>
                    <p>Enunciado: {questao.enunciado}</p>
                    <ul>
                        {questao.opcoes.map((opcao, index) => (
                            <li key={index}>{opcao}</li>
                        ))}
                    </ul>
                </div>

            ))}
            </p>

            <BarraNavegacao id={id} titulo={titulo} disciplina={disciplina} tempo={tempo} /*nome={nome} tipo={tipo} email={email} cpf_cnpj={cpf_cnpj} instituicao={instituicao}*/ />
            <Questao id={questaoAtual?.id} tipo={questaoAtual?.tipo} enunciado={questaoAtual?.enunciado} opcoes={questaoAtual?.opcoes} />
            <BotoesNavegacao />
        </>
    )
}