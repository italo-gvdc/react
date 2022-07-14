import PropTypes from 'prop-types'

function Item ({ marca, ano_lancamento }) {
    return (
        <>
            <li>{marca} - {ano_lancamento}</li>
        </>
    )
}

Item.propTypes = {
    marca: propTypes.string.isRequired,
    ano_lancamento:PropTypes.number
}

export default Item 