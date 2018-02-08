import React from 'react'

class Contact extends React.Component {
  render() {
    var hrStyle = {
      width:'200px'
    }
    return (
      <div className="w3-padding-64 w3-content w3-text-grey" id="contact">
        <h2 className="w3-text-light-grey">Contact Us</h2>
        <hr style={hrStyle} className="w3-opacity"/>

        <div className="w3-section">
          <p><i className="fa fa-map-marker fa-fw w3-text-white w3-xxlarge w3-margin-right"></i> Toronto, ON</p>
          <p><i className="fa fa-envelope fa-fw w3-text-white w3-xxlarge w3-margin-right"> </i> Email: speuoftchapter@gmail.com</p>
        </div><br/>
        <p>Get in touch.</p>

        <form action="/action_page.php" target="_blank">
          <p><input className="w3-input w3-padding-16" type="text" placeholder="Name" required name="Name"/></p>
          <p><input className="w3-input w3-padding-16" type="text" placeholder="Email" required name="Email"/></p>
          <p><input className="w3-input w3-padding-16" type="text" placeholder="Subject" required name="Subject"/></p>
          <p><input className="w3-input w3-padding-16" type="text" placeholder="Message" required name="Message"/></p>
          <p>
            <button className="w3-button w3-light-grey w3-padding-large" type="submit">
              <i className="fa fa-paper-plane"></i> SEND MESSAGE
            </button>
          </p>
        </form>
      </div>
    );
  }
}
export default Contact
