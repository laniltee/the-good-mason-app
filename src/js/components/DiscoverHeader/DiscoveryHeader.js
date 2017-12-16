import React from 'react';

import slider from './sliders.png'

const headerStyle = {
  color: 'white',
  backgroundColor: '#f46524',
  height: "10%",
  padding: "20px",
  marginBottom: "20px"
}

const DiscoveryHeader = () => (
  <div style={headerStyle}>
    <div className={'row'}>
      <div className={'col-10'}>
        <h3>Discover</h3>
        <p>Find the perfect service</p>
      </div>
      <div className={'col-2'}>
        <img className={'float-right'} src={slider} alt={'search'}/>
      </div>
    </div>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Any service provider"/>
  </div>

)

export default DiscoveryHeader
