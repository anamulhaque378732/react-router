import { Link } from 'react-router-dom';
import '../Header/header.css';

const Header = () => {
    return (
        <div>
          
            <nav>
           <Link to="/"> Home</Link>
           <Link to="/users">User</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact us</Link>
               
            </nav>
        </div>
    );
};

export default Header;