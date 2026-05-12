import "./BarraTitulo.css"
import { useNavigate } from "react-router-dom"
import React, { useState } from 'react';

interface BarraTituloProps {
    nome?: string;
    tipo?: string;
    email?: string;
    cpf_cnpj?: string;
    instituicao?: string;
}

export function BarraTitulo({ nome, tipo, /*email, cpf_cnpj, instituicao*/ }: BarraTituloProps){
    const [baixaVisao, setBaixaVisao] = useState(false);
    const navigate = useNavigate();
    const nomeExibido = nome || "";
    const tipoExibido = tipo || "";
    /*const emailExibido = email || "";
    const cpf_cnpjExibido = cpf_cnpj || "";
    const instituicaoExibido = instituicao || "";*/
    const handleLogout = () => {
        // Limpa dados do localStorage
        localStorage.removeItem("token");
        localStorage.removeItem("usuario");
        
        // Redireciona para login
        navigate("/login");
    };

    const toggleAcessibilidade = () => {
        setBaixaVisao(!baixaVisao);
    };

    return (
        /* 3. A classe dinâmica deve envolver o conteúdo que você quer mudar */
        <div className={`BarraTitulo ${baixaVisao ? 'modo-baixa-visao' : ''}`}>
            <div className="Titulo">
                Avaliações Disponíveis
            </div> 
            
            <div className="Perfil">
                <div className="Nome">{nomeExibido}</div>
                <div className="Tipo">{tipoExibido}</div>
            </div>

            {/* Botão de Acessibilidade */}
            <div className="Acessibilidade">
                <button 
                    onClick={toggleAcessibilidade}
                    aria-pressed={baixaVisao}
                    title="Alternar Contraste para Baixa Visão"
                    className="botao-acessibilidade"
                >
                    {baixaVisao ? '🌑 Modo Normal' : '🟡 Alto Contraste'}
                </button>
            </div>

            <div className="Logout">
                <button onClick={handleLogout}>Sair</button>
            </div>
        </div>
    );
}