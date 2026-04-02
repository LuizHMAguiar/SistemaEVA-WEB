import "./FormularioLogin.css"
import Logo from "../../assets/Logo.png"

export function FormularioLogin(){

    async function validarLogin(){
        const resultado = await fetch("https://sistemaeva-api.onrender.com/login", {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json', // Essencial para a API entender o JSON
            },
            body: "{\"login\": \"12345678910\",\"senha\": \"123\"}", // Converte o objeto TS para string JSON
        });

        if (!resultado.ok) {
            throw new Error(`Erro: ${resultado.status} - ${resultado.statusText}`);
        }

        console.log("Login com sucesso");
    }

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
            <button onClick={() => validarLogin()}>
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