import React from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/styles';

const classes = makeStyles(theme => ({
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1)
      },

      button: {
        margin: theme.spacing(1),
      }
}));

class LoginForm extends React.Component {
    render() {
        return (
            <Row>
                <Col>
                    <Form>
                        <TextField
                            label="Email"
                            type="email"
                            name="email"
                            className={classes.textField}
                            autoComplete="email"
                            margin="normal"
                            variant="outlined"
                            fullWidth
                        />
                        <TextField
                            label="Password"
                            type="password"
                            name="password"
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                            fullWidth
                        />
                        <div>
                        <Button variant="contained" color="primary" className={classes.button}>
                            Login
                        </Button>
                        </div>
                    </Form>
                </Col>
            </Row>
        );
    }
}

export default LoginForm;