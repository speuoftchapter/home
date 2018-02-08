import React from 'react';

class Philosophy extends React.Component {
	render() {
		var hrStyle = {
			width:'200px'
		}
		var imgStyle = {
			width:'80px'
		}
		return (
		  <div className="w3-content w3-justify w3-text-grey w3-padding-64" id="about">
		    <h2 className="w3-text-light-grey">About Us</h2>
		    <hr style={hrStyle} className="w3-opacity"/>
						<p> Bacon ipsum dolor amet ham tongue beef strip steak, 
						tenderloin ground round fatback flank spare ribs rump pork loin bresaola 
						short ribs ham hock. 
						</p>
						<p>Salami bacon buffalo pork belly, shank ham hock kevin tri-tip
						swine fatback chuck pastrami shoulder jerky. Cupim ham hock t-bone pork loin jowl
						shankle porchetta tail. 
						</p>
						<p>Burgdoggen boudin venison drumstick biltong filet mignon. 
						Picanha pastrami jerky, corned beef hamburger rump burgdoggen t-bone flank turkey
						beef shankle strip steak.</p>
		    <h3 className="w3-padding-16 w3-text-light-grey">Brief Summary</h3>
		    <div className="w3-row w3-center w3-padding-16 w3-section w3-light-grey">
		      <div className="w3-col s4 w3-center w3-section">
		        <span className="w3-xlarge">23</span><br/>
		        Sponsors
		      </div>
		      <div className="w3-col s4 w3-center w3-section">
		        <span className="w3-xlarge">96</span><br/>
		        Projects Done
		      </div>
		      <div className="w3-col s4 w3-center w3-section">
		        <span className="w3-xlarge">7 billion</span><br/>
		        Happy Clients
		      </div>
		    </div>

			<h3 className="w3-padding-24 w3-text-light-grey">Testimonials</h3>  
		    <img src="http://i0.kym-cdn.com/profiles/icons/big/000/256/296/9fe.png" alt="Avatar" className="w3-left w3-circle w3-margin-right" style={imgStyle} />
		    <p><span className="w3-large w3-margin-right">Doge.</span> CEO at DogeCoin.</p>
		    <p>Much Wow.</p><br/>
		    
		    <img src="https://thumbs.dreamstime.com/z/yummy-lemon-cheese-cake-15925358.jpg" alt="Avatar" className="w3-left w3-circle w3-margin-right" style={imgStyle} />
		    <p><span className="w3-large w3-margin-right">Lemon Cheesecake.</span></p>
		    <p>Nothing is better than Lemon Cheesecake.</p>

		    </div>
		);
	}
}
export default Philosophy