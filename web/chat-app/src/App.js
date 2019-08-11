import './App.css';
import React from 'react';
import LoginPage from './pages/login/LoginPage';
import TopBar from './components/topbar/Topbar';
import MainPage from './pages/main/MainPage'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isShowProgressbar:  true,
      token:  'abc.com',
    }

    this.showProgressbar = this.showProgressbar.bind(this);
    this.dimissProgressbar = this.dimissProgressbar.bind(this);
  }

  componentDidMount() {
    this.setState({
      isShowProgressbar: false
    })
  }

  // Progress bar
  showProgressbar() {
    this.setState({
        isShowProgressbar : true,
    });
  }
  dimissProgressbar() {
    this.setState({
      isShowProgressbar:  false
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
            <LoginPage showProgressbar={this.showProgressbar} dimissProgressbar={this.dimissProgressbar}/>
          </div>
        }
      </div>
    );
  }
}

export default App;
