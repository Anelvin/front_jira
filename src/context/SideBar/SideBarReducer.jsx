const SideBarReducer = (state, action) => {
    const { payload, type } = action;

    switch(type){
        case 'SIDEBAR':
            return {
                ...state,
                sideBar: payload
            }
        default:
            return state;
    }

}

export default SideBarReducer;