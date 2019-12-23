import React from 'react'
import  { Component } from 'react'

export default class Login extends Component {
  render() {
    return (
      <div id="contact" className="form">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2 className="p-large p-heading">Log in </h2>
           
          </div> {/* end of col */}
        </div> {/* end of row */}
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            {/* Contact Form */}
            <form id="contactForm" data-toggle="validator" data-focus="false" noValidate="true">
              <div className="form-group">
                <input className="form-control-input" id="cemail" required type="email" />
                <label className="label-control" htmlFor="cname">E-mail</label>
                <div className="help-block with-errors" />
              </div>
              <div className="form-group">
                <input className="form-control-input" id="cpass" required type="password" />
                <label className="label-control" htmlFor="cemail">Password</label>
                <div className="help-block with-errors" />
              </div>
              
              <div className="form-group checkbox">
                <input id="cterms" defaultValue="Agreed-to-Terms" required type="checkbox" />I have read and agree to Leno's stated conditions in <a href="privacy-policy.html">Privacy Policy</a> and <a href="terms-conditions.html">Terms Conditions</a> 
                <div className="help-block with-errors" />
              </div>
              <div className="form-group">
                <button type="submit" className="form-control-submit-button disabled">SIGN  IN TO TRADE</button>
              </div>
              <div className="form-message">
                <div id="cmsgSubmit" className="h3 text-center hidden" />
              </div>
            </form>
            {/* end of contact form */}
          </div> {/* end of col */}
        </div> {/* end of row */}
      </div> {/* end of container */}
    </div>
    )}}