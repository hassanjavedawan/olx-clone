import React from 'react';
import AllCategoires from '../components/navbar';
import { Footer, Copyright } from '../components/footer';
import { Call, ShareOutlined } from '@material-ui/icons';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import Logo from '../images/Logo_OLX.png'
import SearchIcon from '@material-ui/icons/Search';
import { Add } from '@material-ui/icons';
import { Link } from "react-router-dom";
import Img1 from '../images/login1.JPG';
import Img2 from '../images/login2.JPG';
import Img3 from '../images/login3.JPG';
import FacebookIcon from '@material-ui/icons/Facebook';
import { connect } from 'react-redux';
import { facebook_login, logOut, getFirebaseData } from '../store/action';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import firebase from '../config/firebase';


class DetailAds extends React.Component {
  constructor(){
    super()
    this.state={
      allData:''
    }
  }
  componentDidMount(){
    let match = this.props.match.params.id;
    console.log(match)
    // var arr = []
    firebase.database().ref('/').child(`adsData/${match}`).on('child_added', (data) => {
      let item = data.val()
      // arr.push(item)
      this.setState({allData:item})
    })
  }
  render() {
    let user = this.props.current_user;

  console.log('data==>',this.state)

  
    return (
      <div>
        <div className='sticky-top' >
          <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm p-2 rounded" >
            <img width='50px' className="ml-3" src={Logo} alt="" />
            <select className="form-control selects  ml-5" id="inputGroupSelect01">
              <option defaultValue="Pakistan" selected>Pakistan</option>
              <option defaultValue="Lahore">Lahore</option>
              <option defaultValue="Karachi">Karachi</option>
              <option defaultValue="Peshawar">Peshawar</option>
              <option defaultValue="Multan">Multan</option>
              <option defaultValue="Islamabad">Islamabad</option>
              <option defaultValue="Rawalpindi">Rawalpindi</option>
            </select>
            <form className="form-inline ml-3">
              <input className="form-control " type="search" placeholder="Find Cars, Mobiles Phones and more..." aria-label="Search" />
              <button className="btn" type="submit"> <SearchIcon /></button>
            </form>
            <span style={{ display: 'flex' }} className=" mt-2">

              {user.profile ? <div>
                <span><NotificationsIcon style={{ marginLeft: '25px', fontSize: '30px' }} /><ChatBubbleOutlineIcon style={{ marginLeft: '10px', fontSize: '30px' }} /></span>

                <div className="btn-group">
                  <img className="userImg ml-3 " id='userImg' src={user.profile} alt="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />

                  <p className="dropdown-toggle dropdown-toggle-split  mr-3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span className="sr-only">Toggle Dropdown</span>
                  </p>
                  <div className="dropdown-menu">

                    <Link className='dropdown-item border ' onClick={() => this.props.logOut()}>logout </Link>
                  </div>
                </div></div> : <Link to='' className='nav-link login ml-5' data-toggle="modal" data-target="#exampleModal" >Login</Link>}

              {user.uid ? <Link to='/post'><button type="button" className="sell_btn float-right"  ><Add />SELL</button></Link>

                :
                <button type="button" className="sell_btn ml-5" data-toggle="modal" data-target="#exampleModal"  ><Add />SELL</button>

              }
            </span>

          </nav>
        </div>

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
                  <button className="loginButton mt-2" data-dismiss="modal" onClick={() => this.props.facebook_login()} ><FacebookIcon />Continue with facebook </button>
                  <p className=" mt-5">We won't share your personal details with anyone</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        <AllCategoires />
        <div className="container-fluid dtalads mt-3">
          <div className="row">
            <div className="col-sm-8">
              <img className="detailImg ml-4" src='https://firebasestorage.googleapis.com/v0/b/olx-clone-hassan.appspot.com/o/images%2FB612_20191026_205518_614.jpg?alt=media&token=f6ab9166-9a47-4d6b-a0a0-621ef18652d4' alt="jjj" />
              <div className="description ml-4">
                <h4 className="mt-2 ml-3">Description</h4>
                <p className="mt-2 ml-3">Vet's Best Flea and Tick Advanced Strength Dog Shampoo</p>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="detalPriceArea">
                <p className="hartIcon mt-4 mr-3"><FavoriteBorderOutlinedIcon /></p>
                <p className="shareIcon mt-4 mr-5"><ShareOutlined /></p>
                <h1 className="ml-3 mt-2">Rs 600</h1>
                <p className="text-muted ml-3">Dog, puppy and cat shampoo</p>
                <p className="text-muted uplodDate mt-2 mr-3">Sep 15</p>
                <p className="text-muted ml-3 mt-4" style={{ fontSize: 'small' }}>E-7, Islamabad, Islamabad Capital Territory</p>
              </div>
              <div className="sellerDescription">
                <h5 className="mt-3 ml-3">Seller Description</h5>
                <h4 className="sellerName mt-3 ml-5">Hassan javed</h4>
                <p className="memberSince text-muted ml-5">Member since SEP 2020</p>
                <img className="sellerImg ml-3" src='' alt="" />
                <br /> <button className="chattSellerBtn ml-3 mt-3">Chat with seller</button>
                <p className="text-center mt-3"><Call /> ** *** **** <span style={{ textDecoration: 'underline', color: 'blue' }}>Show number</span></p>
              </div>
              <div className="postedInArea">
                <h3 className="mt-3 ml-3">Posted in</h3>
                <p className="text-muted ml-3 mt-3 " style={{ fontSize: 'small' }}>E-7, Islamabad, Islamabad Capital Territory</p>
              </div>
              <div className="mt-4 mb-5">
                <p style={{ fontSize: 'medium' }} className="d-inline-flex"><strong>AD ID 1021367690</strong></p>
                <p style={{ fontSize: 'medium', float: 'right' }} className="d-inline-flex  "><strong>REPORT THIS AD</strong></p>
              </div>
            </div>
          </div>
        </div>

        <Footer />
        <Copyright />

      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  users: state.users,
  current_user: state.current_user,
  firebaseData: state.firebaseData
});

const mapDispatchToProp = (dispatch) => ({
  facebook_login: () => dispatch(facebook_login()),
  logOut: () => dispatch(logOut()),
  getFirebaseData: () => dispatch(getFirebaseData()),

})

export default connect(mapStateToProps, mapDispatchToProp)(DetailAds);
