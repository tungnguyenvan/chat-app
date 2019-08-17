import React, { useContext } from 'react'
//import Avatar from 'react-avatar';
import LinearProgress from '@material-ui/core/LinearProgress'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import Common from '../../../Common'

class Topbar extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { classes, isShowProgressbar } = this.props;
      return (
      <div className={classes.root}>

          <AppBar position="static" color="default">
            <Toolbar>
              <Typography variant="h6" color="inherit">
                { Common.APP_NAME }
              </Typography>
            </Toolbar>
          </AppBar>
          
          { 
            isShowProgressbar && <LinearProgress classes={{colorPrimary: classes.colorPrimary}} /> 
          }

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