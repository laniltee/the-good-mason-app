import React from 'react';

import DiscoverListItem from '../DiscoverListItem/DiscoverListItem'

const listStyle = {
  paddingLeft: '20px',
  paddingRight: '20px'
}

const DiscoverList = (props) => (
  <div style={listStyle}>
    <DiscoverListItem changeScreen={props.changeScreen} name={'Nimal Perera'} title={'Mason'} location={'Rajagiriya'}
                      start={750} distance={2.3} pic={0}/>
    <DiscoverListItem changeScreen={props.changeScreen} name={'Sarath Herath'} title={'Electrician'}
                      location={'Maharagama'} start={800} distance={12} pic={1}/>
    <DiscoverListItem changeScreen={props.changeScreen} name={'Hemantha Wijepala'} title={'Plumber'} location={'Kottawa'}
                      start={300} distance={8.5} pic={2}/>
    <DiscoverListItem changeScreen={props.changeScreen} name={'Jayantha Maheepala'} title={'Mason'}
                      location={'Kalalgoda'} start={700} distance={13} pic={3}/>
  </div>
)

export default DiscoverList
