import './LoginForm.css'
import React from 'react'
import { Row, Col, Form } from 'react-bootstrap'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { makeStyles, styled } from '@material-ui/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Api from '../../../controllers/Api'

const Common = require('./LoginFormCommon')
var UserController = require('../../../controllers/UserController')

const classes = makeStyles(theme => ({
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
      },
    card: {
        
    }
}));

const ButtonRegister = styled(Button)({
    color: 'blue',
    border: 0,
    fontSize: 11
});

const MyCard = styled(Card)({
    minWidth: 400,
    maxWidth: 400
});


class LoginForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name : '',
            email : '',
            password : '',
            repassword : '',
            isShowProgressbar : true,

            // show error in textfield
            isNameError:    false,
            isEmailError:   false,
            isPasswordError: false,
            isRePasswordError: false,
        }

        this.userController = UserController.default;

        this.loginEvent = this.loginEvent.bind(this)
        this.registerEvent = this.registerEvent.bind(this)
        this.onNameChange = this.onNameChange.bind(this)
        this.onEmailChange = this.onEmailChange.bind(this)
        this.onPasswordChange = this.onPasswordChange.bind(this)
        this.onRePasswordChange = this.onRePasswordChange.bind(this)

        this.onLoginSuccess     = this.onLoginSuccess.bind(this)
        this.onLoginFail     = this.onLoginFail.bind(this)

        this.onRegisterSuccess = this.onRegisterSuccess.bind(this)
        this.onRegisterFail = this.onRegisterFail.bind(this);
    }

    checkTextIsEmpty(str) {
        return (str.length === 0 || !str.trim());
    }

    onNameChange(e) {
        this.setState({
            name : e.target.value,
            isNameError : false
        });
    }

    onEmailChange(e) {
        this.setState({
            email : e.target.value,
            isEmailError : false
        });
    }

    onPasswordChange(e) {
        this.setState({
            password: e.target.value,
            isPasswordError: false
        });
    }

    onRePasswordChange(e) {
        this.setState({
            repassword : e.target.value,
            isRePasswordError: false
        });
    }

    loginEvent(e) {
        // Check email is empty
        if (this.checkTextIsEmpty(this.state.email)) {
            return this.setState({
                isEmailError: true
            });
        }

        // Check password is empty
        if (this.checkTextIsEmpty(this.state.password)) {
            return this.setState({
                isPasswordError: true
            });
        }

        this.props.showProgressbar(true);
        const user = {
            email: this.state.email,
            password: this.state.password
        }

        this.userController.login(user, this.onLoginSuccess, this.onLoginFail);
    }

    onLoginSuccess(data) {
        console.log(data)
        this.props.setToken(data.data.result.token);
        this.props.showProgressbar(false);
    }

    onLoginFail(error) {
        if (error.response.status === 403) {
            this.props.showProgressbar(false);
            this.props.showDialog(false, 'Email unActive');
        } else {
            this.props.showProgressbar(false);
            this.setState({
                isEmailError: true,
                isPasswordError: true
            });
        }
    }

    registerEvent(e) {
        // Check name is empty
        if (this.checkTextIsEmpty(this.state.name)) {
            return this.setState({
                isNameError: true
            });
        }
        
        // Check email is empty
        if (this.checkTextIsEmpty(this.state.email)) {
            return this.setState({
                isEmailError: true
            });
        }

        // Check password is empty
        if (this.checkTextIsEmpty(this.state.password)) {
            return this.setState({
                isPasswordError: true
            });
        }

        // Check repassword and password
        if (this.state.password != this.state.repassword) {
            return this.setState({
                isRePasswordError: true
            });
        }

        this.props.showProgressbar(true);
        const user = {
            email   :   this.state.email,
            name    :   this.state.name,
            password:   this.state.password,
            phone_number:   0, //TODO: update phone number from form
            birth_day:      0, // TODO: update birth day timestamp
        }

        this.userController.register(user, this.onRegisterSuccess, this.onRegisterFail)
    }

    onRegisterSuccess(data) {
        this.props.showDialog(true, data.data.active_account);
        this.props.showProgressbar(false);
    }

    onRegisterFail(error) {
        this.props.showDialog(false, error);
        this.props.showProgressbar(false);
    }

    render() {
        const { onToggleLogin, isLogin } = this.props;

        return (
            <div className='login-form'>
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <MyCard>
                            <CardContent>

                                {
                                    isLogin && <h1 className='title'>{ Common.LOGIN_TITLE }</h1>
                                    || <h1 className='title'>{ Common.REGISTER_TITLE }</h1>
                                }

                                <div align='left'>
                                    <Form className='FormLogin'>

                                        {
                                            !isLogin &&
                                            <div>
                                            <Col>
                                                <TextField
                                                    required
                                                    error={this.state.isNameError}
                                                    onChange={this.onNameChange}
                                                    ref='name'
                                                    label="Name"
                                                    type="name"
                                                    name="name"
                                                    className={classes.textField}
                                                    margin="normal"
                                                    variant="outlined"
                                                    fullWidth/>
                                            </Col>
                                            <Col>

                                            </Col>
                                            </div>
                                        }

                                        <Col>
                                            <TextField
                                                required
                                                error={this.state.isEmailError}
                                                onChange={this.onEmailChange}
                                                ref='email'
                                                label="Email"
                                                type="email"
                                                name="email"
                                                className={classes.textField}
                                                autoComplete="email"
                                                margin="normal"
                                                variant="outlined"
                                                fullWidth/>
                                        </Col>

                                        <Col>
                                            <TextField
                                                required
                                                error={this.state.isPasswordError}
                                                onChange={this.onPasswordChange}
                                                ref='password'
                                                label="Password"
                                                type="password"
                                                name="password"
                                                className={classes.textField}
                                                margin="normal"
                                                variant="outlined"
                                                fullWidth/>
                                        </Col>

                                        {
                                            !isLogin &&
                                            <Col>
                                                <TextField
                                                    required
                                                    error={this.state.isRePasswordError}
                                                    onChange={this.onRePasswordChange}
                                                    ref='repassword'
                                                    label="Repassword"
                                                    type="password"
                                                    name="rePassword"
                                                    className={classes.textField}
                                                    margin="normal"
                                                    variant="outlined"
                                                    fullWidth/>
                                            </Col>
                                        }

                                        {
                                            isLogin &&
                                            <Col>
                                                <ButtonRegister onClick={ onToggleLogin } >{ Common.NEW_ACCOUNT }</ButtonRegister>
                                            </Col>
                                            ||
                                            <Col>
                                                <ButtonRegister onClick={ onToggleLogin } >{ Common.BACK_TO_LOGIN }</ButtonRegister>
                                            </Col>
                                        }

                                        {
                                            isLogin &&
                                            <Col >
                                                <div align='right'>
                                                <Button variant="contained" color="primary" className={classes.button} onClick={this.loginEvent}>
                                                    { Common.LOGIN_TITLE }
                                                </Button>
                                                </div>
                                            </Col> 
                                            ||
                                            <Col >
                                                <div align='right'>
                                                <Button variant="contained" color="primary" className={classes.button} onClick={this.registerEvent}>
                                                { Common.REGISTER_TITLE }
                                                </Button>
                                                </div>
                                            </Col>
                                        }

                                    </Form>
                                </div>
                            </CardContent>
                        </MyCard>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default LoginForm;