import React, { Component } from 'react';

import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import Header from './Header';
import Footer from './Footer';
import Index from './Index';
import Cjenovnici from './Cjenovnici';
import Aktuelnosti from './Aktuelnosti';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route render={({ location }) => (

          <div>
            <Header />


          
              <TransitionGroup>
                <CSSTransition
                  timeout={300}
                  classNames="fade"
                  key={location.key}
                >
                  <Switch location={location}>
                    <Route exact path='/' component={Index} />
                    <Route path='/aktuelnosti' component={Aktuelnosti} />
                    <Route path='/cjenovnici' component={Cjenovnici} />
                    <Route render={() => <div style={{ position: 'absolute', top: '3em' }}>Not Found</div>} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>

            <Footer />

          </div>

        )} />

      </BrowserRouter>

    )
  }
}

export default App;
