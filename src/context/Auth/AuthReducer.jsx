const AuthReducer = (state, action) => {
    const { payload, type } = action;

    switch(type){
        case 'SAVE_AUTH':
            return {
                ...state,
                auth: payload
            }
        default: 
            return state;
    }

}

export default AuthReducer;