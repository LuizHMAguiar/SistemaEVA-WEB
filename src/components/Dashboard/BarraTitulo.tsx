import "./BarraTitulo.css"

interface BarraTituloProps {
    nome?: string;
    tipo?: string;
    email?: string;
    cpf_cnpj?: string;
    instituicao?: string;
}

export function BarraTitulo({ nome, tipo, /*email, cpf_cnpj, instituicao*/ }: BarraTituloProps){
    const nomeExibido = nome || "";
    const tipoExibido = tipo || "";
    /*const emailExibido = email || "";
    const cpf_cnpjExibido = cpf_cnpj || "";
    const instituicaoExibido = instituicao || "";*/

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