import React from 'react';

import baas from '../DiscoverListItem/profile.jpg'

const rowStyle = {
  paddingLeft: "25px",
  paddingRight: "25px",
  marginBottom: "20px"
}

const profilePicCol = {
  paddingRight: "0px"
};


const InboxListItem = () => (
  <div style={rowStyle}>
    <div className='row'>
      <div className='col-2' style={profilePicCol}>
        <img src={baas} className={'img-fluid rounded'}/>
      </div>
      <div className='col-6'>
        <p className='zeroBottomPara'><b>Nimal Perera</b></p>
        <p>Thank you sir ! Please don't touch the wall</p>
      </div>
      <div className='col-4'>
        <p className='greyPara zeroBottomPara  float-right'>3 min ago</p>
        <span className="badge badge-info float-right">New</span>
      </div>
    </div>
    <hr/>
  </div>
)

export default InboxListItem
