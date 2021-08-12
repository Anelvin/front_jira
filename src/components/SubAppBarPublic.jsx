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
  button: {
    padding: '5px',
    borderRadius: '4px',
    '&:hover':{
      cursor: 'pointer',
      textDecoration: 'none',
      backgroundColor: '#e5e5e5'
    }
  },
  toolbar:{
    width: '100vw',
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
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    color: 'white',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
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
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: '#000000',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
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
                <div className={classes.inputExpand}>
                  <Typography className={classes.title} variant="h6" noWrap>
                      <img className={classes.image} src="./images/jira-software.png" alt="" />
                  </Typography> 
                  {SubAppBarPublicTitles.map((item) => {
                    return (
                      <Button key={item} style={{textTransform: 'none'}} aria-controls="simple-menu" aria-haspopup="true">
                        {item}
                      </Button>
                    );
                  })
                  }
                </div>
                <div className={classes.containerAppBarInputRight}>
                  <Button style={{textTransform: 'none'}}>Consíguelo gratis</Button>
                </div>
                </div>
            </Toolbar>
            
        </AppBar>
        </div>
    );
}
