import React from 'react';
import Logo from '../images/Logo_OLX.png'
import SearchIcon from '@material-ui/icons/Search';
import { Add } from '@material-ui/icons';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import AllCategoires from '../components/navbar';
import {  Ads  } from '../components/ads'
import { Link } from "react-router-dom";
import { Footer, Copyright } from '../components/footer';
import BannerImg from '../images/banner.JPG';
import FooterImg from '../images/footerImg.JPG';
import HostelImg from '../images/hostel.webp';
import LcdImg from '../images/LCD.webp';
import WatchImg from '../images/watch.webp';
import Img1 from '../images/login1.JPG';
import Img2 from '../images/login2.JPG';
import Img3 from '../images/login3.JPG';
import FacebookIcon from '@material-ui/icons/Facebook';
import { connect } from 'react-redux';
import { facebook_login, logOut, getFirebaseData } from '../store/action';
// import firebase from '../config/firebase';


class Home extends React.Component {
  componentDidMount() {
    this.props.getFirebaseData();
  }
  render() {
    let user = this.props.current_user;
  

    return (
      <div>
        <div className="sticky-top">
          <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm p-2   rounded">
            <img width='50px' className="ml-2" src={Logo} alt="" />
            <select className="form-control selects  ml-3" id="inputGroupSelect01">
              <option defaultValue="Pakistan" selected>Pakistan</option>
              <option defaultValue="Lahore">Lahore</option>
              <option defaultValue="Karachi">Karachi</option>
              <option defaultValue="Peshawar">Peshawar</option>
              <option defaultValue="Multan">Multan</option>
              <option defaultValue="Islamabad">Islamabad</option>
              <option defaultValue="Rawalpindi">Rawalpindi</option>
            </select>
            <div className="form-inline ml-2">
              <input className="form-control " type="search" placeholder="Find Cars, Mobiles Phones and more..." aria-label="Search" />
              <button className="btn" > <SearchIcon /></button>
            </div>
            <span style={{ display: 'flex' }} className=" mt-2">

              {user.profile ? <div>
                <span><NotificationsIcon style={{ marginLeft: '10px', fontSize: '30px' }} /><ChatBubbleOutlineIcon style={{ marginLeft: '10px', fontSize: '30px' }} /></span>

                <div className="btn-group ml-5">
                  <img className="userImg  " id='userImg' src={user.profile} alt="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />

                  <p className="dropdown-toggle dropdown-toggle-split  " data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span className="sr-only">Toggle Dropdown</span>
                  </p>
                  <div className="dropdown-menu">

                    <Link className='dropdown-item border' onClick={() => this.props.logOut()}>logout </Link>
                  </div>
                </div></div> : <Link  className='nav-link login ml-3' data-toggle="modal" data-target="#exampleModal"  >Login</Link>}

              {user.uid ? <Link to='/post'><button type="button" className="sell_btn float-right"  ><Add />SELL</button></Link>

                :
                <button type="button" className="sell_btn ml-3" data-toggle="modal" data-target="#exampleModal"   ><Add />SELL</button>

              }
            </span>

          </nav>
        </div>

        <div>
          <div>

            {/* Modal */}
            <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-body">
                    <div>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">X</span>
                      </button>
                    </div>
                    <div id="carouselExampleControls" className="carousel slide mt-5" data-ride="carousel">
                      <div className="carousel-inner">
                        <div className="carousel-item active">
                          <img src={Img1} className="d-block w-100" alt="loginImg" />
                        </div>
                        <div className="carousel-item">
                          <img src={Img2} className="d-block w-100" alt="loginImg" />
                        </div>
                        <div className="carousel-item">
                          <img src={Img3} className="d-block w-100" alt="loginImg" />
                        </div>
                      </div>
                      <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="sr-only">Previous</span>
                      </a>
                      <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="sr-only">Next</span>
                      </a>
                    </div>
                    <button className="loginButton mt-2" data-dismiss="modal" onClick={() => this.props.facebook_login()}><FacebookIcon />Continue with facebook </button>
                    <p className=" mt-5">We won't share your personal details with anyone</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>







        <AllCategoires />
        <img className="bannerImg" width='100%' src={BannerImg} alt="BannerImg" />
        {/* new Ads */}
        <div className="container  bg-light mt-5" style={{ height: '360px' }}>
          <h3>Demo Ads
              <Link className='links mt-2 mr-2' >View more</Link>
          </h3>
          <div className='row mt-3'>
            {/* <div className='col'><Ads img={CarImg} featured="FEATURED" price="5,750,000" condition="2020-1,000 KM" categorie="Kia Spotage AWD full option " date="YESTERDAY" location="Lahore Punjab" /></div> */}
            <div className='col'><Ads img={LcdImg} price="33,000" categorie="Andriod black 40 inch LED TV" date="TODAY" location="Karachi" /> </div>
            <div className='col'><Ads img={HostelImg} featured="FEATURED" price="13,500" categorie="Kashmair Boys Hostel" date="6 SEP" location="FECSH, Islamabad" /> </div>
                    <div className="card selling-card" >
                        <div className="card-body" >
                            <h6> < strong > Want do you see staff hare ? </strong>  </h6>
                            <p> Make some extra cash by selling things in your community.Go on it 's quiks and easy</p>
                           
                            {user.uid? <Link to='/post'><button className="start-selling-btn" > Start Selling </button></Link> :
                            <button className="start-selling-btn" data-toggle="modal" data-target="#exampleModal"  > Start Selling </button>  }
                        </div>
                    </div>
               

            <div className='col'><Ads img={WatchImg} featured="FEATURED" price="1,800" categorie="X7 SMART WATCH AKA (T500 PRO) LIMMITED TIME PRICE CHANGE" date="SEP 13" location="PWD Housing Scheme" /> </div>
          </div>
        </div>


        {/*All Ads */}
        <div className="container  mt-5">
          <h3>Fresh recommendations</h3>
          <div className='row mt-3' >
            {this.props.firebaseData.map((v, i) => { 
              return <div className="col-sm-12 col-md-6 col-lg-3 " key={i}>
           <div className="card mb-5"  >
                  <p className="featured " > < small className="text-muted" >FEATURED</small></p >
                  <p className="hart " > < small className="text-muted" > < FavoriteBorderOutlinedIcon /> </small></p >
                  <img src={v.adImg} className="card-img " alt="AdsIMg" />
                  <div className="card-body" >
                    <h5 className="card-text "  > Rs: {v.price} </h5>
                    <p className="card-text " > {v.title} </p>
                    <p className="card-text  location" > <small className="text-muted" > {v.address} </small></p >
                    <p className="card-text post-date" > <small className="text-muted" > {v.date} </small></p >
                  </div>
                </div>
              </div>

            })
            }
          </div>

          <div style={{ textAlign: `center` }}>
            <Link to=''  >   <button className="loadMoreBtn mt-3">Load more</button></Link>
          </div>
        </div >

        <img className="footerImg" width='100%' src={FooterImg} alt="footerImg" />

        <Footer />
        <Copyright />





      </div>
    );
  };
};

const mapStateToProps = (state) => {
  return {
    users: state.users,
    current_user: state.current_user,
    firebaseData: state.firebaseData
  }


};


const mapDispatchToProp = (dispatch) => ({
  facebook_login: () => dispatch(facebook_login()),
  logOut: () => dispatch(logOut()),
  getFirebaseData: () => dispatch(getFirebaseData()),

})

export default connect(mapStateToProps, mapDispatchToProp)(Home);
