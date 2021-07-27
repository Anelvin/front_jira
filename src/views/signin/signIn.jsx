import React, { useState } from 'react';
import './signIn.scss';
import { TextField, Button } from '@material-ui/core';

function signIn(){
    return (
        <div className="container-signin">
            <div className="form-signin">
                <img src="images/jira-software.png" alt="" />
                <h2>Iniciar sesión</h2>
                <div className="container-input">
                    <TextField
                        id="filled-multiline-flexible"
                        label="Correo electrónico"
                        variant="outlined"
                        fullWidth
                    />
                </div>
                <div className="container-input">
                    <TextField
                        id="filled-multiline-flexible"
                        label="Contraseña"
                        type="password"
                        variant="outlined"
                        fullWidth
                    />
                </div>
                <div className="container-input">
                    <Button 
                        variant="contained" 
                        color="primary"
                        fullWidth
                    >Iniciar sesión</Button>
                </div>
                <div>
                    O
                </div>
                <div className="container-input">
                    <Button variant="contained" fullWidth>Continuar con Google</Button>
                </div>
                <div className="container-input">
                    <Button variant="contained" fullWidth>Continuar con Microsoft</Button>
                </div>
            </div>
        </div>
    );
}

export default signIn;