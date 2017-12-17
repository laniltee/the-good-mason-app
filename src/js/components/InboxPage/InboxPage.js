import React from 'react';

import InboxListItem from '../InboxListItem/InboxListItem'
import BottomNavigation from '../BottomNavigation/BottomNavigation'

import search from './search.png'

const headerStyle = {
  color: 'white',
  backgroundColor: '#f46524',
  height: "10%",
  padding: "25px",
  marginBottom: "20px"
}

const InboxPage = (props) => (
  <div>
    <div style={headerStyle}>
      <div className={'row'}>
        <div className={'col-10'}>
          <h3>Inbox</h3>
          <p>You have unread messages</p>
        </div>
        <div className={'col-2'}>
          <img src={search}/>
        </div>
      </div>
    </div>
    <InboxListItem/>
    <InboxListItem/>
    <InboxListItem/>
    <InboxListItem/>
    <InboxListItem/>
    <BottomNavigation changeScreen={props.changeScreen}/>
  </div>
)

export default InboxPage
