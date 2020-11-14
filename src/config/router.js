import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import DetailAds from '../pages/detailAds';
import Home from '../pages/home';
import Post from '../pages/post';
import Attributes from '../pages/attributes';


class AppRouter extends React.Component {
    render() {
     
         return ( 
            <div>
                <Router>
                    <Route exact path="/" component={Home} />
                    <Route  path="/detailAds/:id" component={DetailAds} />
                    <Route exact path="/post" component={Post} />
                    <Route exact path="/post/attributes" component={Attributes} />
                </Router>
            </div>
        )
    }
}

export default AppRouter;