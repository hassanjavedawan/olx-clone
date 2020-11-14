import React from 'react';
import Logo from '../images/Logo_OLX.png'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link } from "react-router-dom";
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import TvIcon from '@material-ui/icons/Tv';
import MotorcycleIcon from '@material-ui/icons/Motorcycle';
import BusinessIcon from '@material-ui/icons/Business';
import LocalTaxiIcon from '@material-ui/icons/LocalTaxi';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import PetsIcon from '@material-ui/icons/Pets';
import EventSeatIcon from '@material-ui/icons/EventSeat';
import WatchLaterOutlinedIcon from '@material-ui/icons/WatchLaterOutlined';
import SportsCricketOutlinedIcon from '@material-ui/icons/SportsCricketOutlined';
import ChildFriendlyOutlinedIcon from '@material-ui/icons/ChildFriendlyOutlined';
import { Copyright } from '../components/footer';




class Post extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-light shadow-sm p-2  rounded">
                    <Link to='/' className="ml-3 " > <ArrowBackIcon style={{ color: 'black' }} /></Link>
                    <img width='50px' className="ml-4" src={Logo} alt="" />
                </nav>

                <h4 className="text-center mt-2 "><strong> POST YOUR AD</strong></h4>
                <div className="postItemArea mt-2 mb-4">
                    <h6 className="mt-3 ml-3 mb-3"><strong>CHOOSE A CATEGORY</strong> </h6>

                    <div className='dropright'>
                        <div className="postItemItem border " data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><PhoneAndroidIcon className="mr-2" style={{ color: 'gray' }} /> Mobiles <ArrowForwardIosIcon style={{ float: 'right', marginRight: "10px", color: 'gray' }} /> </div>
                        <div className="dropdown-menu " style={{ width: '448px', border: 'none', marginTop: '-8px', marginLeft: '0px' }} >
                            <div>
                                <Link to='/post/attributes' className="dropdown-item border postItemItem" >Tablets</Link>
                                <Link to='/post/attributes' className="dropdown-item border postItemItem" > Accessories</Link>
                                <Link to='/post/attributes' className="dropdown-item border postItemItem" > Mobiles Phone</Link>
                            </div>
                        </div>
                    </div>

                    <div className='dropright'>
                        <div className="postItemItem border" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><DirectionsCarIcon className="mr-2" style={{ color: 'gray' }} /> Vehicles <ArrowForwardIosIcon style={{ float: 'right', marginRight: "10px", color: 'gray' }} /> </div>
                        <div className="dropdown-menu " style={{ width: '448px', border: 'none', marginTop: '-8px', marginLeft: '0px' }} >
                            <div>
                                <Link to='/post/attributes' className="dropdown-item border postItemItem " >Cars</Link>
                                <Link to='/post/attributes' className="dropdown-item border postItemItem " >Cars on Installments</Link>
                                <Link to='/post/attributes' className="dropdown-item border postItemItem " >Cars Accessories</Link>
                                <Link to="/post/attributes" className="dropdown-item border postItemItem " >Spare Parts</Link>
                                <Link to="/post/attributes" className="dropdown-item border postItemItem " >Buses, Vans &amp; Trucks</Link>
                                <Link to="/post/attributes" className="dropdown-item border postItemItem " >Rickshaw &amp; Chingchi</Link>
                                <Link to="/post/attributes" className="dropdown-item border postItemItem " >Other Vehicles</Link>
                                <Link to="/post/attributes" className="dropdown-item border postItemItem " >Boats</Link>
                                <Link to="/post/attributes" className="dropdown-item border postItemItem " >Tractors &amp; Trailers</Link>
                            </div>
                        </div>
                    </div>
                    <div className='dropright'>
                        <div className="postItemItem border" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><HomeWorkIcon className="mr-2" style={{ color: 'gray' }} /> Property for Sale <ArrowForwardIosIcon style={{ float: 'right', marginRight: "10px", color: 'gray' }} /> </div>
                        <div className="dropdown-menu " style={{ width: '448px', border: 'none', marginTop: '-8px', marginLeft: '0px' }} >
                            <div>
                                <Link to="/post/attributes" className="dropdown-item border postItemItem " >Land &amp; Plots</Link>
                                <Link to="/post/attributes" className="dropdown-item border postItemItem " >Houses</Link>
                                <Link to="/post/attributes" className="dropdown-item border postItemItem " >Apartments &amp; Flats</Link>
                                <Link to="/post/attributes" className="dropdown-item border postItemItem " >Shops - Offices - Commercial Space</Link>
                                <Link to="/post/attributes" className="dropdown-item border postItemItem " >Portions &amp; Floors</Link>
                            </div>
                        </div>
                    </div>
                    <div className='dropright'>
                        <div className="postItemItem border" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><HomeWorkIcon className="mr-2" style={{ color: 'gray' }} /> Property for Rent <ArrowForwardIosIcon style={{ float: 'right', marginRight: "10px", color: 'gray' }} /> </div>
                        <div className="dropdown-menu " style={{ width: '448px', border: 'none', marginTop: '-8px', marginLeft: '0px' }} >
                            <div>
                                <Link to="/post/attributes" className="dropdown-item border postItemItem " >Houses</Link>
                                <Link to="/post/attributes" className="dropdown-item border postItemItem " >Apartments &amp; Flats</Link>
                                <Link to="/post/attributes" className="dropdown-item border postItemItem " >Portions &amp; Floors</Link>
                                <Link to="/post/attributes" className="dropdown-item border postItemItem " >Shops - Offices - Commercial Space</Link>
                                <Link to="/post/attributes" className="dropdown-item border postItemItem " >Roommates &amp; Paying Guests</Link>
                                <Link to="/post/attributes" className="dropdown-item border postItemItem " >Vacation Rentals - Guest Houses</Link>
                                <Link to="/post/attributes" className="dropdown-item border postItemItem " >Land &amp; Plots</Link>
                            </div>
                        </div>
                    </div>
                    <div className='dropright'>
                        <div className="postItemItem border" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><TvIcon className="mr-2" style={{ color: 'gray' }} /> Electronics &amp; Home Appliances <ArrowForwardIosIcon style={{ float: 'right', marginRight: "10px", color: 'gray' }} /> </div>
                        <div className="dropdown-menu " style={{ width: '448px', border: 'none', marginTop: '-8px', marginLeft: '0px' }} >
                            <div>
                                <Link to="/post/attributes" className="dropdown-item border postItemItem " >Computers &amp; Accessories</Link>
                                <Link to="/post/attributes" className="dropdown-item border postItemItem " >TV - Video - Audio</Link>
                                <Link to="/post/attributes" className="dropdown-item border postItemItem " >Cameras &amp; Accessories</Link>
                                <Link to="/post/attributes" className="dropdown-item border postItemItem " >Games &amp; Entertainment</Link>
                                <Link to="/post/attributes" className="dropdown-item border postItemItem " >Other Home Appliances</Link>
                                <Link to="/post/attributes" className="dropdown-item border postItemItem " >Generators, UPS &amp; Power Solutions</Link>
                                <Link to="/post/attributes" className="dropdown-item border postItemItem " >Kitchen Appliances</Link>
                                <Link to="/post/attributes" className="dropdown-item border postItemItem " >AC &amp; Coolers</Link>
                                <Link to="/post/attributes" className="dropdown-item border postItemItem " >Fridges &amp; Freezers</Link>
                                <Link to="/post/attributes" className="dropdown-item border postItemItem " >Washing Machines &amp; Dryers</Link>
                            </div>
                        </div>
                    </div>
                    <div className='dropright'>
                        <div className="postItemItem border" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><MotorcycleIcon className="mr-2" style={{ color: 'gray' }} /> Bikes <ArrowForwardIosIcon style={{ float: 'right', marginRight: "10px", color: 'gray' }} /> </div>
                        <div className="dropdown-menu " style={{ width: '448px', border: 'none', marginTop: '-8px', marginLeft: '0px' }} >
                            <Link to="/post/attributes" className="dropdown-item border postItemItem " >Motorcycles</Link>
                            <Link to="/post/attributes" className="dropdown-item border postItemItem " >Spare Parts</Link>
                            <Link to="/post/attributes" className="dropdown-item border postItemItem " >Bicycles</Link>
                            <Link to="/post/attributes" className="dropdown-item border postItemItem " >ATV &amp; Quads</Link>
                            <Link to="/post/attributes" className="dropdown-item border postItemItem " >Scooters</Link>
                        </div>
                    </div>
                    <div className='dropright'> 
                        <div className="postItemItem border" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><BusinessIcon className="mr-2" style={{ color: 'gray' }} /> Business, Industrial &amp; Agriculture <ArrowForwardIosIcon style={{ float: 'right', marginRight: "10px", color: 'gray' }} /> </div>
                        <div className="dropdown-menu " style={{ width: '448px', border: 'none', marginTop: '-8px', marginLeft: '0px' }} >
                            <Link to="/post/attributes" className="dropdown-item border postItemItem" >Business for Sale</Link>
                            <Link to="/post/attributes" className="dropdown-item border postItemItem" >Food &amp; Restaurants</Link>
                            <Link to="/post/attributes" className="dropdown-item border postItemItem" >Trade &amp; Industrial</Link>
                            <Link to="/post/attributes" className="dropdown-item border postItemItem" >Construction &amp; Heavy Machinery</Link>
                            <Link to="/post/attributes" className="dropdown-item border postItemItem" >Agriculture</Link>
                            <Link to="/post/attributes" className="dropdown-item border postItemItem" >Other Business &amp; Industry</Link>
                            <Link to="/post/attributes" className="dropdown-item border postItemItem" >Medical &amp; Pharma</Link>
                        </div>
                    </div>
                    <div className='dropright'>
                        <div className="postItemItem border" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><LocalTaxiIcon className="mr-2" style={{ color: 'gray' }} /> Services <ArrowForwardIosIcon style={{ float: 'right', marginRight: "10px", color: 'gray' }} /> </div>
                        <div className="dropdown-menu " style={{ width: '448px', border: 'none', marginTop: '-358px', marginLeft: '0px' }} >
                            <Link to="/post/attributes" className="dropdown-item border postItemItem" >Education &amp; Classes</Link>
                            <Link to="/post/attributes" className="dropdown-item border postItemItem" >Travel &amp; Visa</Link>
                            <Link to="/post/attributes" className="dropdown-item border postItemItem" >Car Rental</Link>
                            <Link to="/post/attributes" className="dropdown-item border postItemItem" >Drivers &amp; Taxi</Link>
                            <Link to="/post/attributes" className="dropdown-item border postItemItem" >Web Development</Link>
                            <Link to="/post/attributes" className="dropdown-item border postItemItem" >Other Services</Link>
                            <Link to="/post/attributes" className="dropdown-item border postItemItem" >Electronics &amp; Computer Repair</Link>
                            <Link to="/post/attributes" className="dropdown-item border postItemItem" >Event Services</Link>
                            <Link to="/post/attributes" className="dropdown-item border postItemItem" >Health &amp; Beauty</Link>
                            <Link to="/post/attributes" className="dropdown-item border postItemItem" >Maids &amp; Domestic Help</Link>
                            <Link to="/post/attributes" className="dropdown-item border postItemItem" >Movers &amp; Packers</Link>
                            <Link to="/post/attributes" className="dropdown-item border postItemItem" >Home &amp; Office Repair</Link>
                            <Link to="/post/attributes" className="dropdown-item border postItemItem" >Catering &amp; Restaurant</Link>
                            <Link to="/post/attributes" className="dropdown-item border postItemItem" >Farm &amp; Fresh Food</Link>
                        </div>
                    </div>
                    <div className='dropright'>
                        <div className="postItemItem border" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><WorkOutlineIcon className="mr-2" style={{ color: 'gray' }} /> Jobs <ArrowForwardIosIcon style={{ float: 'right', marginRight: "10px", color: 'gray' }} /> </div>
                        <div className="dropdown-menu " style={{ width: '448px', border: 'none', marginTop: '-408px', marginLeft: '0px' }} >
                            <Link to="/post/attributes" className="dropdown-item border postItemItem" >Online</Link>
                            <Link to="/post/attributes" className="dropdown-item border postItemItem" >Marketing</Link>
                            <Link to="/post/attributes" className="dropdown-item border postItemItem" >Advertising &amp; PR</Link>
                            <Link to="/post/attributes" className="dropdown-item border postItemItem" >Education</Link>
                            <Link to="/post/attributes" className="dropdown-item border postItemItem" >Customer Service</Link>
                            <Link to="/post/attributes" className="dropdown-item border postItemItem" >Sales</Link>
                            <Link to="/post/attributes" className="dropdown-item border postItemItem" >IT &amp; Networking</Link>
                            <Link to="/post/attributes" className="dropdown-item border postItemItem" >Hotels &amp; Tourism</Link>
                            <Link to="/post/attributes" className="dropdown-item border postItemItem" >Clerical &amp; Administration</Link>
                            <Link to="/post/attributes" className="dropdown-item border postItemItem" >Human Resources</Link>
                            <Link to="/post/attributes" className="dropdown-item border postItemItem" >Accounting &amp; Finance</Link>
                            <Link to="/post/attributes" className="dropdown-item border postItemItem" >Manufacturing</Link>
                            <Link to="/post/attributes" className="dropdown-item border postItemItem" >Medical</Link>
                            <Link to="/post/attributes" className="dropdown-item border postItemItem" >Domestic Staff</Link>
                        </div>
                    </div>
                    <div className='dropright'>
                        <div className="postItemItem border" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><PetsIcon className="mr-2" style={{ color: 'gray' }} /> Animals <ArrowForwardIosIcon style={{ float: 'right', marginRight: "10px", color: 'gray' }} /> </div>
                        <div className="dropdown-menu " style={{ width: '448px', border: 'none', marginTop: '-458px', marginLeft: '0px' }} >
                            <Link to="/post/attributes" className="dropdown-item border postItemItem" >Fish &amp; Aquariums</Link>
                            <Link to="/post/attributes" className="dropdown-item border postItemItem" >Birds</Link>
                            <Link to="/post/attributes" className="dropdown-item border postItemItem" >Hens &amp; Aseel</Link>
                            <Link to="/post/attributes" className="dropdown-item border postItemItem" >Cats</Link>
                            <Link to="/post/attributes" className="dropdown-item border postItemItem" >Dogs</Link>
                            <Link to="/post/attributes" className="dropdown-item border postItemItem" >Livestock</Link>
                            <Link to="/post/attributes" className="dropdown-item border postItemItem" >Horses</Link>
                            <Link to="/post/attributes" className="dropdown-item border postItemItem" >Pet Food &amp; Accessories</Link>
                            <Link to="/post/attributes" className="dropdown-item border postItemItem" >Other Animals</Link>
                        </div>
                    </div>
                    <div className='dropright'>
                        <div className="postItemItem border" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><EventSeatIcon className="mr-2" style={{ color: 'gray' }} /> Furniture <ArrowForwardIosIcon style={{ float: 'right', marginRight: "10px", color: 'gray' }} /> </div>
                        <div className="dropdown-menu " style={{ width: '448px', border: 'none', marginTop: '-508px', marginLeft: '0px' }} >
                            <Link to="/post/attributes" className="dropdown-item border postItemItem" >Sofa &amp; Chairs</Link>
                            <Link to="/post/attributes" className="dropdown-item border postItemItem" >Beds &amp; Wardrobes</Link>
                            <Link to="/post/attributes" className="dropdown-item border postItemItem" >Home Decoration</Link>
                            <Link to="/post/attributes" className="dropdown-item border postItemItem" >Tables &amp; Dining</Link>
                            <Link to="/post/attributes" className="dropdown-item border postItemItem" >Garden &amp; Outdoor</Link>
                            <Link to="/post/attributes" className="dropdown-item border postItemItem" >Painting &amp; Mirrors</Link>
                            <Link to="/post/attributes" className="dropdown-item border postItemItem" >Rugs &amp; Carpets</Link>
                            <Link to="/post/attributes" className="dropdown-item border postItemItem" >Curtains &amp; Blinds</Link>
                            <Link to="/post/attributes" className="dropdown-item border postItemItem" >Office Furniture</Link>
                            <Link to="/post/attributes" className="dropdown-item border postItemItem" >Other Household Items</Link>
                        </div>
                    </div>
                    <div className='dropright'>
                        <div className="postItemItem border" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><WatchLaterOutlinedIcon className="mr-2" style={{ color: 'gray' }} /> Fashion &amp; Beauty <ArrowForwardIosIcon style={{ float: 'right', marginRight: "10px", color: 'gray' }} /> </div>
                        <div className="dropdown-menu " style={{ width: '448px', border: 'none', marginTop: '-508px', marginLeft: '0px' }} >
                            <Link to="/post/attributes" className="dropdown-item border postItemItem" >Accessories</Link>
                            <Link to="/post/attributes" className="dropdown-item border postItemItem" >Clothes</Link>
                            <Link to="/post/attributes" className="dropdown-item border postItemItem" >Footwear</Link>
                            <Link to="/post/attributes" className="dropdown-item border postItemItem" >Jewellery</Link>
                            <Link to="/post/attributes" className="dropdown-item border postItemItem" >Make Up</Link>
                            <Link to="/post/attributes" className="dropdown-item border postItemItem" >Skin &amp; Hair</Link>
                            <Link to="/post/attributes" className="dropdown-item border postItemItem" >Watches</Link>
                            <Link to="/post/attributes" className="dropdown-item border postItemItem" >Wedding</Link>
                            <Link to="/post/attributes" className="dropdown-item border postItemItem" >Lawn &amp; Pret</Link>
                            <Link to="/post/attributes" className="dropdown-item border postItemItem" >Couture</Link>
                            <Link to="/post/attributes" className="dropdown-item border postItemItem" >Other Fashion</Link>
                        </div>
                    </div>
                    <div className='dropright'>
                        <div className="postItemItem border" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><SportsCricketOutlinedIcon className="mr-2" style={{ color: 'gray' }} /> Books, Sports &amp; Hobbies <ArrowForwardIosIcon style={{ float: 'right', marginRight: "10px", color: 'gray' }} /> </div>
                        <div className="dropdown-menu " style={{ width: '448px', border: 'none', marginTop: '-208px', marginLeft: '0px' }} >
                            <Link to="/post/attributes" className="dropdown-item border postItemItem" >Books &amp; Magazines</Link>
                            <Link to="/post/attributes" className="dropdown-item border postItemItem" >Musical Instruments</Link>
                            <Link to="/post/attributes" className="dropdown-item border postItemItem" >Sports Equipment</Link>
                            <Link to="/post/attributes" className="dropdown-item border postItemItem" >Gym &amp; Fitness</Link>
                            <Link to="/post/attributes" className="dropdown-item border postItemItem" >Other Hobbies</Link>
                        </div>
                    </div>
                    <div className='dropright'>
                        <div className="postItemItem mb-3 border" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><ChildFriendlyOutlinedIcon className="mr-2" style={{ color: 'gray' }} /> Kids <ArrowForwardIosIcon style={{ float: 'right', marginRight: "10px", color: 'gray' }} /> </div>
                        <div className="dropdown-menu " style={{ width: '448px', border: 'none', marginTop: '-258px', marginLeft: '0px' }} >
                            <Link to="/post/attributes" className="dropdown-item border postItemItem" >Kids Furniture</Link>
                            <Link to="/post/attributes" className="dropdown-item border postItemItem" >Toys</Link>
                            <Link to="/post/attributes" className="dropdown-item border postItemItem" >Prams &amp; Walkers</Link>
                            <Link to="/post/attributes" className="dropdown-item border postItemItem" >Swings &amp; Slides</Link>
                            <Link to="/post/attributes" className="dropdown-item border postItemItem" >Kids Bikes</Link>
                            <Link to="/post/attributes" className="dropdown-item border postItemItem" >Kids Accessories</Link>
                        </div>
                    </div>

                </div>
                <Copyright />
            </div>
        )
    }
}


export default Post;