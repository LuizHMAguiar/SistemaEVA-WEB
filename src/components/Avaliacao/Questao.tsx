import "./Questao.css";

interface QuestaoProps {
    id?: string;
    tipo?: string;
    enunciado?: string;
    opcoes?: string[];
}

export function Questao({ id, tipo, enunciado, opcoes }: QuestaoProps) {
    return (
        <div className="Questao" id={id}>
            <div className="Areaquestao">
                <div>
                    <p>ID:{id}, Tipo: {tipo}</p>
                </div>
                <div className="Enunciado">
                    {enunciado}
                </div>

                <div className="Opcoes">
                    {opcoes?.map((opcao, index) => (
                        <div key={index}>
                            <button className="Botaoopcao">
                                {opcao}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
