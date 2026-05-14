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

        </div>
    )
}
