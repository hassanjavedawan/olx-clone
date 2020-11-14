import React from 'react';
import Logo from '../images/Logo_OLX.png';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link } from "react-router-dom";
import { Copyright } from '../components/footer';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import { connect } from 'react-redux';
import { set_name } from '../store/action';
import firebase from '../config/firebase';




class Attributes extends React.Component {
    constructor() {
        super()
        this.state = {
            title: "",
            description: "",
            price: "",
            file: null,
            address: "",
            category: "",
            pic: '',
            progress: 0
        }
    }

    set_name = () => {
        console.log("Title==>", this.state.title)
        console.log("DESCRIPTION==>", this.state.description)
        console.log("PRICE==>", this.state.price)
        console.log("AdImg==>", this.state.pic)
        console.log("LOCATION==>", this.state.address)
        var date = new Date();
        var day = date.getDate();
        var month = date.getMonth() + 1;
        var year = date.getFullYear();
        var today = day + "/" + month + "/" + year;

        let key = firebase.database().ref('/').push().key;
        let AdsData = {
            title: this.state.title,
            description: this.state.description,
            price: this.state.price,
            adImg: this.state.pic,
            address: this.state.address,
            sellerName: this.props.current_user.name,
            userImg: this.props.current_user.profile,
            key: key,
            date: today
        }
        firebase.database().ref('/').child(`adsData/${key}`).set(AdsData).then(() => {
            alert('Your Ads succesfully Publish')
        })
    }
    handleChangeTitle = (e) => {
        this.setState({
            title: e.target.value
        })
    }
    handleChangeDescription = (e) => {
        this.setState({
            description: e.target.value
        })
    }
    handleChangePrice = (e) => {
        this.setState({
            price: e.target.value
        })
    }


    uploadImg = () => {

        if (this.state.file == null) {
            alert('first click add imgae and then click upload button  ')
        }
        else {
            var ref = firebase.storage().ref().child(`images/${this.state.file.name}`).put(this.state.file)
            ref.on('state_changed', (snapshot) => {
                var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                this.setState({ progress: progress })
                console.log('Upload is ' + progress + '% done');
            }, (error) => {
            }, () => {
                ref.snapshot.ref.getDownloadURL().then(url => {
                    console.log(url);
                    this.setState({ pic: url })
                });

            });
        }
    }


    handleChangeAddress = (e) => {
        this.setState({
            address: e.target.value
        })
    }
    render() {
        let user = this.props.current_user;
        console.log('state===>', this.state)
        return (
            <div>

                <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-light shadow-sm p-2  rounded">
                    <Link to='/post' onClick={() => { alert('Are you sure you want to leave? Your progress will not be saved') }} className="ml-3 " > <ArrowBackIcon style={{ color: 'black' }} /></Link>
                    <img width='50px' className="ml-4" src={Logo} alt="" />
                </nav>
                <h4 className="text-center mt-2 "><strong> POST YOUR AD</strong></h4>
                <div className="postItemArea mt-2 mb-4">
                    <h5 className="mt-3 ml-3 mb-3"><strong>CHOOSE A CATEGORY</strong> </h5>
                    <Link to='/post' className='mt-3 ml-3 mb-5 ' style={{ textDecorationLine: 'underline', color: 'black', fontWeight: 'bold' }} >Change</Link>
                    <hr />

                    <div>
                        <div className='main'>
                            <h5 className="mt-3   mb-3"><strong>INCLUDE SOME DETAILS</strong> </h5>
                            <div className=' mt-5' >
                                <span className=''></span> Ad title * <br />
                                <input className='attributeInput' onChange={(e) => this.handleChangeTitle(e)} type='text' required />
                                <p className='text-muted ' style={{ fontSize: 'small' }}>Mention the key features of your item (e.g. brand, model, age, type)</p>
                            </div>
                            <div className=' mt-3 mb-3' >
                                <span className=''></span>Description *  <br />
                                <textarea className='DescriptionInput ' onChange={this.handleChangeDescription} type='text' required ></textarea>
                                <p className='text-muted ' style={{ fontSize: 'small' }}>Include condition, features and reason for selling</p>
                            </div>
                            <hr />
                            <div className=' mt-3 mb-3' >
                                <h5 className="mb-3 "><strong>SET A PRICE</strong> </h5>
                                <span className='text-muted'>  price*</span>  <br />
                                <input placeholder='Rs |' id="validationServer" onChange={this.handleChangePrice} className='attributeInput' type='number' required />
                            </div>
                            <hr />
                            <div className=' mt-3 mb-3 ' >
                                <div><h6 className="mb-3"><strong>UPLOAD PHOTOS</strong> </h6>
                                    <div className='getImgArea '>
                                        <progress value={this.state.progress} max='100' />
                                        <br />
                                        <button className="getImg">

                                            <label >
                                                <input type="file" id="input-file" onChange={(e) => this.setState({ file: e.target.files[0] })} />
                                                <AddAPhotoIcon />
                                            </label>
                                        </button><br />
                                        <button onClick={this.uploadImg}>upload Img</button>
                                    </div>
                                </div>
                                <hr />
                                <div>
                                    <h5 className="mb-3 "><strong>CONFIRM YOUR LOCATION</strong> </h5>
                                    <span className=''>    Address *</span> <br />
                                    <input className='attributeInput ' onChange={this.handleChangeAddress} type='text' required />
                                </div>
                                <hr />
                                <div>
                                    <h5 className="mb-3 "><strong>REVIEW YOUR DETAILS</strong> </h5>
                                    <h3 className="SellerName ">{user.name}</h3>
                                    <img className="SellerImg " src={user.profile} alt="" />
                                </div>
                            </div>
                            <hr />
                            <Link to='/'>
                                <button className="postBtn  mb-5 " onClick={this.set_name} >Post Now</button>
                            </Link>
                        </div>

                    </div>
                </div>
                <Copyright />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    current_user: state.current_user,
    card: state.card,
});
const mapDispatchToProp = (dispatch) => {
    return {
        set_name: () => dispatch(set_name()),
    }
}
export default connect(mapStateToProps, mapDispatchToProp)(Attributes);
