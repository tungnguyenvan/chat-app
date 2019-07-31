import './LoginPage.css';
import React from 'react';
import { Container } from 'react-bootstrap'

import Topbar from '../../components/Topbar';
import LoginForm from '../../components/LoginForm';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isShowProgressbar: true
        };
    }

    componentDidMount() {
        this.setState({
            isShowProgressbar: false
        });
    }

    render() {
        return (
            <div>
                <Topbar isShowProgressbar={this.state.isShowProgressbar} />
                <Container>
                    <LoginForm />
                </Container>
            </div>
        );
    }
}

export default LoginPage;