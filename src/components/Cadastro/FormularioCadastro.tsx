
export function FormularioCadastro(){

    return(
        <div className="formulario">
        
        
        <h2>Cadastro de aluno</h2>
        <form>
            <div className='campo_formulario'>
                <label>
                    Instituição*
            
                <select
                >
                    Instituição
                    <option id="0" value="0">
                        
                    </option>
                    <option id="1" value="1">
                        IFB - Campus São Sebastião
                    </option>
                    <option id="2" value="2">
                        IFB - Campus Brasília
                    </option>
                </select>
                </label>
            </div>
            <div className='campo_formulario'>
                <label>
                    Curso*
                <select
                >
                     Curso
                      <option id="0" value="0">
                        
                    </option>
                <option id="1" value="1">
                    Análise e Desenvolvimento de Sistemas
                </option>
                <option id="2" value="2">
                    Engenharia de Software
                </option>
                <option id="3" value="3">
                    Sistemas de Informação
                </option>
                </select>
                </label>
            </div>
          
            <div className='campo_formulario'>
                <label>
                    Turma*

                <select
                >
             
                    Turma 
                     <option id="0" value="0">
                        
                    </option>
                <option id="1" value="1">
                    M1
                    </option>
                <option id="2" value="2">
                    M2
                    </option>
                <option id="3" value="3">
                    M3
                    </option>
                </select>
                </label>
            </div>
            
            <div className='campo_formulario'>
            <label>
                <div>Nome Completo*</div>
                <input placeholder=''>
                </input>
            </label>
            </div>

            
            <div className='campo_formulario'>
            <label>
                <div>Digite o CPF*</div>
                <input placeholder='000.111.222-33'>
                </input>
            </label>
            </div>
            <div className='campo_formulario'>
            <label>
                <div>E-mail*</div>
                <input placeholder=''>
                </input>
            </label>
            </div>


            
            <div className='campo_formulario'>
            <label>
                <div>Digite a senha*</div>
                <input placeholder='••••••••••••' type='password'>
                </input>
            </label>
            </div>
            <div className='campo_formulario'>
            <label>
                <div>Confirmar senha*</div>
                <input placeholder='••••••••••••' type='password'>
                </input>
            </label>
            </div>
        </form>
            <button >
            Cadastrar
            </button>
        </div>
    )
}