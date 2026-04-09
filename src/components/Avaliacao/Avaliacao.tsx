import { useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { BarraNavegacao } from "./BarraNavegacao"
import { BotoesNavegacao } from "./BotoesNavegacao"
import { Questao } from "./Questao"


interface AvaliacaoState {
    nome?: string;
    tipo?: string;
}

export function Avaliacao(){
    const navigate = useNavigate();
    const location = useLocation();
    const locationState = location.state as AvaliacaoState | null;
    const storageUser = JSON.parse(localStorage.getItem("usuario") || "{}") as AvaliacaoState;
    const nome = locationState?.nome || storageUser?.nome || "";
    const tipo = locationState?.tipo || storageUser?.tipo || "";

    useEffect(() => {
        if (nome == "" || tipo == "") {
            //navigate("/login");
        }
    }, [nome, tipo, navigate]);

    return (
        <>
            <BarraNavegacao />
            <Questao />
            <BotoesNavegacao />
        </>
    )
}