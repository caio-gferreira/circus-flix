import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { CssVarsProvider } from '@mui/joy/styles';

import Sheet from '@mui/joy/Sheet';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import Typography from '@mui/joy/Typography';
import FormLabel from '@mui/joy/FormLabel';

// styles
import { SheetStyled, InputStyled, TypographyStyled } from "../../styles/material-uiStyles/LoginPage.styles";
import getUserMocked from "../../services/authService";

export default function LoginComponent({isAuthenticated, setIsAuthenticated, ...rest}) {
    const [emailInput, setEmailInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const user = { email: emailInput, password: passwordInput }
    

    const navigate = useNavigate();

    const handleEmailInput = (event) => {
        setEmailInput(event.target.value);
    };

    const handlePassorwdInput = (event) => {
        setPasswordInput(event.target.value);
    }

    const checkFieldHasEmpty = (event) => {
        if (emailInput === '' || passwordInput === '') {
            return setErrorMessage('Por favor, preencha os campo de e-mail e senha.');
        }
    }

    const sendToHomePage = (event) => {
        if (!getUserMocked(user) || checkFieldHasEmpty(event)) {
            return setErrorMessage('Por favor, preencha os campo de e-mail e senha.'); 
        }
        setIsAuthenticated(true);
        return navigate('/home');

    };

    return (
        <CssVarsProvider >
            <Sheet sx={SheetStyled}>
                <div>
                    <Typography level="h4" component="h1" sx={TypographyStyled}>
                        Welcome!
                    </Typography>
                    <Typography level="body-sm">Sign in to continue.</Typography>

                    <Typography level="body-sm" sx={{ color: "red" }}> { errorMessage } </Typography>

                    <FormControl >
                        <FormLabel>Email</FormLabel>
                        <Input
                            sx={InputStyled}
                            name="email"
                            type="email"
                            placeholder="johndoe@email.com"
                            value={emailInput}
                            onChange={handleEmailInput}
                        />
                        <FormLabel>Password</FormLabel>
                        <Input
                            sx={InputStyled}
                            name="password"
                            type="password"
                            placeholder="password"
                            value={passwordInput}
                            onChange={handlePassorwdInput}
                        />
                    </FormControl>
                    <Button sx={{ mt: 5 }} onClick={sendToHomePage} >
                        Log in
                    </Button>
                </div>
            </Sheet>
        </CssVarsProvider>
    )
}
