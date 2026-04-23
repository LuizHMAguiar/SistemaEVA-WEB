import { useState } from "react";
import "./Conteudo.css"
import { useNavigate, useLocation } from "react-router-dom";

interface Avaliacao {
    CPF_professor: string;
    ID: number;
    codigo_acesso: string;
    curso: string;
    data_fim: string;
    data_inicio: string;
    disciplina: string;
    tempo: string;
    tipo: string;
    titulo: string;
    turma: string;
}

interface ConteudoProps {
    nome?: string;
    tipo?: string;
    email?: string;
    cpf_cnpj?: string;
    instituicao?: string;
}

interface UsuarioState {
    nome?: string;
    tipo?: string;
    email?: string;
    cpf_cnpj?: string;
    instituicao?: string; 
    token?: string;
}

export function Conteudo(
    { 
      //nome, 
      //tipo, 
      //email, 
      cpf_cnpj, 
      //instituicao 
    }: ConteudoProps){
    //const nomeExibido = nome || "";
    //const tipoExibido = tipo || "";
    //const emailExibido = email || "";
    const cpf_cnpjExibido = cpf_cnpj || "";
    //const instituicaoExibido = instituicao || "";
    const navigate = useNavigate();
    const location = useLocation();
    const locationState = location.state as UsuarioState | null;
    const storageUser = JSON.parse(localStorage.getItem("usuario") || "{}") as UsuarioState;
    const token = locationState?.token || storageUser?.token || "";
    const [mostraModal,setMostraModal] = useState(false);
    const [buscouAvaliacoes,setBuscouAvaliacoes] = useState(false);
    const [avaliacoesAtivas, setAvaliacoesAtivas] = useState<Avaliacao[]>();
    const [avaliacaoSelecionada, setAvaliacaoSelecionada] = useState<Avaliacao | null>(null);


    async function buscaAvaliacoesAtivas(){
        const resultado = await fetch("https://sistemaeva-api.onrender.com/aluno/avaliacoes/"+cpf_cnpjExibido);

        if (!resultado.ok) {
            //alert("Erro ao buscar lista de avaliacoes ativas.")
            throw new Error(`Erro: ${resultado.status} - ${resultado.statusText}`);
        }

        const data = await resultado.json();
        setAvaliacoesAtivas(data);
        setBuscouAvaliacoes(true)
    }

    if (avaliacoesAtivas == null && buscouAvaliacoes == false){
        buscaAvaliacoesAtivas()
    }

    const [cod_avaliacao, setCod_Avaliacao] = useState("");
    
    async function AdicionaAvaliacao(){
        const resultado = await fetch("https://sistemaeva-api.onrender.com/aluno/avaliacao", { 
            method: 'POST',
            headers: {
            'Content-Type': 'application/json', // Essencial para a API entender o JSON
            'Authorization': `Bearer ${token}`
            },
            body: "{\"cpf_aluno\": \""+cpf_cnpjExibido+
            "\",\"cod_avaliacao\": \""+cod_avaliacao+"\"}"
        });
        if (!resultado.ok) {
            alert("Erro ao buscar avaliacao.")
            throw new Error(`Erro: ${resultado.status} - ${resultado.statusText}`);
        }
    }

    async function IniciarAvaliacao(){ 
        const resultado = await fetch("https://sistemaeva-api.onrender.com/avaliacao/iniciar", { 
            method: 'POST',
            headers: {
            'Content-Type': 'application/json', // Essencial para a API entender o JSON
            'Authorization': `Bearer ${token}`
            },
            body: "{\"cpf_aluno\": \""+cpf_cnpjExibido+
            "\",\"id_avaliacao\": \""+avaliacaoSelecionada?.ID+"\"}"
        });
        if (!resultado.ok) {
            alert("Erro ao buscar avaliacao."+avaliacaoSelecionada?.ID)
            throw new Error(`Erro: ${resultado.status} - ${resultado.statusText}`);
        }
        
        navigate("/avaliacao", { state: 
            {
                id: avaliacaoSelecionada?.ID,
                titulo: avaliacaoSelecionada?.titulo, 
                cpf_professor: avaliacaoSelecionada?.CPF_professor, 
                tipo: avaliacaoSelecionada?.tipo, 
                curso: avaliacaoSelecionada?.curso, 
                turma: avaliacaoSelecionada?.turma, 
                disciplina: avaliacaoSelecionada?.disciplina, 
                data_inicio: avaliacaoSelecionada?.data_inicio, 
                data_fim: avaliacaoSelecionada?.data_fim, 
                tempo: avaliacaoSelecionada?.tempo, 
                codigo_acesso: avaliacaoSelecionada?.codigo_acesso
            }} );
    };
    

    return (
        
        <div className="Conteudo">
             <div className="BuscarAvaliacoes">
                <input placeholder='Código da Avaliação' onChange={(e) => setCod_Avaliacao(e.target.value)}>
                </input>
                <button onClick={() => {AdicionaAvaliacao()}}> 
                Buscar Avaliação   
                </button>
            </div>
            
            {mostraModal && <div className="pelicula"></div>}

            {mostraModal && avaliacaoSelecionada && (
                <div className="Modal">
                    <div className="titulo">Iniciar Avaliação?</div>
                    
                    <div className="avaliacao">
                        <div className="label">Avaliação</div>
                        <div className="valor">{avaliacaoSelecionada.titulo}</div>
                    </div>

                    <div className="avaliacao">
                        <div className="label">Tempo Limite:</div>
                        <div className="valor">{avaliacaoSelecionada.tempo}</div>
                    </div>

                    <div className="avaliacao">
                        <div className="label">Disponivel Até:</div>
                        <div className="valor">
                            {new Date(avaliacaoSelecionada.data_fim).toLocaleString('pt-BR')}
                        </div>
                    </div>
                    
                    <div className="botoes">
                        <button onClick={() => {
                            setMostraModal(false);
                            setAvaliacaoSelecionada(null);
                        }}>
                            Cancelar
                        </button>
                        {/* Corrigido: Passe uma função anônima para o onClick */}
                        <button onClick={() => IniciarAvaliacao()}>
                            Iniciar Avaliação
                        </button>
                    </div>
                </div>
            )}


            <div className="Avaliacoes">
                

            {!avaliacoesAtivas && <p>Nenhuma avaliação adicionada</p>}

            {avaliacoesAtivas?.map((avaliacao) => (
                <div className="Avaliacao">
                    <div className="Cabecalho">
                        <div className="TipoAvaliacao TipoProva">
                        {avaliacao.tipo}
                        </div>
                        <div className="TituloProva">
                            {avaliacao.titulo}
                        </div>
                    </div>
                    <div className="Disciplina">
                        Código: {avaliacao.codigo_acesso}
                    </div>
                    <div className="Disciplina">
                        {avaliacao.curso} - {avaliacao.turma} - {avaliacao.disciplina}
                    </div>
                    <div className="MaisDetalhesAvaliacao">
                        <div className="Data">
                        {new Date(avaliacao.data_inicio).toLocaleDateString('pt-BR')} - {new Date(avaliacao.data_fim).toLocaleDateString('pt-BR')}
                        </div>
                        <div className="Tempo">
                            {avaliacao.tempo}
                        </div>
                    </div>
                    <div className="Botao">
                        <button onClick={() => {
                            setAvaliacaoSelecionada(avaliacao);
                            setMostraModal(true);
                        }}>
                            Iniciar Avaliação
                        </button>
                    </div>
                </div>
            ))}
            
            </div>
        </div>
        )
}

