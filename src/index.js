import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Link, Route } from "react-router-dom"
import './css/index.css'
import speLogo from './assets/spelogo.png'

import SideBar from './components/sidebar'
import Header from './components/header'
import Footer from './components/footer'
import Initiatives from './components/initiatives'
import Vision from './components/vision'
import Sponsors from './components/sponsors'
import Contact from './components/contact'
import Team from './components/team'

class Main extends React.Component { 
  render() {
    return (
      <div>
        <SideBar />
        <div className="w3-padding-large" id="main">
        <Route exact path="/home" component={Header} />
        <Route path="/vision" component={Vision} />
        <Route path="/initiatives" component={Initiatives} />
        <Route path="/contact" component={Contact} />
        <Route path="/sponsors" component={Sponsors} />
        <Route path="/team" component={Team} />
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
