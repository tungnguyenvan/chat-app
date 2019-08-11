import './LoginPage.css';
import React from 'react';
import { Container } from 'react-bootstrap'

import LoginForm from '../../components/login/LoginForm';
import RegisterDialog from '../../dialogs/register/RegisterDialog';

//const Common = require('./LoginCommon');

class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLogin             : true,
            registerDialogIsOpen : false,
            registerSuccess      : false,
            messageRegister     : '',
        };

        this.onToggleLogin = this.onToggleLogin.bind(this);
        this.showDialog = this.showDialog.bind(this);
        this.closeDialog = this.closeDialog.bind(this);
    }

    showDialog(registerSuccess, messageRegister) { //TODO: remove token
        this.setState({
            registerDialogIsOpen: true,
            registerSuccess: registerSuccess,
            messageRegister:  messageRegister
        });
    }

    closeDialog() {
        this.setState({
            registerDialogIsOpen: false,
            isLogin: true
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
                <Container>
                    <LoginForm 
                        onToggleLogin={this.onToggleLogin} 
                        isLogin={this.state.isLogin} 
                        showProgressbar={this.props.showProgressbar}
                        showDialog={this.showDialog}
                        dimissProgressbar={this.props.dimissProgressbar}/>

                    <RegisterDialog 
                        registerDialogIsOpen={this.state.registerDialogIsOpen} 
                        closeDialog={this.closeDialog}
                        registerSuccess={this.state.registerSuccess}
                        messageRegister={this.state.messageRegister}/>
                </Container>
            </div>
        );
    }
}

export default LoginPage;