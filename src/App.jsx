import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import AppRouter from './config/router';






class App extends React.Component {
  render() {
    return (
      < div >
        <AppRouter />
      </div >
    )
  }
}


export default (App);
