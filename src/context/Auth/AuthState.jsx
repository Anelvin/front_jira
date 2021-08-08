import { useReducer } from "react";
import axios from "axios";
import environment from "../../environments/environment";
import AuthContext from "./AuthContext";
import AuthReducer from "./AuthReducer";

const AuthState = (props) => {

    const initialState = {
        auth: null
    }

    const [state, dispatch] = useReducer(AuthReducer, initialState);
    
    const signIn = async (data) => {
        const res = await axios.post(environment.apiUrl + 'auth/signin', data);
        dispatch({ type: 'SAFE_AUTH', payload: res.data });
        localStorage.setItem('user-jira', JSON.stringify(res.data));
        if(res.data.token) return true;
        return false;
    }

    const signUp = async (data) => {
        const res = await axios.post(environment.apiUrl + 'auth/signup', data);
        dispatch({ type: 'SAFE_AUTH', payload: res.data});
        localStorage.setItem('user-jira', JSON.stringify(res.data));
        if(res.data.token) return true;
        return false;
    }

    return (
        <AuthContext.Provider value={{auth: state.auth, signIn, signUp}}>
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthState;
