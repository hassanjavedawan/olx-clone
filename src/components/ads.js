import React from 'react';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
// import {  Link } from "react-router-dom";
 


// class MostAds extends React.Component {
//     render() {
//         return (
//             <div>

               
//                     <div className="card"  >
//                         <p className="featured " > < small className="text-muted" > {this.props.featured} </small></p >
//                         <p className="hart " > < small className="text-muted" > < FavoriteBorderOutlinedIcon /> </small></p >
//                         <img src={this.props.img} className="card-img " alt="..." />
//                         <div className="card-body" >
//                             < p className="card-text " > Rs: {this.props.price} </p> < p className="card-text" > < small className="text-muted" > {this.props.categorie} </small></p >
//                             < p className="card-text  post-date" > < small className="text-muted" > {this.props.date} </small></p >
//                         </div>
//                     </div>

//             </div>
//         )
//     }
// }


// class SellingAds extends React.Component {
//     render() {
//         return (
//             <div >

//                 <Link  >
//                     <div className="card selling-card" >
//                         <div className="card-body" >
//                             <h6> < strong > Want do you see staff hare ? </strong>  </h6>
//                             <p> Make some extra cash by selling things in your community.Go on it 's quiks and easy</p>
//                             <button className="start-selling-btn" > Start Selling </button>
//                         </div>
//                     </div>
//                 </Link>

//             </div>
//         )
//     }
// }

class Ads extends React.Component {
    render() {
        return (
            <div>
        
                    <div className="card" >
                        <p className="featured " > < small className="text-muted" > {this.props.featured} </small></p >
                        <p className="hart " > < small className="text-muted" > < FavoriteBorderOutlinedIcon /> </small></p >
                        <img src={this.props.img} className="card-img " alt="..." />
                        <div className="card-body" >
                            <h5 className="card-text " > Rs: {this.props.price} </h5>
                            <p className="card-text " > {this.props.condition} </p>
                            <p className="card-text" > < small className="text-muted" > {this.props.categorie} </small></p >
                            <p className="card-text  location" > <small className="text-muted" > {this.props.location} </small></p >
                            <p className="card-text post-date" > <small className="text-muted" > {this.props.date} </small></p >
                        </div>
                    </div>
             

            </div>
        )
    }
}

export { Ads }