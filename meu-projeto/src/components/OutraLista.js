function OutraLista({ itens }) {
    return (
        <>
            <h3>Listas de coisas boas:</h3>
            {itens.leght > 0 ? (
                itens.map((item, index) => (
                <p key={index}>{item}</p>
            ))) :(
                <p>Não há itens na lista</p>
            )}
        </>
    )    
}

export default OutraLista
