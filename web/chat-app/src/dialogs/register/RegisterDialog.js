import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const Common = require('./RegisterDialogCommon');

class RegisterDialog extends React.Component {
    render() {
        const { registerDialogIsOpen, closeDialog, registerSuccess, messageRegister } = this.props;

        return(
            <div>
                <Dialog
                    open={registerDialogIsOpen}
                    onClose={closeDialog}
                    aria-labelledby='alert-dialog-title'
                    aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title">
                            { 
                                registerSuccess && Common.ALERT_TITLE_SUCCESS || Common.ALERT_TITLE_FAIL
                            }
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                {
                                    registerSuccess && Common.ALERT_CONTENT_SUCCESS || Common.ALERT_CONTENT_FAIL
                                }
                                {
                                    ' \n[Message: ' + messageRegister + ']'
                                }
                            </DialogContentText>
                            <DialogActions>
                                <Button onClick={closeDialog}>{ Common.ALERT_ACTION_OK_TEXT }</Button>
                            </DialogActions>
                        </DialogContent>

                </Dialog>
            </div>
        );
    }
}

export default RegisterDialog;