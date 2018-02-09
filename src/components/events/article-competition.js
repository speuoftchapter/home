import React from 'react'

class ArticleCompetition extends React.Component {
	render() {
		var hrStyle = {
			width:'200px'
		}
		var imgStyle = {
			width:'80px'
		}
		return (
			<div className="w3-content w3-justify  w3-padding-64"> 
			<h2 className="team-title">Meet the Team </h2>
			<hr style={hrStyle} className="w3-opacity"/>
			<h3>
			To this end, in collaboration with Engineers without Borders (EWB) UofT Chapter, 
			the SPE UofT Chapter (lead by Pavani Cherukupally) are organizing the 
			“Green Plastics Article Competition”.This competition is open to all disciplines, 
			teams of up to three undergraduate level students, to submit an article that focus on any 
			one relevant modern sustainability topic within the plastics industry, including but not 
			limited to plastics, food packaging, water bottles, sanitary equipment, ocean waste etc. 
			This competition motivates students to pursue goal-driven innovative discoveries, think critically, and to develop the skills and qualities (e.g., teamwork) required to serve as future leaders. 
			</h3>
			<h3>
			The articles are first be judged by the EWB UofT Chapter and the SPE UofT Chapter. 
			The finalists are then be sent to the SPE Thermoplastics Materials & Foams (TPM&F) Division 
			for the final review and to select the top 2 articles. 
				</h3>
			<h3>
			SPE TPM&F Division to sponsor two cash prizes: $500 (first place) and $300 (second place). 
			These awards will be presented to the winning students by a SPE TPM&F Division Board Member (TBD) 
			as part of the industry night (an invited talk on engineering for social change) in March 2018. 
			Furthermore, the first place article will be published in the TPM&F Newsletter and SPE Magazine, 
			while the second place article will be published by the Galbraith Society, UofT’s journal.  
				

				
				</h3>

			</div>
			);
	}
}
export default ArticleCompetition