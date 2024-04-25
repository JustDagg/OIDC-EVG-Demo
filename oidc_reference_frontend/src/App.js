import React from "react";
import axios from "axios";
import evgLogo from './img/logo.png';
import ukFlag from './img/uk_flag.png';
import verifiedLogo from './img/verified.png';
import { GoSearch } from "react-icons/go";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegBell, FaTwitter, FaLinkedinIn, FaYoutube, FaRegCopyright } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { CiHome } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa6";
import { IoBarChartOutline } from "react-icons/io5";
import { MdMailOutline } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa6";


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

{/* FIRSTCHILD */}
            {/* top */}
            <div className="top-container">
              <p>Locations</p>
              <p>Sales: <b>(+84) 968206168</b></p>
              <p>Client Support</p>
              <div>
                <img src={ukFlag} alt="UK-Flag"/>
                <button className="dropdown-flag-top"><IoIosArrowDown /></button>
              </div>
            </div>

{/* SECONDCHILD */}
            {/* navbar */}
            <nav className="navbar">
              <div className="img-profile-container">
                <img src={evgLogo} alt="EVG" />
              </div>
              <div className="container">
                <button className="tracking-button">Order tracking</button>
              </div>
              <div className="container">
                <button className="management-button">Orders management</button>
              </div>
              <div className="container">
                <button className="profile-button">User management</button>
              </div>
              
              <div className="icon-container">
                <button className="search-button"><GoSearch /></button>
                <button className="cart-button"><FiShoppingCart /></button>
                <button className="notification-button"><FaRegBell /></button>
                <button className="avatar-button">
                  { 
                    this.state.user.imageUrl ? (
                      <img src={this.state.user.imageUrl} alt={this.state.user.name}/>
                    ) : (
                      <div className="text-avatar-navbar">
                        <span>{this.state.user.name && this.state.user.name[0]}</span>
                      </div>
                    )
                  }
                </button>
                <span className="name-navbar">{this.state.user.fullName}</span>
                <button className="dropdown-button"><IoIosArrowDown /></button>
              </div>
            </nav>

