import Button from './evento/Button'

function Evento() {
    function meuEvento() {
        console.log(`Ativando primeiro evento`)
    }

    function segundoEvento() {
        console.log('Ativando o segundo evento!')
    }

    return (
        <div>
            <p>Clique para disparar um evento:</p>
            <Button evento={meuEvento} text="Primeiro Evento" />
            <Button evento={segundoEvento} text="Segundo Evento" />
        </div>
    )
}

export default Evento