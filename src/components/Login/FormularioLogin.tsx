import Logo from '../../assets/Logo.png'

export function FormularioLogin(){

    return(
        <div className="formulario">
        <img src={Logo} className="Logo"></img>
        
        <form>
            <div className='campo_formulario'>
            <label>
                <div>Digite o CPF</div>
                <input placeholder='000.111.222-33'>
                </input>
            </label>
            </div>
            <div className='campo_formulario'>
            <label>
                <div>Digite a senha</div>
                <input placeholder='••••••••••••' type='password'>
                </input>
            </label>
            </div>
        </form>
            <button >
            ENTRAR
            </button>
            <p>
            Esqueceu a senha?
            </p>
        <p>
            Cadastre-se aqui
        </p>
        </div>
    )
}