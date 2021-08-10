import React, { useContext, useState } from 'react';
import { TextField, Button, CircularProgress, Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import AuthContext from '../../context/Auth/AuthContext';

function Alert(props){
    return <MuiAlert elevation={6} variant="filled" {...props} />
}

function SignUp(props){
    const authContext = useContext(AuthContext);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [confirmPassword, setConfirmPassword] = useState(null); 
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const [severity, setSeverity] = useState('success');
    const [message, setMessage] = useState(null);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway'){
            return;
        }
        setOpen(false);
    }

    const handleError = (message) => {
        setSeverity('error');
        setLoading(false);
        setOpen(true);
        setMessage(message);
    }

    const createAccount = async () => {
        setLoading(true);
        const data = { email, password, confirmPassword }
        if(password === confirmPassword){
            try {
                let isAuthenticated = await authContext.signUp(data);
                if(!isAuthenticated) {
                    handleError('No autorizado!');
                } else {
                    props.history.push('/home');
                }
            } catch (error) {
                handleError('No autorizado!');
            }
        } else {
            handleError('Las contraseñas no coinciden!');
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
                                style={{textTransform: 'none'}}
                            >Crear cuenta</Button>
                    }
                </div>
                <div className="container-input">
                    <Button 
                        variant="contained" 
                        color="primary"
                        fullWidth
                        onClick={ () => window.location.href = 'signin' }
                        style={{textTransform: 'none'}}
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