import './App.css';
import React from 'react';
import LoginPage from './uis/pages/login/LoginPage';
import TopBar from './uis/components/topbar/Topbar';
import MainPage from './uis/pages/main/MainPage'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isShowProgressbar:  true,
      token:  'a',
    }

    this.showProgressbar = this.showProgressbar.bind(this);
    this.setToken = this.setToken.bind(this);
  }

  componentDidMount() {
    this.setState({
      isShowProgressbar : false
    })
  }

  showProgressbar(isShow) {
    this.setState({
      isShowProgressbar: isShow
    })
  }

  setToken(token) {
    this.setState({
      token: token
    })
  }
  
  render() {
    return (
      <div className="App" align='center'>
        {
          this.state.token && <MainPage />
          || 
          <div>
            <TopBar isShowProgressbar={this.state.isShowProgressbar}/>
            <LoginPage
              showProgressbar={this.showProgressbar}
              setToken={this.setToken}/>
          </div>
        }
      </div>
    );
  }
}

export default App;
