import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";

const SearchBar = () => {
    
    const useStyles = makeStyles({
        container: {
            margin: '30px 30px'
        },
        h1: {
            fontSize: '1.5rem'
        },
        lineProject: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between'
        }
    });


    const classes = useStyles();

    return (
        <div className={classes.container}>
            <div className={classes.lineProject}>
                <h1 className={classes.h1}>Proyectos</h1>
                <Button variant="contained" color="primary">Crear proyecto</Button>
            </div>
        </div>
    );

}

export default SearchBar;