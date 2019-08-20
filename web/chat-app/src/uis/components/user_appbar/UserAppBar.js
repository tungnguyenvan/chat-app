import './UserAppBar.css'
import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

class UserAppBar extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
        <AppBar position='static' color='default'>
            <Toolbar>
            <Typography variant="p" color="inherit">
                UserName
            </Typography>
            </Toolbar>
        </AppBar>
        )
    }
}

export default UserAppBar