import React from 'react';
import { alpha, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';
import { Button } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    color: '#000000',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    borderRadius: theme.shape.borderRadius,
    backgroundColor: '#ffffff',
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    border: '2px solid #E5E5E5',
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
    padding: '0 5px'
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
    width: '100%'
},
  inputInput: {

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
    width: '120px',
    marginRight: '20px'
  }
}));

export default function PrimarySearchAppBar() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    const [anchorElMenu, setAnchorElMenu] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClick = (event) => {
      setAnchorElMenu(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const itemsAppBar = [
      'Tu trabajo',
      'Proyectos',
      'Filtros',
      'Paneles',
      'Personas',
      'Aplicaciones'
    ];

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        id={menuId}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={handleMenuClose}
        >
        <MenuItem onClick={handleMenuClose}>Perfil</MenuItem>
        <MenuItem onClick={handleMenuClose}>Mi cuenta</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        id={mobileMenuId}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
        >
        <MenuItem onClick={handleProfileMenuOpen}>
            <IconButton
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
            >
            <AccountCircle />
            </IconButton>
            <p>Profile</p>
        </MenuItem>
        </Menu>
    );

    return (
        <div className={classes.grow}>
        <AppBar position="static" style={{backgroundColor: '#FFFFFF'}}>
            <Toolbar>
            <Typography className={classes.title} variant="h6" noWrap>
                <img className={classes.image} src="/images/jira.png" alt="Logo de Jira" />
            </Typography>
            {itemsAppBar.map((item) => {
              return (
                <Button key={item} style={{textTransform: 'none'}} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                  {item}
                  <ExpandMore />
                </Button>
              );
            })}
            <div className={classes.grow} />
            <div className={classes.search} style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center'
            }}>
              <SearchIcon style={{color: '#000000', marginRight: '8px'}} />  
              <InputBase
              placeholder="Buscar..."
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              />
            </div>
            <div className={classes.sectionDesktop}>
                <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                >
                <AccountCircle />
                </IconButton>
            </div>
            <div className={classes.sectionMobile}>
                <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
                >
                <MoreIcon />
                </IconButton>
            </div>
            </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
        </div>
    );
}
