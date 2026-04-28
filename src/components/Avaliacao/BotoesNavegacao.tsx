 import "./BotoesNavegacao.css"

 interface BotoesNavegacaoProps {
    indiceAtual: number;
  totalQuestoes: number;
  irParaAnterior: () => void;
  irParaProximo: () => void;
  finalizar: () => void;
};


export function BotoesNavegacao({indiceAtual, totalQuestoes, irParaAnterior, irParaProximo, finalizar}: BotoesNavegacaoProps){
    const Anterior = indiceAtual > 0;
    const Proximo = indiceAtual < totalQuestoes - 1;
    return (
    <div>

      <div>
        <p>Questão {indiceAtual + 1} de {totalQuestoes}</p>
      </div>

      <div className="AreaBotoes">

      {/* BOTÃO ANTERIOR */}
      {Anterior && 
        <button className="Anterior" onClick={irParaAnterior} disabled={!Anterior}>
          Anterior
        </button>
      }

      {/* BOTÃO FINALIZAR */}
      {!Proximo && 
        <button onClick={finalizar}>
            Finalizar Avaliação
        </button>
      }

      {/* BOTÃO PRÓXIMO */}
      {Proximo && 
        <button className="proximo" onClick={irParaProximo} disabled={!Proximo}>
          Próximo
        </button>
      }

      </div>

    </div>
  );
}