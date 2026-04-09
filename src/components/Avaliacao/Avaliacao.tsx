import { useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { BotoesNavegacao } from "./BotoesNavegacao"
import { BarraNavegacao } from "./BarraNavegacao"
import { Questao } from "./Questao"


interface AvaliacaoState {
    nome?: string;
    tipo?: string;
    email?: string;
    cpf_cnpj?: string;
    instituicao?: string; 
}

export function Avaliacao(){
    const navigate = useNavigate();
    const location = useLocation();
    const locationState = location.state as AvaliacaoState | null;
    const storageUser = JSON.parse(localStorage.getItem("usuario") || "{}") as AvaliacaoState;
    const nome = locationState?.nome || storageUser?.nome || "";
    const tipo = locationState?.tipo || storageUser?.tipo || "";
    const email = locationState?.email || storageUser?.email || "";
    const cpf_cnpj = locationState?.cpf_cnpj || storageUser?.cpf_cnpj || "";
    const instituicao = locationState?.instituicao || storageUser?.instituicao || "";

    useEffect(() => {
        if (nome == "" || tipo == "") {
            //navigate("/login");
        }
    }, [nome, tipo, navigate]);

    return (
        <>
            <BarraNavegacao /*nome={nome} tipo={tipo} email={email} cpf_cnpj={cpf_cnpj} instituicao={instituicao}*/ />
            <Questao />
            <BotoesNavegacao />
        </>
    )
}