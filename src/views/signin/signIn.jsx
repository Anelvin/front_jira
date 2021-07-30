import React, { useEffect, useState } from 'react';
import './SignIn.scss';
import MuiAlert from '@material-ui/lab/Alert';
import { TextField, Button, Snackbar, CircularProgress } from '@material-ui/core';
import environment from '../../environments/environment';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function Alert(props){
    return <MuiAlert elevation={6} variant="filled" {...props} />
}

function SignIn(props){

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState(null);
    const [severity, setSeverity] = useState('success');
    const [url, setUrl] = useState(null);
    let history = useHistory();

    useEffect(() => {
        setUrl(environment.apiUrl);
    }, [])

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    }

    const login = () => {
        setLoading(true);
        let data = {
            email,
            password
        }
        axios.post(url + 'auth/signin', data)
            .then(result => {
                if(result.data.token){
                    console.log(result);
                    setLoading(false);
                    setOpen(true);
                    setMessage('Sesión iniciada!');
                    setSeverity('success');
                    history.push('/home');
                } else {
                    handleError();
                }
            })
            .catch(error => {
                console.log(error);
                handleError();
            })
    }

    const handleError = () => {
        setSeverity('error');
        setLoading(false);
        setOpen(true);
        setMessage('Error al conectar con el servidor');
    }

    return (
        <div className="container-signin">
            <div className="form-signin">
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert open={open} severity={severity}>
                        { message }
                    </Alert>
                </Snackbar>
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
                    {
                        loading === true 
                        ?
                            <CircularProgress />
                        :
                            <Button 
                                variant="contained" 
                                color="primary"
                                fullWidth
                                onClick={login}
                            >Iniciar sesión</Button>
                    }
                </div>
                <div className="container-input">
                    <Button 
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