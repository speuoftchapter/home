import React from 'react'
import speLogo from '../assets/spelogo.png'
import { BrowserRouter as Router, Link, Route } from "react-router-dom"

class Header extends React.Component {
  render() {
    return (
      <header className="w3-container w3-padding-32 w3-center" id="home">
        <h1 className="w3-jumbo">Society of Plastics Engineering</h1>
        <p>University of Toronto Chapter</p>
        <img src="http://d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/food/2014/11/28/WomansDayBR105024/mango-and-lemon-cheesecake.jpg" width="95%"/>
      </header>
    );
  }
}


export default Header