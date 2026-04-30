import { useState } from "react";
import "./BarraNavegacao.css"


interface BarraNavegacaoProps {
    id?: string;
    titulo?: string;
    disciplina?: string;
    tempo?: string;
    
}

export function BarraNavegacao({ id, titulo, disciplina, tempo }: BarraNavegacaoProps){
    const idExibido = id || "";
    const tituloExibido = titulo || "";
    const disciplinaExibido = disciplina || "";
    const tempoExibido = tempo || "";

    const [tamanhoFonte, setTamanhoFonte] = useState(16);

    function aumentarFonte() {
        setTamanhoFonte(tamanhoFonte + 2);
    }

    function aumentarFonte() {
        const novo = tamanhoFonte + 2;
        setTamanhoFonte(novo);
        document.documentElement.style.setProperty('font-size', `${novo}%`);
    }

    function diminuirFonte() {
        const novo = Math.max(12, tamanhoFonte - 2);
        setTamanhoFonte(novo);
        document.documentElement.style.setProperty('font-size', `${novo}%`);
    }
    
    
    return (
        <div className="BarraNavegacao">
            <div className="Titulo">
                Respondendo Avaliação: {tituloExibido}    
            </div>
            <div className="Menssagem">
                Avaliação Iniciada! Boa Sorte!
            </div>

           <div className="AreaBotoes">
                <button className="botoes" onClick={diminuirFonte}>A-</button>
                <button className="botoes" onClick={aumentarFonte}>A+</button>
            </div>

        </div>
    )
}