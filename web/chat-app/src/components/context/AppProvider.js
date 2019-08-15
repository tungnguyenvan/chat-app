import React from 'react';
import AppContext from './AppContext'

class AppProvider extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            // Show progress bar
            isShowProgressBar: true,
            showProgressbar: this.showProgressbar(),

            // Token
            userInfo:  {},
            setUserInfo:   this.setUserInfo(),
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
            <AppContext.Provider value={this.state}>
                {
                    this.props.children
                }
            </AppContext.Provider>
        );
    }
}

export default AppProvider;