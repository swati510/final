import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar'
import Orders from './components/orders'
import Markets from './components/markets'
import Trade from './components/trade'
import Login from './components/login'
class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
         	<Navbar></Navbar>
				<div id="colorlib-main">
					<Orders></Orders>
					<Markets></Markets>
					<Trade></Trade>
          <Login></Login>
          	</div>
      	</div>
      </div>
    );
  }
}

export default App;