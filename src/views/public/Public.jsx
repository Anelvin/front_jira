import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
    container: {
        position: 'relative',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    twoColumn: {
        position: 'relative',
        maxWidth: '1200px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    column1:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    oneColumn: {
        textAlign: 'center',
        padding: '100px 5px 5px 5px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    buttonGetFree: {
        color: '#ffffff',
        fontWeight: 'bold',
        backgroundColor: '#0052CC',
        maxWidth: '200px',
        '&:hover': {
            backgroundColor: '#0052AA',
        },
        marginTop: '25px'
    },
    img: {
        width: '800px'
    }
}));

const Public = () => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <div className={classes.twoColumn}>
                <div className={classes.column1}>
                    <h1>La herramienta de desarrollo de software líder de los equipos ágiles</h1>
                    <Button className={classes.buttonGetFree} style={{textTransform: 'none'}}>Consíguelo gratis</Button>
                </div>
                <img className={classes.img} src="./images/home1.png" alt="Imagen 1" />
            </div>
            <div className={classes.oneColumn}>
                <h1 style={{maxWidth: '700px'}}>Los mejores equipos de software entregan pronto y frecuentemente</h1>
                <p style={{maxWidth: '700px', marginTop: '25px', fontSize:'20px'}}>Jira Software está diseñado para que todos los miembros de tu equipo de software puedan planificar,
                supervisar y publicar software de gran calidad.</p>
            </div>
        </div>
    )
}

export default Public;