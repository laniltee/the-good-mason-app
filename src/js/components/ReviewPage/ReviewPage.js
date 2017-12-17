import React from 'react';

import ReviewListItem from '../ReviewListItem/ReviewListItem'


import './reviewStyle.css'

import left from './left.png'

const ReviewPage = (props) => (
  <div id={'reviewWrapper'}>
    <div className='row'>
      <div className='col'>
        <img src={left} onClick={() => props.changeScreen('profile')}/>
      </div>
    </div>
    <h1 id={'reviewHeader'}>Reviews</h1>
    <ReviewListItem/>
    <ReviewListItem/>
    <ReviewListItem/>
  </div>
)

export default ReviewPage
