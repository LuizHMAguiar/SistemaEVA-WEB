import Logo from '../../assets/Logo.png'

export function FormularioCadastro(){

    return(
        <div className="formulario">
        <img src={Logo} className="Logo"></img>
        <h1>Sistema-EVA</h1>
        <h3>Cadastro de aluno</h3>
        <form>
            <div>
                <select
                >
                    Instituição
                    <option id="1" value="1">
                        IFB - Campus São Sebastião
                    </option>
                    <option id="2" value="2">
                        IFB - Campus Brasília
                    </option>
                    
                </select>
            </div>
            <div>
            <input placeholder='Digite CPF ou E-mail'>
            </input>
            </div>
            <div>
            <input placeholder='Digite sua senha' type='password'>
            </input>
            </div>
        </form>
            <button >
            ENTRAR
            </button>
            
        <p>
            Fazer Login
        </p>
        </div>
    )
}