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
        const [ registerDialogIsOpen, onRegisterDialogClose ] = this.props;

        return(
            <div>
                <Dialog
                    open={registerDialogIsOpen}
                    onClode={onRegisterDialogClose}
                    aria-labelledby='alert-dialog-title'
                    aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title">{ Common.ALERT_TITLE }</DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                {
                                    Common.ALERT_CONTENT
                                }
                            </DialogContentText>
                            <DialogActions>
                                <Button onClick={onRegisterDialogClose}>{ Common.ALERT_ACTION_OK_TEXT }</Button>
                            </DialogActions>
                        </DialogContent>

                </Dialog>
            </div>
        );
    }
}

export default RegisterDialog;