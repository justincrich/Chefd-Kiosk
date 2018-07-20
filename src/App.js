//dependencies
import React, { Component } from 'react';
import Router from './router';
import {Provider} from 'react-redux';
import store from './redux/store/store'

//styling

//components

class App extends Component {


  // createCordialScript(){
    
  //   const environment = process.env.NODE_ENV==='production'?'chefd':'chefd-sandbox';
  //   console.log(process.env.NODE_ENV,environment)
  //   var t = document.createElement('script');
  //   t.setAttribute("data-cordial-track-key",environment);
  //   t.setAttribute("data-cordial-contact-key",environment);
  //   t.setAttribute("data-cordial-url", "track.cordial.io");
  //   t.setAttribute("data-auto-track", false);
  //   t.src = '//track.cordial.io/track.js';
  //   t.async = true;
  //   return t;
  // }
  componentWillMount(){
    var t = document.createElement('script');
          t.setAttribute("data-cordial-track-key", "chefd-sandbox");
          t.setAttribute("data-cordial-url", "track.cordial.io");
          t.setAttribute("data-auto-track", false);
          t.src = 'https://track.cordial.io/track.js';
          t.async = true;
          //document.body.appendChild(t);
          document.body.insertBefore(t, document.body.firstChild);
  }

  render() {
    return (
      <Provider store={store}>
        <Router/>
      </Provider>
    );
  }
}

export default App;
