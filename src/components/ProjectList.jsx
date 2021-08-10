import { makeStyles } from "@material-ui/styles";
import axios from "axios";
import React, { useEffect, useState } from "react";
import environment from "../environments/environment";
import { getToken } from '../routes/helperRoutes';
import CustomizedTables from "./Table";

const useStyle = makeStyles({
    container: {
        margin: '0 30px'
    }
});

const ProjectList = (props) => {
    const apiUrl = environment.apiUrl;
    const headersTable = ['ID', 'Nombre', 'Descripción', 'Fecha'];
    const [dataColumn, setDataColumn] = useState([]);
    const classes = useStyle();
    
    useEffect(() => {
        async function getProjects(apiUrl){
            let config = await getToken();
            let result = await axios.get(apiUrl + 'projects', config);
            setDataColumn(result.data.projects);
            console.log(result);
        }
        getProjects(apiUrl);
    }, []);

    return (
        <div className={classes.container}>
            <CustomizedTables  headers={headersTable} dataColumn={dataColumn}/>
        </div>
    );
}

export default ProjectList;