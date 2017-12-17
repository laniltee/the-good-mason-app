import React from 'react';

import './loginPageStyle.css'

import trowel from './trowel.png'

const LoginPage = (props) => (
  <div className='orangeBackground' id={'loginPage'}>
    <p className='text-center'><img style={{marginTop: '46px'}} src={trowel}/></p>
    <p className='whitePara text-center' style={{marginBottom: '70px'}}>Find the perfect service for you</p>

    <form className=''>
      <div className="form-group">
        <input type="text" className="form-control form-control-lg" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Username"/>
      </div>
      <div className="form-group">
        <input type="password" className="form-control form-control-lg" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Password"/>
      </div>
    </form>
    <button type="button" onClick={() => props.changeScreen('discover')} className="btn loginBtn btn-lg btn-block">SIGN IN</button>
    <p className='whitePara text-center'>Don't have an account? <u>Sign Up</u></p>
  </div>
)

export default LoginPage
