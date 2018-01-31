import React from 'react'

class Initiative extends React.Component {
	render() {
		return (
			<li>
				{this.props.event.eventName}
				<br/>
				Date: {this.props.event.eventDate}
				<br/>
				Event Information: {this.props.event.eventInfo}
			</li>
		);
	}
}
export default Initiative