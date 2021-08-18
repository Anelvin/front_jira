import { Button, Link } from "@material-ui/core";
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
        justifyContent: 'center',
        marginTop: '50px',
        padding: '20px 0 20px 0'
    },
    boxShadow: {
        boxShadow: '6px 30px 30px rgb(23 43 77 / 10%)'
    },
    column1:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginBottom: '25px'
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
    },
    hover: {
        '&:hover': {
            cursor: 'pointer',
        },
    },
    columnCenter: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    rowCenter: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    marginHorizontal: {
        margin: '0 10px'
    },
    marginVertical: {
        margin: '10px 0'
    },
    fontSize: {
        fontSize: '1.25rem'
    },
    integrations:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    itemIntegration: {
        width: '20%',
        margin: '0 1%',
        height: '400px'
    },
    icon: {
        width: '60px'
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
            <div className={classes.twoColumn}>
                <div className={classes.boxShadow}>
                    <img className={classes.img} src="./images/home2.png" alt="Imagen 1" />
                </div>
                <div className={classes.columnCenter} style={{marginLeft: '20px'}}>
                    <h3>Planifica</h3>
                    <p style={{marginTop: '25px', fontSize:'20px'}}>Crea historias de usuario e incidencias, planifica sprints y distribuye tareas entre tu equipo de software.</p>
                    <h3 style={{marginTop: '25px'}}>Supervisa</h3>
                    <p style={{marginTop: '25px', fontSize:'20px'}}>Prioriza y analiza el trabajo de tu equipo en su contexto y con una completa visibilidad.</p>
                </div>
            </div>
            <div className={classes.twoColumn}>
                <div className={classes.columnCenter} style={{marginLeft: '20px'}}>
                    <h3>Lanza</h3>
                    <p style={{marginTop: '25px', fontSize:'20px'}}>Realiza lanzamientos con confianza y seguridad, sabiendo que la información que tienes es siempre la más actualizada.</p>
                    <h3 style={{marginTop: '25px'}}>Informe</h3>
                    <p style={{marginTop: '25px', fontSize:'20px'}}>Mejora el rendimiento del equipo con datos visuales en tiempo real que tu equipo puede emplear.</p>
                </div>
                <div className={classes.boxShadow}>
                    <img className={classes.img} src="./images/home3.png" alt="Imagen 1" />
                </div>
            </div>
            <div className={classes.twoColumn}>
                <div className={classes.marginHorizontal} style={{width: '33%'}}>
                    <h1>Elige un flujo de trabajo o crea uno</h1>
                </div>
                <div className={classes.marginHorizontal} style={{width: '33%'}}>
                    <p className={classes.fontSize}>Cada equipo cuenta un proceso único para lanzar software. Utiliza un workflow predefinido o crea uno adaptado a la forma de trabajar de tu equipo.</p>
                </div>
            </div>
            <div className={classes.oneColumn}>
                <img src="./images/home4.svg" alt="Diagrama de flujo" />
            </div>
            <div className={classes.oneColumn}>
                <h1>Se integra con las herramientas que ya usas</h1>
                <p className={[classes.marginVertical, classes.fontSize].join(' ')}>Mejora tu flujo de trabajo con integraciones de primer nivel para que tu equipo pueda obtener los mejores resultados.</p>
                <Link className={[classes.appBarInputRight, classes.button, classes.marginVertical, classes.hover]}>Más información sobre las integraciones</Link>
            </div>
            <div className={[classes.integrations, classes.marginVertical].join(' ')}>
                <div className={classes.itemIntegration}>
                    <div style={{height: '100px'}}>
                        <img style={{width: '100px'}} src="./images/Software-documentation.svg" alt="" />
                    </div>
                    <h3>Gestión del conocimiento</h3>
                    <p style={{margin: '20px 0'}}>Transforma los requisitos de productos de Confluence en un backlog de Jira Software con un solo clic.</p>
                    <Link className={[classes.appBarInputRight, classes.button, classes.marginVertical, classes.hover]}>Obtén más información sobre Confluence</Link>
                </div>
                <div className={classes.itemIntegration}>
                    <div style={{height: '100px'}}>
                        <img style={{width: '60px'}} src="./images/Software-Git.svg" alt="" />
                    </div>
                    <h3>Flujo de trabajo de desarrollo</h3>
                    <p style={{margin: '20px 0'}}>Jira Software actualiza automáticamente las incidencias y las transiciones cuando se confirma el código en Bitbucket.</p>
                    <Link className={[classes.appBarInputRight, classes.button, classes.marginVertical, classes.hover]}>Más información sobre Bitbucket</Link>
                </div>
                <div className={classes.itemIntegration}>
                    <div style={{height: '100px'}}>
                        <img style={{width: '86px'}} src="./images/Software-Hierarchy.svg" alt="" />
                    </div>
                    <h3>Nuestra guía para la integración y la implementación continuas</h3>
                    <p style={{margin: '20px 0'}}>Sobrealimenta tu CI/CD con Pipelines y supervisa el estado de compilación desde Jira Software.</p>
                    <Link className={[classes.appBarInputRight, classes.button, classes.marginVertical, classes.hover]}>Más información sobre Pipelines</Link>
                </div>
                <div className={classes.itemIntegration}>
                    <div style={{height: '100px'}}>
                        <img style={{width: '100px'}} src="./images/devops-big-spot@2x.png" alt="" />
                    </div>
                    <h3>Atlassian Open DevOps</h3>
                    <p style={{margin: '20px 0'}}>Una solución preconfigurada de nuestros mejores productos e integraciones de terceros basada en lo que los equipos de software de alto rendimiento necesitan para empezar a trabajar.</p>
                    <Link className={[classes.appBarInputRight, classes.button, classes.marginVertical, classes.hover]}>Más información sobre DevOps de Atlassian</Link>
                </div>
            </div>
        </div>
    )
}

export default Public;