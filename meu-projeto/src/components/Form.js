function Form() {

    function cadastrarUsuario(e) {
        e.preventDefault()
        console.log("Cadastrou o usuario!")
    }


    return(
        <div>
            <h1>Meu cadastro</h1>
            <Form onSubmit={cadastrarUsuario}>
                <div>
                    <input type="text" placeholder="Digite o seu nome " />
                </div>
                <div>
                    <input type="submit" value="Cadastrar"/>
                </div>
            </Form>
        </div>
    )

}

export default Form 