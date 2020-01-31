import React from 'react';
import { withStyles } from '@material-ui/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const styles = theme => ({
  root: {
    boxShadow: 'none'
  }
});

function Navbar({
  classes
}) {
  return (
    <AppBar
      className={classes.root}
      color="primary"
    >
      <Toolbar>
        <Typography
          variant="h3"
          component="p"
        >
          I.Work
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default withStyles(styles)(Navbar);
