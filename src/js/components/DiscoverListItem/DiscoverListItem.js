import React from 'react';

import profile from './profile.jpg'
import house from './house.jpg'
import star from './star.png'

const listItemStyle = {};
const imageColStyle = {
  paddingLeft: "0px",
};
const imageRowStyle = {
  marginLeft: "0px"
};
const headingRowStyle = {
  marginRight: "0px"
};
const profilePicCol = {
  paddingRight: "0px"
};



const DiscoverListItem = () => (
  <div style={listItemStyle}>
    <div className={'row'} style={headingRowStyle}>
      <div className={'col-2'} style={profilePicCol}>
        <img className={'img-fluid rounded'} src={profile}/>
      </div>
      <div className={'col-8'}>
        <h5 className='zeroBottomPara'>John Doe</h5>
        <p className='greyPara'>Mason at Rajagiriya</p>
      </div>
      <div className={'col-2'} style={imageColStyle}>
        <button type="button" className="btn btn-sm btn-outline-success">At Work</button>
      </div>
    </div>

    <div className={'row'}>
      <div className={'col-5'}>
        <p className='zeroBottomPara greyPara'>Rating</p>
        <p>
          <img className={'img-fluid'} src={star}/>
          <img className={'img-fluid'} src={star}/>
          <img className={'img-fluid'} src={star}/>
          <img className={'img-fluid'} src={star}/>
          <img className={'img-fluid'} src={star}/>
        </p>
      </div>
      <div className={'col-4'}>
        <p className='zeroBottomPara greyPara'>Start from</p>
        <p>750 LKR</p>
      </div>
      <div className={'col-3'}>
        <p className='zeroBottomPara greyPara'>Distance</p>
        <p>2.3km</p>
      </div>
    </div>

    <div className={'row'} style={imageRowStyle}>
      <div className={'col-4'} style={imageColStyle}>
        <img className="rounded img-fluid" src={house}/>
      </div>
      <div className={'col-4'} style={imageColStyle}>
        <img className="rounded img-fluid" src={house}/>
      </div>
      <div className={'col-4'} style={imageColStyle}>
        <img className="rounded img-fluid" src={house}/>
      </div>

    </div>

    <hr/>
  </div>

)

export default DiscoverListItem
