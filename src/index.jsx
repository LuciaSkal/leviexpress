import React from 'react';
import { render } from 'react-dom';
import Footer from './Footer';
import Header from './Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import './style.css';
import Home from './pages/Home'
import Reservation from './pages/Reservation'

const App = () => {

  return (
    <Router>
     <Header/>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/reservation" exact>
           <Reservation />
        </Route>
      </Switch>
    <Footer/>
  </Router>
  )
}

render(<App />, document.querySelector('#app'));
