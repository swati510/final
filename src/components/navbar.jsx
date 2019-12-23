import React from 'react'
import  { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (<div>
        
        <nav className="navbar navbar-expand-md navbar-dark navbar-custom fixed-top">
    {/* Text Logo - Use this if you don't have a graphic logo */}
    {/* <a class="navbar-brand logo-text page-scroll" href="index.html">Leno</a> */}
    {/* Image Logo */}
   
    {/* Mobile Menu Toggle Button */}
    <a className="navbar-brand logo-image" href="#contact">Login</a> 
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-awesome fas fa-bars" />
      <span className="navbar-toggler-awesome fas fa-times" />
    </button>
    {/* end of mobile menu toggle button */}
    <div className="collapse navbar-collapse" id="navbarsExampleDefault">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a className="nav-link page-scroll" href="#header">Orders <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link page-scroll" href="#features">Markets</a>
        </li>
        <li className="nav-item">
          <a className="nav-link page-scroll" href="#preview">Trade</a>
        </li>
          
       
        {/* end of dropdown menu */}
       
      </ul>
     
    </div>
  </nav></div>
)
}
}