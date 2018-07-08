import React, { Component } from 'react';

import { Route, BrowserRouter } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import Index from './Index';
import Cjenovnici from './Cjenovnici';
import Aktuelnosti from './Aktuelnosti';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />


          <div>
            <Route exact path='/' component={Index} />
            <Route path='/aktuelnosti' component={Aktuelnosti} />
            <Route path='/cjenovnici' component={Cjenovnici} />



          </div>
          <Footer />

        </div>
      </BrowserRouter>

    )
  }
}

export default App;
