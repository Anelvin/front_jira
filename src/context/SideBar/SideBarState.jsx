import { useReducer } from "react"
import SideBarReducer from './SideBarReducer';
import SideBarContext from "./SideBarContext";

const SideBarState = (props) => {

    const initialState = {
        sideBar: false
    }

    const [state, dispatch] = useReducer(SideBarReducer, initialState);

    const changeStateSideBar = async (value) => {
        dispatch({ type: 'SIDEBAR', payload: value});
    }

    return (
        <SideBarContext.Provider value={{ sideBar: state.sideBar,  changeStateSideBar }}>
            {props.children}
        </SideBarContext.Provider>
    );

}

export default SideBarState;