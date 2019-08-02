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

        this.onChangeToRegister = this.onChangeToRegister.bind(this);
    }

    componentDidMount() {
        this.setState({
            isShowProgressbar: false
        });
    }

    onChangeToRegister() {
        this.setState({
            isShowProgressbar   : true,
            isLogin             : !this.state.isLogin
        });
    }

    render() {
        console.log(this.state.isLogin);
        return (
            <div>
                <Topbar isShowProgressbar={this.state.isShowProgressbar} />
                <Container>
                    {
                        this.state.isLogin && <LoginForm onChangeToRegister={this.onChangeToRegister} isLogin={this.state.isLogin}/>
                    }
                </Container>
            </div>
        );
    }
}

export default LoginPage;