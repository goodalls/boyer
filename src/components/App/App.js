import React from 'react';

import Navigation from "../Navigation/Navigation";


import './App.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Home from '../Home/Home';


function App() {
  return (
    <div className="App">
      <table className="table1">
        <tbody>
          <Header />
          <Navigation />
          <Home />
          <Footer />

        </tbody>
      </table>


    </div>
  );
}

export default App;
