import React from 'react';

import BottomNavigation from '../BottomNavigation/BottomNavigation'

import star from '../DiscoverListItem/star.png'
import profile from '../DiscoverListItem/profile.jpg'
import review from './pen.png'
import chat from './chat.png'
import call from './call.png'

import './profilePageStyle.css'

const headerStyle = {
  color: 'white',
  backgroundColor: '#f46524',
  height: "59px",
  padding: "20px",
  marginBottom: "20px"
}

const activeColStyle = {
  borderBottom: "3px solid #f46524",
  paddingBottom: "15px",
  fontWeight: "bold"
}

const profilePicCol = {}

class ProfilePage extends React.Component {

  constructor(props){
    super(props)
  }

  changeScreen(screen){
    this.props.changeScreen(screen)
  }

  render() {
    return (
      <div>
        <div style={headerStyle}>

        </div>
        <div className='row'>
          <div className='col-4'></div>
          <div className={'col-4 text-center'} style={profilePicCol}>
            <img className={'img-fluid rounded'} src={profile}/>
          </div>
          <div className='col-4'></div>
        </div>
        <h3 className='text-center zeroBottomPara'>Nimal Perera</h3>
        <p className='greyPara text-center'>Mason at Rajagiriya</p>
        <p className='text-center zeroBottomPara'>
          <img className={'img-fluid'} src={star}/>
          <img className={'img-fluid'} src={star}/>
          <img className={'img-fluid'} src={star}/>
          <img className={'img-fluid'} src={star}/>
          <img className={'img-fluid'} src={star}/>
        </p>
        <p className='text-center'>(12 reviews)</p>

        <div className='row' id={'actionRow'}>
          <div className='col'>
            <img src={call}/>
            <p className='greyPara'>Call</p>
          </div>
          <div className='col  text-center'>
            <img src={chat}/>
            <p className='greyPara'>Chat</p>
          </div>
          <div className='col text-center'>
            <img src={review}/>
            <p className='greyPara'>Review</p>
          </div>
          <p></p>
        </div>

        <div id={'tabBar'} className='row twoWayPadding zeroMargin'>
          <div className='col text-center' style={activeColStyle}>
            About
          </div>
          <div className='col text-center greyPara'>
            Gallery
          </div>
          <div className='col text-center greyPara' onClick={() => this.changeScreen('review')}>
            Reviews
          </div>
        </div>

        <div style={{padding: '30px'}}>
          <div className='row'>
            <div className='col'>
              <p className='zeroBottomPara'>Business name</p>
              <p className='greyPara'>Redbox Construction</p>
            </div>
            <div className='col'>
              <p className='zeroBottomPara'>Start from</p>
              <p className='greyPara'>750 LKR per sqft</p>
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <p className='zeroBottomPara'>Address</p>
              <p className='greyPara zeroBottomPara'>564/56 Polduwa Road Rajagiriya</p>
              <p id={'directionsLink'}>Get directions </p>
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <p className='zeroBottomPara'>Working Time</p>
              <table className='greyPara'>
                <tbody>
                <tr>
                  <td>Monday - Friday</td>
                  <td>9.00 AM - 5.30 PM</td>
                </tr>
                <tr>
                  <td>Saturday</td>
                  <td>9.00 AM - 1.30 PM</td>
                </tr>
                <tr>
                  <td>Sunday</td>
                  <td>9.00 AM - 1.30 PM</td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <BottomNavigation changeScreen={this.props.changeScreen}/>
      </div>
    )
  }
}


export default ProfilePage
