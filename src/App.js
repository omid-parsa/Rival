import React from 'react';
import { Router, Switch } from 'react-router-dom';
import {ReactComponent as Logo} from './assets/ryval.svg';

import NavBar from './components/navbar/navbar.component';

import './App.css';


import HomePage from './pages/homepage/homepage.component';

function App() {
  const navLinks = [
    {
      text: 'New Releases',
      path: '/'
    },
    {
      text: 'Men',
      path: '/'
    },
    {
      text: 'Women',
      path: '/'
    },
    {
      text: 'Kids',
      path: '/'
    },
    {
      text: 'Sale',
      path: '/'
    },
    {
      text: 'Collections',
      path: '/'
    }
  ]
  return (
    <div className="App">
      <NavBar navLinks= {navLinks}
      logo = {Logo} />
      <Switch>

      </Switch>
      {/* <Header /> */}
      <HomePage />
      <HomePage />
      <HomePage />
      <HomePage />
    </div>
  );
}

export default App;
