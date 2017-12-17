import React from 'react';

import BottomNavigation from '../BottomNavigation/BottomNavigation'
import DiscoveryHeader from '../DiscoverHeader/DiscoveryHeader'
import DiscoverList from '../DiscoverList/DiscoverList'

const DiscoverPage = (props) => (
  <div>
    <DiscoveryHeader changeScreen={props.changeScreen}/>
    <DiscoverList  changeScreen={props.changeScreen}/>
    <BottomNavigation  changeScreen={props.changeScreen}/>
  </div>
)

export default DiscoverPage
