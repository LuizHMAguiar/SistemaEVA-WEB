import { BarraTitulo } from "./BarraTitulo"
import { Menu } from "./Menu"
import { Conteudo } from "./Conteudo"


export function Dashboard(){

    return (
        <>
            <BarraTitulo />
            <Menu />
            <Conteudo />
        </>
    )
}