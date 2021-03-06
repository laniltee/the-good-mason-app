import React, {Component} from 'react';
import {render} from 'react-dom';

import DiscoverPage from './components/DiscoverPage/DiscoverPage'
import FilterPage from './components/FilterPage/FilterPage'
import LoginPage from './components/LoginPage/LoginPage'
import ProfilePage from './components/ProfilePage/ProfilePage'
import ReviewPage from './components/ReviewPage/ReviewPage'
import InboxPage from './components/InboxPage/InboxPage'


import '../css/bootstrap.css'

import '../css/common.css'

const appStyle = {
  height: "100%",
  paddingRight: "0px",
  paddingLeft: "0px",
  overflowX: "hidden"
}

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      screen: 'login'
    }

    this.switchScreen = this.switchScreen.bind(this)
  }

  switchScreen(key) {
    console.log('switchScreen: ' + key)
    this.setState({screen: key})
  }

  render() {
    switch (this.state.screen) {
      case 'discover':
        return (
          <div id={'rootApp'} className={"wrapper container"} style={appStyle}>
            <DiscoverPage changeScreen={this.switchScreen}/>
          </div>
        )
      case 'filter':
        return (
          <div id={'rootApp'} className={"wrapper container"} style={appStyle}>
            <FilterPage changeScreen={this.switchScreen}/>
          </div>
        )
      case 'login':
        return (
          <div id={'rootApp'} className={"wrapper container"} style={appStyle}>
            <LoginPage changeScreen={this.switchScreen}/>
          </div>
        )
      case 'profile':
        return (
          <div id={'rootApp'} className={"wrapper container"} style={appStyle}>
            <ProfilePage changeScreen={this.switchScreen}/>
          </div>
        )
      case 'review':
        return (
          <div id={'rootApp'} className={"wrapper container"} style={appStyle}>
            <ReviewPage changeScreen={this.switchScreen}/>
          </div>
        )
      case 'inbox':
        return (
          <div id={'rootApp'} className={"wrapper container"} style={appStyle}>
            <InboxPage changeScreen={this.switchScreen}/>
          </div>
        )
      default:
        return (
          <div id={'rootApp'} className={"wrapper container"} style={appStyle}>
            <DiscoverPage changeScreen={this.switchScreen}/>
          </div>
        )
    }
  };
}

render(<App/>, document.getElementById('app'));