{/* THIRDCHILD */}
            {/* body */}
            <div className="top-body">
              <b>Account Overview</b>
              <div className="container">
                <button className="home-button"><CiHome /> Home</button>
                <span className="sign">\</span>
                <button className="account-button">Account</button>
              </div>
            </div>
                  
            {/* SIDEBAR-LEFT */}
            <div className="sidebar-container">
              <div className="sidebar-left">
                {/* Các nội dung của sidebar-left ở đây */}
                <button className="my-profile-button">
                  <span>
                    <FaRegUser style={{ fontSize: '35px',marginBottom: '10px' }} /> 
                    My Profile
                  </span>
                </button>

                <button className="report-button">
                  <span>
                    <IoBarChartOutline style={{ fontSize: '35px',marginBottom: '10px' }} />
                    Report
                  </span>
                </button>

                <button className="cdn-button">
                  <span>
                    <IoBarChartOutline style={{ fontSize: '35px',marginBottom: '10px' }} />
                    CDN
                  </span>
                </button>

                <button className="storage-button">
                  <span>
                    <IoBarChartOutline style={{ fontSize: '35px',marginBottom: '10px' }} /> 
                    Storage
                  </span>
                </button>

                <button className="live-button">
                  <span>
                    <IoBarChartOutline style={{ fontSize: '35px',marginBottom: '10px' }} />
                    Live & Transcoding
                  </span>
                </button>

                <button className="cloud-vps-button">
                  <span>
                    <IoBarChartOutline style={{ fontSize: '35px',marginBottom: '10px' }} /> 
                    Cloud VPS
                  </span>
                </button>

                <button className="dedicate-button">
                  <span>
                    <IoBarChartOutline style={{ fontSize: '35px',marginBottom: '10px'}} /> 
                    Dedicate
                  </span>
                </button>

                <button className="peer2peer-button">
                  <span>
                    <IoBarChartOutline style={{ fontSize: '35px',marginBottom: '10px' }} /> 
                    Peer2Peer
                  </span>
                </button>
              </div>

              {/* SIDEBAR-RIGHT */}
              <div className="sidebar-right">
                  {/* Nội dung của sidebar-right */}
                    <div className="sidebar-right-profile-info">
                      {/* sidebar-right-top */}
                      <div className="sidebar-right-top-profile-info">
                        {/* Ảnh */}
                        <div className="sidebar-right-profile-avatar">
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
                        
                        {/* Tên và Email */}
                        <div className="profile-name-email">
                          <div className="profile-name-logo">
                            <h2>{this.state.user.fullName}</h2>
                            <img src={verifiedLogo} alt="Verified Logo"/>
                          </div>
                          <div className="profile-email">
                            <MdMailOutline />
                            {this.state.user.email}
                          </div>  
                          {/* Các đơn hàng */}
                          <div className="profile-order">
                            <div class="column-first">
                              <b>18</b>
                              <p>Tổng đơn hàng</p>
                            </div>
                            <div class="column">
                              <b>10</b>
                              <p>Đã bàn giao</p>
                            </div>
                            <div class="column">
                              <b>8</b>
                              <p>Đang giao</p>
                            </div>
                          </div> 
                        </div>
                      </div>   
                      <div className="sidebar-right-bottom-profile-info">
                          {/* Các danh mục */}
                          <div className="profile-category">
                            <button className="profile-category">My profile</button>
                            <button className="billing-category">Billing info</button>
                            <button className="payment-category">Payment</button>
                            <button className="users-category">Users</button>
                            <button className="service-category">Service</button>
                            <button className="extension-category">Extension</button>
                            <button className="token-category">API tokens</button>
                            <button className="notify-category">Notifications</button>
                          </div>
                      </div>
                    </div>
                    
                    {/* sidebar-right-bottom */}
                    <div className="sidebar-right-profile-info-bottom">

                      <div className="top-bottom">
                        <div>
                          <b>Profile Details</b>
                        </div>
                        <div>
                          <button className="edit-profile-button">Edit Profile</button>
                        </div>
                      </div>

                      <div className="middle-bottom">
                      <table>
                        <tr>
                          <td className="row-one"><b>Client ID</b></td>
                          <td className="row-two"><b>338430</b></td>
                        </tr>
                        <tr>
                          <td className="row-one">Account name</td>
                          <td className="row-two">tuandang</td>
                        </tr>
                        <tr>
                          <td className="row-one">Full Name</td>
                          <td className="row-two">{this.state.user.fullName}</td>
                        </tr>
                        <tr>
                          <td className="row-one">Company</td>
                          <td className="row-two">EVG</td>
                        </tr>
                        <tr>
                          <td className="row-one">Address</td>
                          <td className="row-two">Số 20 ngõ 32 Đỗ Đức Dục, Nam Từ Liêm, Hà Nội</td>
                        </tr>
                        <tr>
                          <td className="row-one">Contact Phone</td>
                          <td className="row-two">084 3276 454 935</td>
                        </tr>
                        <tr>
                          <td className="row-one">Email</td>
                          <td className="row-two">{this.state.user.email}</td>
                        </tr>
                        <tr>
                          <td className="row-one">Password</td>
                          <td className="row-two">
                            **********
                            <u className="change-password">Change password</u>
                          </td>
                        </tr>
                        <tr>
                          <td className="row-one">Two-Factor authentication</td>
                          <td className="row-two">
                            <button className="two-factor-authentication-button">Enable Two-Factor authentication</button>
                            <p style={{ fontSize: '15px', color: '#A6ACBF'}}>Two-Factor authentication increases protection for your accounts and prevents them from
                            unauthorized access.</p>
                          </td>
                        </tr>
                        <tr>
                          <td className="row-one">Last logins</td>
                          <td style={{ fontWeight: 'normal'}} className="row-two">07 March 2024, 22:35</td>
                        </tr>
                      </table>
                      </div>

                      <div className="bottom-bottom">
                        <input className="logout-button" type="button" value="Sign Out" onClick={this.logout}/>
                      </div>
                      
                    </div>
              </div>

{/* LASTCHILD */}
            {/* Footer */}
            <footer className="footer">
              <div className="container">
                <p className="footer-left"><FaRegCopyright /> 2023 Everest Global. All Rights Reversed.</p>
              </div>
              <div className="container-right">
                <p className="footer-right">Connect With Us: <FaFacebookF /> <FaTwitter /> <FaLinkedinIn /> <FaYoutube /> </p>
              </div>
            </footer>
          
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
