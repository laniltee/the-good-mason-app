import React from 'react';

import profile from './profile.jpg'
import house from './house.jpg'
import star from './star.png'
import profile1 from './prop1.jpg'
import profile2 from './prop2.jpg'
import profile3 from './prop3.jpg'

import wall from '../ReviewListItem/wall.jpg'
import wall1 from '../ReviewListItem/wall2.jpg'
import wall2 from '../ReviewListItem/wall3.jpg'

import wall3 from './wall4.jpg'
import wall4 from './wall4.jpg'
import wall5 from './wall5.jpg'

import wall6 from './wall6.jpg'
import wall7 from './wall7.jpg'
import wall8 from './wall8.jpg'

const wallArray = [wall, wall2, wall1, wall3, wall4, wall5, wall6, wall7, wall8]
const profilePicArray = [profile, profile1, profile2, profile3]

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


const DiscoverListItem = (props) => (
  <div style={listItemStyle}>
    <div className={'row'} style={headingRowStyle} onClick={() => props.changeScreen('profile')}>
      <div className={'col-2'} style={profilePicCol}>
        <img className={'img-fluid rounded'} src={profilePicArray[props.pic]}/>
      </div>
      <div className={'col-8'}>
        <h5 className='zeroBottomPara'>{props.name}</h5>
        <p className='greyPara'>{props.title} at {props.location}</p>
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
        <p>{props.start} LKR</p>
      </div>
      <div className={'col-3'}>
        <p className='zeroBottomPara greyPara'>Distance</p>
        <p>{props.distance}km</p>
      </div>
    </div>

    <div className={'row'} style={imageRowStyle}>
      <div className={'col-4'} style={imageColStyle}>
        <img className="rounded img-fluid" src={wallArray[Math.floor(Math.random() * wallArray.length)]}/>
      </div>
      <div className={'col-4'} style={imageColStyle}>
        <img className="rounded img-fluid" src={wallArray[Math.floor(Math.random() * wallArray.length)]}/>
      </div>
      <div className={'col-4'} style={imageColStyle}>
        <img className="rounded img-fluid" src={wallArray[Math.floor(Math.random() * wallArray.length)]}/>
      </div>

    </div>

    <hr/>
  </div>

)

export default DiscoverListItem
