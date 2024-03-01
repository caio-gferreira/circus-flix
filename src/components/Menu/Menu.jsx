import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../img/Logo.png';
import '../../styles/Menu.css';
import Button from '../Button/Button';

function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="CircusFlix logo" />
            </Link>
        
            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo vídeo
            </Button>
        </nav>
    )
};

export default Menu;