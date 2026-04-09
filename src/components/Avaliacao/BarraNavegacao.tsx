import "./BarraNavegacao.css"

/*
interface BarraNavegacaoProps {
    nome?: string;
    tipo?: string;
    email?: string;
    cpf_cnpj?: string;
    instituicao?: string;
}
*/
export function BarraNavegacao(/*{ nome, tipo, email, cpf_cnpj, instituicao }: BarraNavegacaoProps*/){
    /*const nomeExibido = nome || "";
    const tipoExibido = tipo || "";
    const emailExibido = email || "";
    const cpf_cnpjExibido = cpf_cnpj || "";
    const instituicaoExibido = instituicao || "";*/
    
    return (
        <div className="BarraNavegacao">
            <div className="Titulo">
                Respondendo Avaliação
            </div>
            <div className="Menssagem">
                Avaliação Iniciada! Boa Sorte!
            </div>

        </div>
    )
}