import React from 'react';

import '../ReviewPage/reviewStyle.css'

import avatar from './avatar.jpg'
import star from './star.png'
import house from '../DiscoverListItem/house.jpg'
import wall from './wall.jpg'
import wall3 from './wall3.jpg'
import wall2 from './wall2.jpg'

const imageColStyle = {
  paddingLeft: "0px",
};
const imageRowStyle = {
  marginLeft: "0px"
};

const ReviewListItem = () => (
  <div>
    <div className='row'>
      <div className='clear-fix'></div>
      <div className='col-7'>
        <p className='reviewer zeroBottomPara'>Anura Dissanayake</p>
        <p className='greyPara'>Yesterday</p>
      </div>
      <div className='col-5'>
        <img className={'img-fluid'} src={star}/>
        <img className={'img-fluid'} src={star}/>
        <img className={'img-fluid'} src={star}/>
        <img className={'img-fluid'} src={star}/>
        <img className={'img-fluid'} src={star}/>
        <p className='greyPara'>5 of 5</p>
      </div>
    </div>
    <div className='row'>
      <div className='col-12'>
        <p  className='greyPara'>I was looking for a good mason in Rajagiriya for two months. Finally I found Nimal ! He is very perfect is
          work and knows
          how do any kind of masonory work. My task was to build a wall around my land and he finished it very well.
        </p>
      </div>
    </div>
    <div className={'row'} style={imageRowStyle}>
      <div className={'col-4'} style={imageColStyle}>
        <img className="rounded img-fluid" src={wall3}/>
      </div>
      <div className={'col-4'} style={imageColStyle}>
        <img className="rounded img-fluid" src={wall}/>
      </div>
      <div className={'col-4'} style={imageColStyle}>
        <img className="rounded img-fluid" src={wall2}/>
      </div>

    </div>
    <hr/>
  </div>
)

export default ReviewListItem
