import React from 'react'
import './LeftPage.css'
import AppBar from '@material-ui/core/AppBar'
import CssBaseline from '@material-ui/core/CssBaseline'
import Divider from '@material-ui/core/Divider'
import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'
import IconButton from '@material-ui/core/IconButton'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import MailIcon from '@material-ui/icons/Mail'
import MenuIcon from '@material-ui/icons/Menu'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles, withStyles, useTheme } from '@material-ui/core/styles'

import UserAppBar from '../user_appbar/UserAppBar'

const drawerWidth = 320;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  // menuButton: {
  //   marginRight: theme.spacing(2),
  //   [theme.breakpoints.up('sm')]: {
  //     display: 'none',
  //   },
  // },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    height: 64,
  }
  // content: {
  //   flexGrow: 1,
  //   padding: theme.spacing(3),
  // },
})

class LeftPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      data: ['Inbox', 'Starred', 'Send email', 'Drafts']
    }
  }

  handleDrawerToggle() {
    //const [mobileOpen, setMobileOpen] = React.useState(false)
    //setMobileOpen(!mobileOpen);
  }

  render() {
    const {classes} = this.props

    const drawer = (
      <div>
        <UserAppBar />
        <Divider />
        <List>
          {this.state.data.map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    )

    return ( 
      <div className={classes.root}>
        <AppBar position='static' color='default'>
            <Toolbar>
            <Typography variant="h6" color="default">
                ABCXYZ
            </Typography>
            </Toolbar>
        </AppBar>

          <nav className={classes.drawer} aria-label="mailbox folders">
            <Hidden xsDown implementation="css">
              <Drawer
                classes={{
                  paper: classes.drawerPaper,
                }}
                variant="permanent"
                open
              >
                {drawer}
              </Drawer>
            </Hidden>
          </nav>
      </div>)
  }
}

export default withStyles(styles)(LeftPage);