import React from 'react';

import close from './close.png';
import star from '../DiscoverListItem/star.png'

const topRow = {
  padding: "20px",
  fontWeight: "bold",
  marginBottom: "25px"
}

const contentRow = {
  paddingLeft: "70px",
  paddingRight: "60px"
}

const FilterPage = (props) => (
  <div>
    <div className='row' style={topRow}>
      <div className='col-2'>
        Reset
      </div>
      <div className='col-8 text-center'>
        Filter
      </div>
      <div className='col-2'>
        <span className='float-right'>
          <img onClick={props.changeScreen} src={close}/>
        </span>
      </div>
    </div>
    <div className='row' style={contentRow}>
      <h3>Services</h3>
      <div id={'filterButtonSet'}>
        <button type="button" className="btn btn-outline-warning outlinePrimaryButton">Masons</button>
        <button type="button" className="btn btn-outline-warning outlinePrimaryButton">Electricians</button>
        <button type="button" className="btn primaryButton">Painters</button>
        <button type="button" className="btn btn-outline-warning outlinePrimaryButton">Plumbers</button>
        <button type="button" className="btn primaryButton">Cleaners</button>
        <button type="button" className="btn btn-outline-warning outlinePrimaryButton">Gardeners</button>
        <button type="button" className="btn btn-outline-warning outlinePrimaryButton">Tile Work</button>
        <button type="button" className="btn btn-outline-warning outlinePrimaryButton">Tree Cutting</button>
      </div>
      <p className='text-center'>more services</p>
    </div>
    <div className='row' style={contentRow}>
      <h3>Rating</h3>
      <div className='col-12 zeroLeftPadding'>
        <h5>
          <img className={'img-fluid'} src={star}/>
          <img className={'img-fluid'} src={star}/>
          <img className={'img-fluid'} src={star}/>
          <img className={'img-fluid'} src={star}/>
          <img className={'img-fluid'} src={star}/>
        </h5>
        <p></p>
      </div>
    </div>
    <div className='row' style={contentRow}>
      <h3>Distance</h3>
      <div className='col-12 zeroLeftPadding text-center'>
        <div className="btn-group btn-group-md " role="group" aria-label="Basic example">
          <button type="button" className="btn btn-secondary outlinePrimaryButton"> Nearby </button>
          <button type="button" className="btn btn-secondary outlinePrimaryButton"> In 20km</button>
          <button type="button" className="btn btn-secondary outlinePrimaryButton">Anywhere</button>
        </div>
        <p></p>
      </div>
    </div>
    <div className='row' style={contentRow}>
      <h3>Cost</h3>
      <div className='col-12 zeroLeftPadding text-center'>
        <div className="btn-group btn-group-md " role="group" aria-label="Basic example">
          <button type="button" className="btn btn-secondary outlinePrimaryButton"> 1K </button>
          <button type="button" className="btn btn-secondary outlinePrimaryButton"> 10K</button>
          <button type="button" className="btn btn-secondary outlinePrimaryButton">100K</button>
        </div>
        <p></p>
      </div>
    </div>
    <div className='row' style={contentRow}>
      <button onClick={props.changeScreen} type="button" className="btn btn-lg btn-block primaryButton">See Results</button>
    </div>
  </div>
)

export default FilterPage
