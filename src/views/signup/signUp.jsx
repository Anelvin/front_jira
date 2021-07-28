import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';

function SignUp(){
    
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [confirmPassword, setConfirmPassword] = useState(null); 

    const createAccount = () => {
        const data = {
            email,
            password,
            confirmPassword
        }
        console.log(data);
    }

    return (
        <div className="container-signin">
            <div className="form-signin">
                <img src="images/jira-software.png" alt="" />
                <h2>Crear cuenta</h2>
                <div className="container-input">
                    <TextField
                        id="filled-multiline-flexible"
                        label="Correo electrónico"
                        type="email"
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
                    <TextField
                        id="filled-multiline-flexible"
                        label="Confirmar contraseña"
                        type="password"
                        variant="outlined"
                        fullWidth
                        onChange={ event => setConfirmPassword(event.target.value) }
                    />
                </div>
                <div className="container-input">
                    <Button 
                        variant="contained" 
                        color="primary"
                        fullWidth
                        onClick={createAccount}
                    >Crear cuenta</Button>
                </div>
                <div className="container-input">
                    <Button 
                        variant="contained" 
                        color="primary"
                        fullWidth
                        variant="outlined"
                        onClick={ () => window.location.href = 'signin' }
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

export default SignUp;