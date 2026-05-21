import { useEffect, useRef } from "react";
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
    
    const recognitionRef = useRef<any>(null);

    useEffect(() => {
        const SpeechRecognition =
            (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

        if (!SpeechRecognition) return;

        recognitionRef.current = new SpeechRecognition();
    }, []);
    
    function ouvirResposta() {
        const recognition = recognitionRef.current;

        if (!recognition) {
            alert("Reconhecimento de voz não suportado.");
            return;
        }

        recognition.lang = "pt-BR";
        recognition.continuous = false;
        recognition.interimResults = false;

        recognition.start();

        recognition.onresult = (event: any) => {
            const transcript = event.results[0][0].transcript.toLowerCase();

            let resposta = "";

            if (transcript.includes("a")) resposta = opcao_a || "A";
            else if (transcript.includes("b")) resposta = opcao_b || "B";
            else if (transcript.includes("c")) resposta = opcao_c || "C";
            else if (transcript.includes("d")) resposta = opcao_d || "D";
            else if (transcript.includes("e")) resposta = opcao_e || "E";
            else return alert("Não entendi a resposta.");

            SalvarResposta(resposta);
        };
    }

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
/*
    const falar = () => {
        // Cancela leituras anteriores que ainda estejam rodando
        window.speechSynthesis.cancel();

        // Cria a instância da mensagem
        const utterance = new SpeechSynthesisUtterance(textoParaLer);
        
        // Define o idioma como Português do Brasil
        utterance.lang = 'pt-BR'; 
        
        // Altera a velocidade se necessário (1 é o padrão)
        utterance.rate = 1.0; 

        utterance.onend = () => {
            // começa a ouvir depois que termina de falar
            ouvirResposta();
        };

        // Executa a leitura
        window.speechSynthesis.speak(utterance);
    };
*/
    useEffect(() => {
        if (!textoParaLer) return;

        const utterance = new SpeechSynthesisUtterance(textoParaLer);

        utterance.lang = "pt-BR";
        utterance.rate = 1.0;

        utterance.onend = () => {
            ouvirResposta();
        };

        window.speechSynthesis.cancel();
        window.speechSynthesis.speak(utterance);

        return () => {
            window.speechSynthesis.cancel();
            const recognition = recognitionRef.current;
            if (recognition) recognition.abort();
        };
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
