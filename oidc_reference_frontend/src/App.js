import React from "react";
import axios from "axios";
import evgLogo from './img/logo.png';

const backendBaseUrl = 'http://localhost:8080';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    axios({
      method: 'get',
      url: backendBaseUrl + '/current-user',
      withCredentials: true
    }).then(response => {
      this.setState({
        user: response.data
      })
    }).catch(error => {
      console.log('GETTING USER FAILED', error)
      alert('Getting current user failed, check console for details')
    })
  }

  render() {
    if (this.state.user) {
      console.log(this.state.user);
      return (
        <div className="profile-container">
            <nav className="navbar">
              <div className="container">
                <button className="profile-button">Profile</button>
              </div>
            </nav>
          <div className="container">
            <div className="profile-info">
            <div className="profile-avatar">
                            { 
                                this.state.user.imageUrl ? (
                                    <img src={this.state.user.imageUrl} alt={this.state.user.name}/>
                                ) : (
                                    <div className="text-avatar">
                                        <span>{this.state.user.name && this.state.user.name[0]}</span>
                                    </div>
                                )
                            }
                        </div>
            <div className="profile-name">
                           <h2>Họ và tên: {this.state.user.fullName}</h2>
                           <p className="profile-email">Email: {this.state.user.email}</p>
                        </div>

            {/* <p>Whole authentication object is logged in console for reference.</p> */}
            <input className="logout-button" type="button" value="Log out" onClick={this.logout}/>
          </div>
          </div>
        </div>
      )
    } else {
      return (
          <div>
            <p className="login-p">Bạn chưa đăng nhập! Vui lòng đăng nhập</p>
            <div className="img-container">
              <img src={evgLogo} alt="EVG" />
            </div>
            <div class="login-container">
              <a class="login-button" href={backendBaseUrl + '/oauth2/authorization/oidc'}>
                  <span>
                    Log in with EVG
                    </span>
              </a>
          </div>
            {/* <a className="button" href={backendBaseUrl + '/oauth2/authorization/ms_single'}>Log in with single tenant Microsoft account</a>
            <a className="button" href={backendBaseUrl + '/oauth2/authorization/ms_personal'}>Log in with personal Microsoft account</a>
            <a className="button" href={backendBaseUrl + '/oauth2/authorization/ms_multitenant'}>Log in with any Microsoft account</a> */}
          </div>
      )
    }
  }

  logout() {
    axios({
      method: 'post',
      url: backendBaseUrl + '/logout',
      withCredentials: true
    }).then(() => {
      window.location = '/'
    }).catch(error => {
      console.log('LOG OUT FAILED', error)
      alert('Log out failed, check console for details')
    });
  }
}

export default App;
