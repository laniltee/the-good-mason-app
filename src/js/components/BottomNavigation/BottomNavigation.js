import React from 'react';

import search from './search.png'
import nearby from './placeholder.png'
import inbox from './paper-plane.png'
import bookmark from './bookmark.png'

const bottomNavigationStyle = {
  backgroundColor: 'white',
  color: '#868e96',
  padding: '8px'
}

const BottomNavigation = (props) => (
  <div className="row text-center fixed-bottom" style={bottomNavigationStyle}>
    <div className="col" onClick={() => props.changeScreen('discover')}>
      <img src={search} alt={'search'}/>
      <p>Discover</p>
    </div>
    <div className="col">
      <img src={nearby} alt={'search'}/>
      <p>Nearby</p>
    </div>
    <div className="col" onClick={() => props.changeScreen('inbox')}>
      <img src={inbox} alt={'search'}/>
      <p>Inbox</p>
    </div>
    <div className="col">
      <img src={bookmark} alt={'search'}/>
      <p>Bookmarks</p>
    </div>
  </div>
)

export default BottomNavigation
