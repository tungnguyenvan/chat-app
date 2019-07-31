import React from 'react';
import Avatar from 'react-avatar';
import { Container } from 'react-bootstrap';

class Topbar extends React.Component {
    render() {
        return (
            <Container>
                <Avatar size="64" round={true} facebook-id="invalidfacebookusername" src="http://www.gravatar.com/avatar/a16a38cdfe8b2cbd38e8a56ab93238d3" />
            </Container>
        );
    }
}

export default Topbar;