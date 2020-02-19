import React from 'react';
import { Button } from 'antd';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Tab from './components/tab';
import Purchase from './components/Purchase';
import AddP from './components/AddP';
import Inventory from './components/Inventory';
import AddI from './components/AddI';



function App() {
  return (

    <React.Fragment >
          <Router>
    <div className="App">

  </div>
  
  <Navbar />
  
  <Switch>
         
          <Route path="/inventory" component={Inventory} />
          <Route path="/purchase" component={Purchase} />
          <Route path="/addpurchase" component={AddP} />
          <Route path="/addinventory" component={AddI} />
          

         
        </Switch>
  </Router>
  </React.Fragment >
  );
}

export default App;
