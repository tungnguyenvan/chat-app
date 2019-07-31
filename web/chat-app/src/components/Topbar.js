import React from 'react';
//import Avatar from 'react-avatar';
import { Container, Navbar, Nav } from 'react-bootstrap';
import LinearProgress from '@material-ui/core/LinearProgress';
import { withStyles } from '@material-ui/core/styles';

import Common from '../Common';

class Topbar extends React.Component {

    render() {
      const { classes, isShowProgressbar } = this.props;
        return (
          <div>
          <Navbar bg="light" expand="lg">
          <Container>

            <Navbar.Brand href="#home">
                { Common.APP_NAME }
            </Navbar.Brand>

            <Nav>
              <Navbar.Text>
                Created by: <a href='#About'>Nguyen Van Tung</a>
              </Navbar.Text>
            </Nav>
            
          </Container>
          </Navbar>
          { isShowProgressbar && <LinearProgress classes={{colorPrimary: classes.colorPrimary}} /> }
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