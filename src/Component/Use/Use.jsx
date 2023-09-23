import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const Use = ({ user }) => {
    const { id, name, email, phone } = user;
    const style = {
        border: '2px solid yellow',
        padding: '10px',
        borderRadius: '20px',
        margin: '10px'
    }

    return (
        <div style={style}>
            <h1>{name}</h1>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <Link to={`/user/${id}`}> Show details</Link>
            <Link to={`/user/${id}`}> <button>Click me</button></Link>
        </div>
    );
};


Use.propTypes = {
    user: PropTypes.object
}

export default Use;