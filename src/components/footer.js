import { Instagram, Twitter, YouTube } from '@material-ui/icons';
import React from 'react';
import AppleBtn from '../images/appleBtn.JPG';
import PlaystoreBtn from '../images/playstoreBtn.JPG';



class Footer extends React.Component { 
    render() {
        return (
            <div>
                <div className="container-fluid footer  bg-light">
                    <div className="row ml-0">
                        <div className="col">
                            <ul style={{ listStyle: 'none', marginLeft: '0px' }}>
                                <li><strong>POPULAR CATEGORIES</strong></li>
                                <li className="mt-2">Cars</li>
                                <li>Flats for rent</li>
                                <li>Jobs</li>
                                <li>Mobile Phones</li>
                            </ul>
                        </div>
                        <div className="col">
                            <ul style={{ listStyle: 'none', marginLeft: '0px' }}>
                                <li><strong>TRENDING SEARCHES</strong></li>
                                <li className="mt-2">Bikes</li>
                                <li>Watches</li>
                                <li>Books</li>
                                <li>Dogs</li>
                            </ul>
                        </div>
                        <div className="col">
                            <ul style={{ listStyle: 'none', marginLeft: '0px' }}>
                                <li><strong>ABOUT US</strong></li>
                                <li className="mt-2">About OLX Group</li>
                                <li>OLX Blog</li>
                                <li>Contact Us</li>
                                <li>OLX for Businesses</li>
                            </ul>
                        </div>
                        <div className="col">
                            <ul style={{ listStyle: 'none', marginLeft: '0px' }}>
                                <li><strong>OLX</strong></li>
                                <li className="mt-2">Help</li>
                                <li>Sitemap</li>
                                <li>Legal &amp; Privacy information</li>
                            </ul>
                        </div>
                        <div className="col">
                            <ul style={{ listStyle: 'none', marginLeft: '0px' }}>
                                <li><strong>FOLLOW US</strong></li>
                                <li>
                                </li><li className="footerLink"> <button className="footerBtn" >f</button></li>
                                <li className="footerLink"> <button className="footerBtn" ><Twitter /></button></li>
                                <li className="footerLink"> <button className="footerBtn" ><YouTube /></button></li>
                                <li className="footerLink"> <button className="footerBtn" ><Instagram /></button></li>
                                <li className="mt-5 "  ><img className="imgBtn" src={AppleBtn} alt="applebtn" />
                                    <img className="ml-2 imgBtn" src={PlaystoreBtn} alt="applebtn" /></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class Copyright extends React.Component {
    render() {
        return (
            <div>
                <div className="container-fluid copyright_area">
                    <p className="mt-2">Other Countries India - South Africa - Indonesia</p>
                    <p className="mt-2">Free Classifieds in Pakistan. © 2006-2020 OLX</p>
                </div>
            </div>
        )
    }
}

export {
    Footer,
    Copyright
}