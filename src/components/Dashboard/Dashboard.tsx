import { useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { BarraTitulo } from "./BarraTitulo"
import { Conteudo } from "./Conteudo"

interface DashboardState {
    nome?: string;
    tipo?: string;
    email?: string;
    cpf_cnpj?: string;
    instituicao?: string; 
}

export function Dashboard(){
    const navigate = useNavigate();
    const location = useLocation();
    const locationState = location.state as DashboardState | null;
    const storageUser = JSON.parse(localStorage.getItem("usuario") || "{}") as DashboardState;
    const nome = locationState?.nome || storageUser?.nome || "";
    const tipo = locationState?.tipo || storageUser?.tipo || "";
    const email = locationState?.email || storageUser?.email || "";
    const cpf_cnpj = locationState?.cpf_cnpj || storageUser?.cpf_cnpj || "";
    const instituicao = locationState?.instituicao || storageUser?.instituicao || "";
    

    useEffect(() => {
        if (nome == "" || tipo == "") {
            navigate("/login");
        }
    }, [nome, tipo, navigate]);


    return (
        <>
            <BarraTitulo nome={nome} tipo={tipo} email={email} cpf_cnpj={cpf_cnpj} instituicao={instituicao} />
            <Conteudo /> 
        </>
    )
} 