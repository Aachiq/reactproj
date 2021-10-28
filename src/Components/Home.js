import React from 'react'
import DocDepot from './Documents/DocDepot'
import SearchIndex from './Documents/SearchIndex'
import SearchDepose from './Documents/SearchDepose'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
export default function Home() {
    return (
        <div>
          <AppBar position="fixed">
            <Toolbar>
              <IconButton edge="start" color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
                <Typography variant="h5">CraftSoft</Typography>
            </Toolbar>
            </AppBar>
            
            </div>
            )
        }
           {/* <h1>Home Page</h1>
            <Grid container>
              <Grid item md={3}>
                  <Paper>
                      <Drawer>
                          <Typography variant="h5">Side bar</Typography >
                      </Drawer>
                  </Paper>
              </Grid>
              <Grid item md={9}>
                  <Paper style={{marginLeft:100}}><DocDepot /></Paper>
              </Grid>
            </Grid>
            */} 