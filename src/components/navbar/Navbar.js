import { Link } from 'react-router-dom';

import './Navbar.css';

function Navbar() {
    return (
        <nav className='navbar'>
            <ul>
                <li>
                    <Link to='/' className='navbar-item'>Home</Link>
                </li>
                {/* <li>
                    <Link to='/about' className='navbar-item'>About</Link>
                </li> */}
                <li>
                    <Link to='/create' className='navbar-item'>Create new post</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;