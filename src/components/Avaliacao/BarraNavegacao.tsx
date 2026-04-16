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
    
    
    return (
        <div className="BarraNavegacao">
            <div className="Titulo">
                Respondendo Avaliação: {tituloExibido}    
            </div>
            <div className="Menssagem">
                Avaliação Iniciada! Boa Sorte!
            </div>

        </div>
    )
}