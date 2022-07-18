import {useState} from 'react'

function Condicional() {

    function enviarEmail(e) {
        e.prevenetDefault()
        setUserEmail(Email)
    }

    function limparEmail() {
        setUserEmail('')
    }

    return(
        <div>
            <h2>Cadastre o seu e-mail:</h2>
            <form>
                <input 
                    type="email" 
                    placeholder="Digite o seu email..." 
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit" onClick={enviarEmail}>
                    Enviar-email 
                </button>
                {userEmail && (
                    <div>
                       <p>O email do usuario é: {userEmail}</p>
                       <button onClick={limparEmail}>Limpar e-mail</button>
                    </div>
                )}
            </form>
           
        </div>
    )

}

export default Condicional