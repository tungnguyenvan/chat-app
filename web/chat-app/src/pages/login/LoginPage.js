import './LoginPage.css';
import React from 'react';
import { Container } from 'react-bootstrap'

import Topbar from '../../components/topbar/Topbar';
import LoginForm from '../../components/login/LoginForm';
import RegisterDialog from '../../dialogs/register/RegisterDialog';

//const Common = require('./LoginCommon');

class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isShowProgressbar   : true,
            isLogin             : true,
            registerDialogIsOpen : false,
            registerSuccess      : false,
        };

        this.onToggleLogin = this.onToggleLogin.bind(this);
        this.showProgressbar = this.showProgressbar.bind(this);
        this.showDialog = this.showDialog.bind(this);
        this.closeDialog = this.closeDialog.bind(this);
    }

    showProgressbar() {
        this.setState({
            isShowProgressbar : true,
        });
    }

    dimissProgressbar() {
        this.setState({
            isShowProgressbar :  false
        });
    }

    showDialog(registerSuccess) {
        this.setState({
            registerDialogIsOpen: true,
            registerSuccess: registerSuccess,
        });
    }

    closeDialog() {
        this.setState({
            registerDialogIsOpen: false,
        });
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
                    <LoginForm 
                        onToggleLogin={this.onToggleLogin} 
                        isLogin={this.state.isLogin} 
                        showProgressbar={this.showProgressbar}
                        showDialog={this.showDialog}/>

                    <RegisterDialog 
                        registerDialogIsOpen={this.state.registerDialogIsOpen} 
                        closeDialog={this.closeDialog}
                        registerSuccess={this.state.registerSuccess}/>
                </Container>
            </div>
        );
    }
}

export default LoginPage;