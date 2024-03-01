import React from "react";

import { CssVarsProvider } from '@mui/joy/styles';

import Sheet from '@mui/joy/Sheet';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import Typography from '@mui/joy/Typography';
import FormLabel from '@mui/joy/FormLabel';

/**
 * @typedef { import("@mui/material").SxProps }
 */
const sheetStyled = {
    width: 600,
    height: 600,
    mx: 'auto',
    my: 4,
    py: 3,
    px: 2,
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
    borderRadius: 'sm',
    boxShadow: 'md',
    background: "rgba(0,0,0,0.5)",
    justifyContent: 'center',
    alignItems: "center",
};

const typographyStyled = {
    color: "white",
    fontSize: "50px",

};

const inputStyled = {
    width: 250,
};

export default function LoginComponent() {
    return (
        <CssVarsProvider >
            <Sheet sx={sheetStyled}>
                <div>
                    <Typography level="h4" component="h1" sx={typographyStyled}>
                        Welcome!
                    </Typography>
                    <Typography level="body-sm">Sign in to continue.</Typography>
                    <FormControl >
                        <FormLabel>Email</FormLabel>
                        <Input
                            sx={inputStyled}
                            name="email"
                            type="email"
                            placeholder="johndoe@email.com"
                        />
                        <FormLabel>Password</FormLabel>
                        <Input
                            sx={inputStyled}
                            name="password"
                            type="password"
                            placeholder="password"
                        />
                    </FormControl>
                    <Button sx={{ mt: 5 }}>
                        Log in
                    </Button>
                </div>
            </Sheet>
        </CssVarsProvider>
    )
}
