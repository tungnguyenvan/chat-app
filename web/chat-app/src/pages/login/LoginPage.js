import './LoginPage.css';
import React from 'react';
import { Container } from 'react-bootstrap'

import Topbar from '../../components/topbar/Topbar';
import LoginForm from '../../components/login/LoginForm';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isShowProgressbar   : true,
            isLogin             : true,
        };

        this.onToggleLogin = this.onToggleLogin.bind(this);
    }

    componentDidMount() {
        this.setState({
            isShowProgressbar: false
        });
    }

    onToggleLogin() {
        this.setState({
            isLogin             : !this.state.isLogin
        });
    }

    render() {
        console.log(this.state.isLogin);
        return (
            <div>
                <Topbar isShowProgressbar={this.state.isShowProgressbar} />
                <Container>
                    <LoginForm onToggleLogin={this.onToggleLogin} isLogin={this.state.isLogin}/>
                </Container>
            </div>
        );
    }
}

export default LoginPage;