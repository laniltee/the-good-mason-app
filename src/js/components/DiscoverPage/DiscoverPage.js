import React from 'react';

import BottomNavigation from '../BottomNavigation/BottomNavigation'
import DiscoveryHeader from '../DiscoverHeader/DiscoveryHeader'
import DiscoverList from '../DiscoverList/DiscoverList'

const DiscoverPage = () => (
  <div>
    <DiscoveryHeader/>
    <DiscoverList/>
    <BottomNavigation/>
  </div>
)

export default DiscoverPage
