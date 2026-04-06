import "./Conteudo.css"

import { Modal } from './Modal.tsx'

export function Conteudo(){
    return (
        <div className="Conteudo">


            <Modal></Modal>



            <div className="Avaliacao">
                <div className="Cabecalho">
                    <div className="TipoAvaliacao TipoProva">
                    Prova
                    </div>
                    <div className="TituloProva">
                        Provas de Algoritimos
                    </div>
                </div>
                <div className="Disciplina">
                    ProgramaçãoI - Turma2024-A
                </div>
                <div className="MaisDetalhesAvaliacao">
                    <div className="Data">
                    15/01-20/01/2024
                    </div>
                    <div className="Tempo">
                        120 Min
                    </div>
                    <div className="Questoes">
                        15 Questoes
                    </div>
                </div>
                <div className="Botao">
                    Iniciar Avaliação
                </div>
            </div>
            <div className="Avaliacao">
                <div className="Cabecalho">
                    <div className="TipoAvaliacao TipoSimulado">
                    Simulado
                    </div>
                    <div className="TituloProva">
                        Simulado ENADE 2024
                    </div>
                </div>
                <div className="Disciplina">
                    ProgramaçãoI - Turma2024-A
                </div>
                <div className="MaisDetalhesAvaliacao">
                    <div className="Data">
                    15/01-20/01/2024
                    </div>
                    <div className="Tempo">
                        120 Min
                    </div>
                    <div className="Questoes">
                        20 Questoes
                    </div>
                </div>
                <div className="Botao">
                    Disponivel dia 29/08/2024
                </div>           
            
            </div>

            <div className="Avaliacao">
                <div className="Cabecalho">
                    <div className="TipoAvaliacao TipoSimulado">
                    Simulado
                    </div>
                    <div className="TituloProva">
                        Simulado ENADE 2024
                    </div>
                </div>
                <div className="Disciplina">
                    ProgramaçãoI - Turma2024-A
                </div>
                <div className="MaisDetalhesAvaliacao">
                    <div className="Data">
                    15/01-20/01/2024
                    </div>
                    <div className="Tempo">
                        120 Min
                    </div>
                    <div className="Questoes">
                        20 Questoes
                    </div>
                </div>
                <div className="Botao">
                    Disponivel dia 29/08/2024
                </div>           
            
            </div>
                
        </div>
        )
}
