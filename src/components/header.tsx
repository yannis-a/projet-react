import React, {FunctionComponent} from 'react';
import '../css/header.css'

export const Header: FunctionComponent = () => {

    return (
        <div className="header">
            <nav className="navbar navbar-expand-sm navbar-dark m-5 position-absolute">
                <div className="container">
                    <a href="/" className="navbar-brand">Menu</a>
                </div>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a href="/" className="nav-link">
                            Accueil
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;