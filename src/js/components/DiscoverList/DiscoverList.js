import React from 'react';

import DiscoverListItem from '../DiscoverListItem/DiscoverListItem'

const listStyle = {
  paddingLeft: '20px',
  paddingRight: '20px'
}

const DiscoverList = () => (
  <div style={listStyle}>
    <DiscoverListItem/>
    <DiscoverListItem/>
    <DiscoverListItem/>
    <DiscoverListItem/>
  </div>
)

export default DiscoverList
