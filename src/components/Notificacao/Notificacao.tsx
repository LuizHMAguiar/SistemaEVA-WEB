import "./Notificacao.css"

interface NotificacaoProps{
    tipo: string,
    titulo: string,
    mensagem: string
}

export function Notificacao({ tipo, titulo, mensagem }: NotificacaoProps){


    return (
        <>
            <div className={`notificacao ${tipo}`}>
                <div className='notificacao-titulo'>
                    {tipo=="sucesso"?"✅":"❌"}
                    {titulo}
                </div>
                <div className='notificacao-mensagem'>
                    {mensagem}
                </div>
            </div>
        </>
    )
}