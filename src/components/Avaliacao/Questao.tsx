import "./Questao.css";

interface QuestaoProps {
    id_questao?: string;
    id_avaliacao?: string;
    cpf_aluno?: string;
    token?:string;
    tipo?: string;
    enunciado?: string;
    opcao_a?: string;
    opcao_b?: string;
    opcao_c?: string;
    opcao_d?: string;
    opcao_e?: string;
} 

export function Questao({ id_questao, id_avaliacao, cpf_aluno, token, tipo, enunciado, opcao_a, opcao_b, opcao_c, opcao_d, opcao_e }: QuestaoProps) {
    
    async function SalvarResposta(resposta: string){ 
        const resultado = await fetch("https://sistemaeva-api.onrender.com/questao/responder", { 
            method: 'POST',
            headers: {
            'Content-Type': 'application/json', // Essencial para a API entender o JSON
            'Authorization': `Bearer ${token}`
            },
        body: JSON.stringify({
                cpf_aluno: cpf_aluno,
                id_avaliacao: id_avaliacao,
                id_questao: id_questao,          
                resposta: resposta       
            })
        });

        if (!resultado.ok) {
            alert("Erro ao salvar resposta da questao: " + id_questao);
            throw new Error(`Erro: ${resultado.status} - ${resultado.statusText}`);
        }
    }

            
    
    return (
        <div className="Questao" id={id_questao}>
            <div className="Areaquestao">
                <div className="Enunciado">
                    {enunciado}
                </div>

                <div className="Opcoes">
                    {opcao_a && 
                    <div>
                        <button className="Botaoopcao" onClick={() => SalvarResposta(opcao_a)}>
                            {opcao_a}
                        </button>
                    </div>
                    }
                    {opcao_b && 
                    <div>
                        <button className="Botaoopcao" onClick={() => SalvarResposta(opcao_b)}>
                            {opcao_b}
                        </button>
                    </div>
                    }
                    {opcao_c && 
                    <div>
                        <button className="Botaoopcao" onClick={() => SalvarResposta(opcao_c)}>
                            {opcao_c}
                        </button>
                    </div>
                    }
                    {opcao_d && 
                    <div>
                        <button className="Botaoopcao" onClick={() => SalvarResposta(opcao_d)}>
                            {opcao_d}
                        </button>
                    </div>
                    }
                    {opcao_e && 
                    <div>
                        <button className="Botaoopcao" onClick={() => SalvarResposta(opcao_e)}>
                            {opcao_e}
                        </button>
                    </div>
                    }
                </div>
            </div>
        </div>
    );
}
