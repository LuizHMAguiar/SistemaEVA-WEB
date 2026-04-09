import "./Menu.css"
import { useState } from "react";


export function Menu(){
        const [cod_avaliacao, setCod_Avaliacao] = useState("");
        async function AdicionaAvaliacao(){
            const resultado = await fetch("https://sistemaeva-api.onrender.com/aluno/avaliacao", { 
                method: 'POST',
                headers: {
                'Content-Type': 'application/json', // Essencial para a API entender o JSON
                },
                body: "{\"cpf_aluno\": \""+"12345678910"+
                "\",\"cod_avaliacao\": \""+cod_avaliacao+"\"}"
            });
            if (!resultado.ok) {
                alert("Erro ao buscar avaliacao.")
                throw new Error(`Erro: ${resultado.status} - ${resultado.statusText}`);
            }
        }
}

