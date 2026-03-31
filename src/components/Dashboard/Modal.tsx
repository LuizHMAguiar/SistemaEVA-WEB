import "./Modal.css"

export function Modal(){
    return (
        <div className="Modal">
            <div className="icone"></div>
            
            <div className="titulo">
                Iniciar Avaliação?
            </div>
            <div className="avaliacao">
                <div className="label">
                    Avaliação
                </div>
                <div className="valor">
                    Prova de Algoritmos
                </div>
            </div>

            <div className="avaliacao">
                <div className="label">
                    Tempo Limite:
                </div>
                <div className="valor">
                    120 min
                </div>
            </div>

            <div className="avaliacao">
                <div className="label">
                    Disponivel Até:
                </div>
                <div className="valor">
                    20/03/2026 - 11:50
                </div>
            </div>
            
            <div className="botoes">
                <button>
                    Cancelar
                </button>
                <button>
                    Iniciar Avaliação
                </button>
            </div>
        </div>
    )
}

