import { Button, InputBase, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import SearchIcon from '@material-ui/icons/Search';
import React, { useState } from "react";
import { Autocomplete } from "@material-ui/lab";

const SearchBar = () => {
    const [typeProjects, setTypeProjects] = useState([]);
    const [typeCategories, setTypeCategories] = useState([]);
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
        },
        inputRoot: {
            color: 'inherit',
            width: '100%'
        },
        inputInput: {

        },
        containerInputSearch: {
            marginRight: '20px',
            border: '2px solid #E5E5E5',
            maxWidth: '200px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '0 10px',
            borderRadius: '4px',
        },
        containerInputs: {
            marginTop: '10px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start'
        },
        containerInput: {
            marginRight: '20px'
        }
        
    });

    const classes = useStyles();

    return (
        <div className={classes.container}>
            <div className={classes.lineProject}>
                <h1 className={classes.h1}>Proyectos</h1>
                <Button style={{textTransform: 'none'}} variant="contained" color="primary">Crear proyecto</Button>
            </div>
            <div className={classes.containerInputs}>
                <div className={classes.containerInputSearch}>
                    <InputBase
                    placeholder="Buscar..."
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                    />
                    <SearchIcon />
                </div>
                <div className={classes.containerInput}>
                    <Autocomplete 
                        id="combo-box"
                        options={typeProjects}
                        //getOptionLabel={(option) => option.title}
                        style={{width: 300}}
                        size="small"
                        multiple={true}
                        renderInput={(params) => <TextField {...params} label="Todos los tipos" variant="outlined"/>}
                    />
                </div>
            </div>
        </div>
    );
}

export default SearchBar;