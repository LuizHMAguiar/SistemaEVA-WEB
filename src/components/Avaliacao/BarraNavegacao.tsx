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
    
    // Altera o estado inicial para 100 (representando 100%)
    const [tamanhoFonte, setTamanhoFonte] = useState(100);

    function aumentarFonte() {
        // Limita o aumento até 250%
        if (tamanhoFonte < 250) {
            const novo = tamanhoFonte + 10;
            setTamanhoFonte(novo);
            document.documentElement.style.fontSize = `${novo}%`;
        }
    }

    function diminuirFonte() {
        // Limita a redução até 100%
        if (tamanhoFonte > 100) {
            const novo = tamanhoFonte - 10;
            setTamanhoFonte(novo);
            document.documentElement.style.fontSize = `${novo}%`;
        }
    }
    
    return (
        <div className="BarraNavegacao">
            <div className="Titulo">
                <div className="AvaliacaoTitulo">
                    Respondendo Avaliação: {tituloExibido} ({idExibido})
                </div>
                <div className="AvaliacaoDescricao">
                    {disciplina} - Tempo: {tempo}
                </div>
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
