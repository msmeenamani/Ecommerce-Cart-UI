import React, { useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

const useStyles = makeStyles((theme) => ({
    table: {
      minWidth: 650,
    },
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
}));

function Header(props) {
    const { classes, openCart, titleName } = props;

    return (
      <div>
        <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {titleName}
          </Typography>
          {titleName == "E-Commerce" && <IconButton style={{marginLeft: "80%"}} edge="start" onClick={(()=>openCart())} className={classes.menuButton} color="inherit" aria-label="menu">
            <AddShoppingCartIcon />
          </IconButton>}
        </Toolbar>
      </AppBar>
    </div>
      </div>
    );
}

  export default withStyles(useStyles)(Header);