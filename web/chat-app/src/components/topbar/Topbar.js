import React from 'react'
//import Avatar from 'react-avatar';
import LinearProgress from '@material-ui/core/LinearProgress'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import Common from '../../Common'
import AppProvider from '../context/AppProvider'

const AppContext = React.createContext(defaultValue)

class Topbar extends React.Component {

    render() {
      const { classes } = this.props;
        return (
        <div className={classes.root}>

          <AppBar position="static" color="default">
            <Toolbar>
              <Typography variant="h6" color="inherit">
                { Common.APP_NAME }
              </Typography>
            </Toolbar>
          </AppBar>

          <AppProvider>
            <AppContext.Consumer>
              { (context) => context.isShowProgressBar && <LinearProgress classes={{colorPrimary: classes.colorPrimary}} /> }
            </AppContext.Consumer>
          </AppProvider>

        </div>
        );
    }
    
}

const styles = props => ({
  colorPrimary: {
    backgroundColor: '#eef3fd',
  }
});

export default withStyles(styles)(Topbar);