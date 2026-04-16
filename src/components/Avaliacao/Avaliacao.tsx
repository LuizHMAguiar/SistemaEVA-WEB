import { useEffect } from "react"
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
}

export function Avaliacao(){
    const navigate = useNavigate();
    const location = useLocation();
    const locationState = location.state as AvaliacaoState | null;
    const storageUser = JSON.parse(localStorage.getItem("usuario") || "{}") as AvaliacaoState;
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


    useEffect(() => {
        if (titulo == "" || tipo == "") {
            //navigate("/login");
        }
    }, [titulo, tipo, navigate]);

    return (
        <>
            <BarraNavegacao id={id} titulo={titulo} disciplina={disciplina} tempo={tempo} /*nome={nome} tipo={tipo} email={email} cpf_cnpj={cpf_cnpj} instituicao={instituicao}*/ />

            <Questao />
            <BotoesNavegacao />
        </>
    )
}