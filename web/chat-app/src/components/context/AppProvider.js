import React from 'react';
const AppContext = React.createContext();

class AppProvider extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            // Show progress bar
            isShowProgressBar: true,
            showProgressbar: this.showProgressbar(isShow),

            // Token
            userInfo:  {},
            setUserInfo:   this.setUserInfo(user),
        }

        this.showProgressbar = this.showProgressbar.bind(this);
        this.setUserInfo = this.setUserInfo.bind(this);
    }

    // Show or dimiss progress bar
    showProgressbar(isShow) {
        this.setState({
            isShowProgressBar: isShow
        });
    }

    // Set info user
    setUserInfo(user) {
        this.setState({
            userInfo: user
        });
    }

    render() {
        return (
            <AppContext.Propvider value={this.state}>

            </AppContext.Propvider>
        );
    }
}