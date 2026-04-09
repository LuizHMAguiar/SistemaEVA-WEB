import "./BarraTitulo.css"

interface BarraTituloProps {
    nome?: string;
    tipo?: string;
}

export function BarraTitulo({ nome, tipo }: BarraTituloProps){
    const nomeExibido = nome || "Rafael";
    const tipoExibido = tipo || "Aluno";

    return (
        <div className="BarraTitulo">
            <div className="Titulo">
            Avaliações Disponíveis
            </div> 
            <div className="Perfil">
                <div className="Nome">
                    {nomeExibido}
                </div>
                <div className="Tipo">
                    {tipoExibido}
                </div>
            </div>
        </div>
    )

}