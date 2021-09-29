import PropTypes from 'prop-types'


const Button = ({onClick}) => {
    return (
        <button
        onClick={onClick}
        className="btn btn-danger" id="deleteAll">AC</button>
    )
}

Button.propTypes = {
    onClick: PropTypes.func,
}

export default Button
