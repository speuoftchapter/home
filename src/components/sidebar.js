import React from 'react'
import speLogo from '../assets/spelogo.png'
import { Link } from "react-router-dom"

class SideBar extends React.Component {
  render() {
    var imgStyle = {
      width:'100%'
    }
    var linkStyle = {
      width:'25%'
    }
    var caption = {
      fontSize:'0.8em',
      fontWeight:'bold',
      textAlign:'center'
    }
    var iconStyle = {
      color:'#C4D73A'
    }

    return (
      <div>
      <nav className="w3-sidebar w3-bar-block w3-small w3-hide-small w3-center">
        <Link to='/'>
        <a href="/" className="w3-bar-item w3-button w3-padding-large w3-black">
          <img src={speLogo} style={imgStyle}/>
          <p style={caption}>UofT CHAPTER</p>
        </a>
        </Link>
        <Link to='/philosophy'>
        <a href="#philosophy" className="w3-bar-item w3-button w3-padding-large w3-hover-black">
          <i className="fa fa-user w3-xxlarge" style={iconStyle}></i>
          <p>PHILISOPHY</p>
        </a>
        </Link>
        <Link to='/initiatives'>
        <a href="#photos" className="w3-bar-item w3-button w3-padding-large w3-hover-black">
          <i className="fa fa-calendar-check-o w3-xxlarge" style={iconStyle}></i>
          <p>INITIATIVES</p>
        </a>
        </Link>
        <Link to='/contact'>
        <a href="#contact" className="w3-bar-item w3-button w3-padding-large w3-hover-black">
          <i className="fa fa-envelope w3-xxlarge" style={iconStyle}></i>
          <p>CONTACT</p>
        </a>
        </Link>
        <Link to='/sponsors'>
        <a href="#sponsors" className="w3-bar-item w3-button w3-padding-large w3-hover-black">
          <i className="fa fa-users w3-xxlarge" style={iconStyle}></i>
          <p>SPONSORS</p>
        </a>
        </Link>
      </nav>

      <div className="w3-top w3-hide-large w3-hide-medium" id="myNavbar">
        <div className="w3-bar w3-black w3-opacity w3-hover-opacity-off w3-center w3-small">
          <Link to='/'>
          <a href="#" className="w3-bar-item w3-button" style={linkStyle}>HOME</a>
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
        </div>
      </div>
      </div>
    );
  }
}


export default SideBar