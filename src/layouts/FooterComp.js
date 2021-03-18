import React, { useState } from 'react';


function Footer(props) {

    const [count, setCount] = useState(0);
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            </IconButton>
            <Typography variant="h6" className={classes.title}>
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }

  export default Footer