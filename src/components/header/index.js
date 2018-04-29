import React from 'react'
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

const Header = () => (
  <div>
    <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="title" color="inherit">
            Calendar
          </Typography>
        </Toolbar>
      </AppBar>
  </div>
)

export default Header