import './LoginForm.css';
import React from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles, styled } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

const Common = require('./LoginFormCommon');

const classes = makeStyles(theme => ({
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
      },
    card: {
        
    }
}));

const MyButton = styled(Button)({
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 4,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
});

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
                                                <MyButton>{ Common.LOGIN_TITLE }</MyButton>
                                            </div>
                                        </Col> 
                                        ||
                                        <Col >
                                            <div align='right'>
                                                <MyButton>{ Common.REGISTER_TITLE }</MyButton>
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