import React from 'react';
import Menu from '../../components/Menu';
import LoginComponent from '../../components/Login/Login';


export default function LoginPage({ isAuthenticated, setIsAuthenticated }) {
    return (
        <div>
            <Menu />
            <LoginComponent  isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
        </div>
    )
}