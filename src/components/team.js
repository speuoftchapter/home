import React from 'react'
import '../css/team.css' 
class Team extends React.Component {

	render() {
		var imgStyle = {
			width:'80px'
		}
		return (
			<div> 
				<h1 className="team-title">Meet the Team </h1>
				<img src="http://i0.kym-cdn.com/profiles/icons/big/000/256/296/9fe.png" alt="Avatar" className="w3-left w3-circle w3-margin-right" style={imgStyle} />
				<h3 className="team-member"> Doge </h3>
				<h3 className="member-role"> Boss </h3>
				<p className="member-description"> Bacon ipsum dolor amet ham tongue beef strip steak, 
				tenderloin ground round fatback flank spare ribs rump pork loin bresaola 
				short ribs ham hock. 
				<p>
				<i className="fas fa-phone w3-xlarge" id = "logo"></i>
				500 600 700
				</p>
				<p>
				<i className="far fa-envelope w3-xlarge" id = "logo"></i>
				Doge.Boss@CheesecakeForLife.ca
				</p>
				<p>
				<i className="fab fa-linkedin w3-xlarge" id = "logo"></i>
				Doge needs no profile.
				</p>
				</p>


				<h3 className="team-member"> Person B </h3>
				<h3 className="member-role"> Executive Member </h3>
				<p className="member-description"> Bacon ipsum dolor amet ham tongue beef strip steak, 
				tenderloin ground round fatback flank spare ribs rump pork loin bresaola 
				short ribs ham hock. 
				</p>
				<p>
				<i className="fas fa-phone w3-xlarge" id = "logo"></i>
				500 600 700
				</p>
				<p>
				<i className="far fa-envelope w3-xlarge" id = "logo"></i>
				</p>
				<p>
				<i class="fab fa-linkedin w3-xlarge" id = "logo"></i>
				</p>


				<h3 className="team-member"> Person C </h3>
				<h3 className="member-role"> Head Scratcher </h3>
				<p className="member-description"> Bacon ipsum dolor amet ham tongue beef strip steak, 
				tenderloin ground round fatback flank spare ribs rump pork loin bresaola 
				short ribs ham hock. 
				</p>
				<p>
				<i className="fas fa-phone w3-xlarge" id = "logo"></i>
				500 600 700
				</p>
				<p>
				<i className="far fa-envelope w3-xlarge" id = "logo"></i>
				Doge.Boss@CheesecakeForLife.ca
				</p>
				<p>
				<i class="fab fa-linkedin w3-xlarge" id = "logo"></i>
				Doge needs no profile.
				</p>
				
			</div>
		);
	}
}
export default Team