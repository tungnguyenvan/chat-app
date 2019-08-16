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
      token:  '',
    }

    this.showProgressbar = this.showProgressbar.bind(this);
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
  
  render() {
    return (
      <div className="App" align='center'>
        {
          this.state.token && <MainPage />
          || 
          <div>
            <TopBar isShowProgressbar={this.state.isShowProgressbar}/>
            <LoginPage
              showProgressbar={this.showProgressbar}/>
          </div>
        }
      </div>
    );
  }
}

export default App;
