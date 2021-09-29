import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title }) => {
    const onClick = () => {
        console.log('Click')
    }
    return (
        <header className="text-center">
            <h1>{title}</h1>
            <h2>By: Edgar Santana</h2>
            <Button onClick={onClick} />
        </header>
    )
}

Header.defaultProps = {
    title: 'React Calculator',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// const headingStyle = {
//     fontWeight: 'lighter',
// }

export default Header
