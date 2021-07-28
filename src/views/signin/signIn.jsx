import React, { useState } from 'react';
import './SignIn.scss';
import { TextField, Button } from '@material-ui/core';

function SignIn(){

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const login = () => {
        let data = {
            email,
            password
        }
        console.log(data);
    }

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
                        onChange={ event => setEmail(event.target.value) }
                    />
                </div>
                <div className="container-input">
                    <TextField
                        id="filled-multiline-flexible"
                        label="Contraseña"
                        type="password"
                        variant="outlined"
                        fullWidth
                        onChange={ event => setPassword(event.target.value) }
                    />
                </div>
                <div className="container-input">
                    <Button 
                        variant="contained" 
                        color="primary"
                        fullWidth
                        onClick={login}
                    >Iniciar sesión</Button>
                </div>
                <div className="container-input">
                    <Button 
                        variant="contained" 
                        color="primary"
                        fullWidth
                        variant="outlined"
                        onClick={ () => window.location.href = '/signup' }
                    >Registrarse</Button>
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

export default SignIn;