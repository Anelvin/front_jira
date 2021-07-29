import React, { useEffect, useState } from 'react';
import { TextField, Button, CircularProgress, Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import environment from '../../environments/environment';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function Alert(props){
    return <MuiAlert elevation={6} variant="filled" {...props} />
}

function SignUp(props){
    
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [confirmPassword, setConfirmPassword] = useState(null); 
    const [url, setUrl] = useState(null);
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const [severity, setSeverity] = useState('success');
    const [message, setMessage] = useState(null);
    let history = useHistory();

    useEffect(() => {
        setUrl(environment.apiUrl);
    })

    const handleClose = (event, reason) => {
        if (reason === 'clickaway'){
            return;
        }
        setOpen(false);
    }

    const handleError = () => {
        setSeverity('error');
        setLoading(false);
        setOpen(true);
        setMessage('Error al conectar con el servidor');
    }

    const createAccount = () => {
        setLoading(true);
        const data = {
            email,
            password,
            confirmPassword
        }
        if(password === confirmPassword){
            axios.post(url + 'auth/signup', data)
                .then(result => {
                    if(result.data.token){
                        console.log(result);
                        setLoading(false);
                        setOpen(true);
                        setMessage('Usuario registrado!');
                        setSeverity('success');
                        history.push('/home');
                    } else {
                        handleError();
                    }
                })
        } else {
            handleError()
        }
    }

    return (
        <div className="container-signin">
            <div className="form-signin">
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity={severity}>
                        { message }
                    </Alert>
                </Snackbar>
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
                    {
                        loading === true ? 
                            <CircularProgress /> 
                        : 
                            <Button 
                                variant="contained" 
                                color="primary"
                                fullWidth
                                onClick={createAccount}
                            >Crear cuenta</Button>
                    }
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