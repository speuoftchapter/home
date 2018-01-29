import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Link, Route } from "react-router-dom"
import './css/index.css'
import speLogo from './assets/spelogo.png'

import SideBar from './components/sidebar'
import Header from './components/header'
import Footer from './components/footer'
import Initiatives from './components/initiatives'
import Philosophy from './components/philosophy'
import Sponsors from './components/sponsors'
import Contact from './components/contact'

class Main extends React.Component { 
  render() {
    return (
      <div>
        <SideBar />
        <div className="w3-padding-large" id="main">
        <Route exact path="/" component={Header} />
        <Route path="/philosophy" component={Philosophy} />
        <Route path="/initiatives" component={Initiatives} />
        <Route path="/contact" component={Contact} />
        <Route path="/sponsors" component={Sponsors} />
        </div>
        <Footer />
      </div>
    )
  }
}

ReactDOM.render(
  <Router>
    <Main />
  </Router>,
  document.getElementById('root')
);
