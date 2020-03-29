import React from 'react';
import './App.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Home from '../Home/Home';
import About from '../About/About';
import Services from '../Services/Services';
import FAQ from '../FAQ/FAQ';
import Contact from '../Contact/Contact';
import { Switch, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <table className="table1">
        <tbody>
          <Header />
          <div className="Navigation">
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/ABOUT'>ABOUT ME</Link></li>
              <li><Link to='/SERVICES'>SERVICES</Link></li>
              <li><Link to='/FAQ'>FAQ</Link></li>
              <li><Link to='/CONTACT'>CONTACT ME</Link></li>
            </ul>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/services">
                <Services />
              </Route>
              <Route path="/FAQ">
                <FAQ />
              </Route>
              <Route path="/Contact">
                <Contact />
              </Route>
            </Switch>
          </div>
          <Footer />
        </tbody>
      </table >
    </div >
  );
}


