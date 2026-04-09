import { useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { BarraTitulo } from "./BarraTitulo"
import { Conteudo } from "./Conteudo"

interface DashboardState {
    nome?: string;
    tipo?: string;
}

export function Dashboard(){
    const navigate = useNavigate();
    const location = useLocation();
    const locationState = location.state as DashboardState | null;
    const storageUser = JSON.parse(localStorage.getItem("usuario") || "{}") as DashboardState;
    const nome = locationState?.nome || storageUser?.nome || "";
    const tipo = locationState?.tipo || storageUser?.tipo || "";

    useEffect(() => {
        if (nome == "" || tipo == "") {
            navigate("/login");
        }
    }, [nome, tipo, navigate]);


    return (
        <>
            <BarraTitulo nome={nome} tipo={tipo} />
            <Conteudo />
        </>
    )
} 