import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Navbar-Landing.css';

function NavbarLanding() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const showButton = () => {
        if (window.innerWidth <= 960) {
          setButton(false);
        } else {
          setButton(true);
        }
      };

      useEffect(() => {
        showButton();
      }, []);

    window.addEventListener('resize', showButton);
    return (
        <>
            <nav className="navbarL">
                <div className="navbarL-container" >
                    <Link to="/" className="navbarL-logo" onClick={closeMobileMenu}>
                        Acadivity 
                    </Link>
                    <div className='menuL-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                    </div>
                    <ul className={click ? 'navL-menu active' : 'navL-menu'}>
                        <li className='navL-item'>
                            <Link to='/' className='navL-links' onClick={closeMobileMenu}>
                            Home
                            </Link>
                        </li>
                        <li className='navL-item'>
                            <Link
                            to='/'
                            className='navL-links'
                            onClick={closeMobileMenu}
                            >
                                Features
                            </Link>
                        </li>
                        <li>
                            <Link
                            to='/sign-up'
                            className='navL-links'
                            onClick={closeMobileMenu}
                            >
                                Sign Up
                            </Link>
                        </li>
                        <li>
                            <Link
                            to='/login'
                            className='navL-links'
                            onClick={closeMobileMenu}
                            >
                                Login
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
};

export default NavbarLanding;
