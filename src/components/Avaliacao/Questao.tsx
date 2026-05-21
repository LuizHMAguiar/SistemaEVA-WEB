import { useEffect } from "react";
import "./Questao.css";

interface QuestaoProps {
    id_questao?: string;
    indiceAtual?: number;
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

export function Questao({ indiceAtual, id_questao, id_avaliacao, cpf_aluno, token, enunciado, opcao_a, opcao_b, opcao_c, opcao_d, opcao_e }: QuestaoProps) {
    
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
                resposta: resposta,
            })
        });

        if (!resultado.ok) {
            alert("Erro ao salvar resposta da questao: " + indiceAtual);
            throw new Error(`Erro: ${resultado.status} - ${resultado.statusText}`);
        }

        // Cancela leituras anteriores que ainda estejam rodando
        window.speechSynthesis.cancel();

        // Cria a instância da mensagem
        const utterance = new SpeechSynthesisUtterance("Resposta salva: " + resposta);
        
        // Define o idioma como Português do Brasil
        utterance.lang = 'pt-BR'; 
        
        // Altera a velocidade se necessário (1 é o padrão)
        utterance.rate = 1.0; 

        // Executa a leitura
        window.speechSynthesis.speak(utterance);
    }

    // Monta o texto que será lido: enunciado + alternativas (com etiquetas)
    const textoParaLer = [
        indiceAtual !== undefined ? `Questão número ${indiceAtual + 1}` : null,
        enunciado ? String(enunciado) : null,
        opcao_a ? `Opção A: ${opcao_a}` : null,
        opcao_b ? `Opção B: ${opcao_b}` : null,
        opcao_c ? `Opção C: ${opcao_c}` : null,
        opcao_d ? `Opção D: ${opcao_d}` : null,
        opcao_e ? `Opção E: ${opcao_e}` : null,
    ]
    .filter(Boolean)
    .join('. ');

    const falar = () => {
        // Cancela leituras anteriores que ainda estejam rodando
        window.speechSynthesis.cancel();

        // Cria a instância da mensagem
        const utterance = new SpeechSynthesisUtterance(textoParaLer);
        
        // Define o idioma como Português do Brasil
        utterance.lang = 'pt-BR'; 
        
        // Altera a velocidade se necessário (1 é o padrão)
        utterance.rate = 1.0; 

        // Executa a leitura
        window.speechSynthesis.speak(utterance);
    };

    useEffect(() => {
        if (!textoParaLer) return;
        falar();
        return () => window.speechSynthesis.cancel();
    }, [textoParaLer]);

    
            
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
