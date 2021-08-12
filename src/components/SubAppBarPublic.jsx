import React from 'react';
import { alpha, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { SubAppBarPublicTitles } from '../constants/ItemsTitle';
import { Button, Link } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  appBar:{
    position: 'relative',
    backgroundColor: '#ffffff', 
    color: '#000000',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  containerAppBarInputRight: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  appBarInputRight: {
    margin: '0 10px'
  },
  toolbar:{
    width: '100vw',
    height: '100%',
    maxWidth: '1200px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputExpand: {
    display: 'flex',
    flexDirection: 'row'
  },
  defaultColor: {
    color: '#0052CC'
  },
  grow: {
    flexGrow: 1
  },
  title: {
    display: 'none',
    color: 'white',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  containerLinks: {
    height: '100%',
    '&:hover': {
        cursor: 'pointer'
    }
  },
  linksLeft: {
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  links: {
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    margin: '0 10px',
    fontWeight: 'bold',
    '&:hover': {
        textDecoration: 'none',
        borderBottom: '2px solid #0052CC'
    }
  },
  buttonGetFree: {
    color: '#0052CC',
    fontWeight: 'bold',
    border: '1px solid #0052CC'
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.black, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.black, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  image: {
    width: '200px',
    marginRight: '20px'
  }
}));

export default function SubAppBarPublic() {
    const classes = useStyles();

    return (
        <div className={classes.grow}>
        <AppBar className={classes.appBar} position="static">
            <Toolbar>
                <div className={classes.toolbar}>
                    <div className={classes.linksLeft}>
                        <Typography className={classes.title} variant="h6" noWrap>
                            <img className={classes.image} src="./images/jira-software-blue.svg" alt="" />
                        </Typography> 
                        {SubAppBarPublicTitles.map((item) => {
                            return (
                                <div className={classes.containerLinks}>
                                    <Link className={classes.links} key={item} style={{textTransform: 'none'}} aria-controls="simple-menu" aria-haspopup="true">
                                        {item}
                                    </Link>
                                </div>
                            );
                        })
                        }
                    </div>
                    <div className={classes.containerAppBarInputRight}>
                        <Button className={classes.buttonGetFree} style={{textTransform: 'none'}}>Consíguelo gratis</Button>
                    </div>
                </div>
            </Toolbar>
            
        </AppBar>
        </div>
    );
}
