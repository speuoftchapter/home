import React from 'react'
import speLogo from '../assets/spelogo.png'
import { Link } from "react-router-dom"
import SideBarButton from './sidebarbutton'

class SideBar extends React.Component {
  constructor() {
    super();
    this.state = {
      activeIndex: 0
    };
  }

  handleClick = (index) => this.setState({ activeIndex: index })

  render() {

    var linkStyle = {
      width:'25%'
    }

    return (
      <div>
      <nav className="w3-sidebar w3-bar-block w3-small w3-hide-small w3-center">
        <SideBarButton link='home' index={0} isActive={this.state.activeIndex===0} 
        logo={true} caption="UofT CHAPTER" onClick={ this.handleClick }/>
        <SideBarButton link='vision' index={1} isActive={this.state.activeIndex===1} 
        logo={false} icon="fa fa-user w3-xxlarge" caption="VISION" 
        onClick={ this.handleClick }/>
        <SideBarButton link='initiatives' index={2} isActive={this.state.activeIndex===2} 
        logo={false} icon="fa fa-calendar-check-o w3-xxlarge" caption="INITIATIVES" 
        onClick={ this.handleClick }/>
        <SideBarButton link='sponsors' index={3} isActive={this.state.activeIndex===3} 
        logo={false} icon="fa fa-users w3-xxlarge" caption="SPONSORS" 
        onClick={ this.handleClick }/>
        <SideBarButton link='contact' index={4} isActive={this.state.activeIndex===4} 
        logo={false} icon="fa fa-envelope w3-xxlarge" caption="CONTACT" 
        onClick={ this.handleClick }/>
        <SideBarButton link='team' index={5} isActive={this.state.activeIndex===5} 
        logo={false} icon="fa fa-address-card w3-xxlarge" caption="TEAM" 
        onClick={ this.handleClick }/>
      </nav>

      <div className="w3-top w3-hide-large w3-hide-medium" id="myNavbar">
        <div className="w3-bar w3-black w3-opacity w3-hover-opacity-off w3-center w3-small">
          <Link to='/home'>
          <a href="#home" className="w3-bar-item w3-button" style={linkStyle}>HOME</a>
          </Link>
          <Link to='/philosophy'>
          <a href="#philosophy" className="w3-bar-item w3-button" style={linkStyle}>PHILISOPHY</a>
          </Link>
          <Link to='/initiatives'>
          <a href="#initiatives" className="w3-bar-item w3-button" style={linkStyle}>INITIATIVES</a>
          </Link>
          <Link to='/contact'>
          <a href="#contact" className="w3-bar-item w3-button" style={linkStyle}>CONTACT</a>
          </Link>
          <Link to='/sponsors'>
          <a href="#sponsors" className="w3-bar-item w3-button" style={linkStyle}>SPONSORS</a>
          </Link>
          <Link to='/team'>
          <a href="#team" className="w3-bar-item w3-button w3-padding-large" style={linkStyle}>TEAM</a>
          </Link>
        </div>
      </div>
      </div>
    );
  }
}


export default SideBar