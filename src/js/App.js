import React, {Component} from 'react';
import {render} from 'react-dom';

import DiscoverPage from './components/DiscoverPage/DiscoverPage'
import FilterPage from './components/FilterPage/FilterPage'

import '../css/bootstrap.css'

import '../css/common.css'

const appStyle = {
  height: "100%",
  paddingRight: "0px",
  paddingLeft: "0px",
  overflowX: "hidden"
}

export default class App extends Component {
  render() {
    return (
      <div id={'rootApp'} className={"wrapper container"} style={appStyle}>
        <DiscoverPage/>
        {/*<FilterPage/>*/}
      </div>
    );
  };
}

render(<App/>, document.getElementById('app'));
