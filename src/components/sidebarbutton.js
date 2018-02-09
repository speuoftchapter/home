import React from 'react'
import speLogo from '../assets/spelogo.png'
import { Link } from "react-router-dom"

class SideBarButton extends React.Component {
  handleClick = () => this.props.onClick(this.props.index)
  render() {

  	var imgStyle = {
      width:'100%'
    }
    var caption = {
      fontSize:'0.8em',
      fontWeight:'bold',
      textAlign:'center'
    }
    var iconStyle = {
      color:'#C4D73A'
    }

  	var active = "w3-bar-item w3-button w3-padding w3-center w3-black"
  	var not_active = "w3-bar-item w3-button w3-padding w3-hover-black"

    return (
        <Link to={'/' + this.props.link}>
        <a href={'#' + this.props.link} className={this.props.isActive ? active : not_active}
           onClick={ this.handleClick }>
        { 
        	this.props.logo ? 
        	<div>
        	<img src={speLogo} style={imgStyle}/>
        	<p style={caption}>{this.props.caption}</p>
        	</div> 
        	: 
        	<div>
        	<i className={this.props.icon} style={iconStyle}></i>
          <p>{this.props.caption}</p>
          </div>
        }
        </a>
        </Link>
    );
  }
}


export default SideBarButton