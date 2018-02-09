import React from 'react'
import Initiative from './initiative'
import Timeline from './timeline'

class Initiatives extends React.Component {
	constructor(props) {
		super(props);
		this.state = {events: [
			{eventName: "x", eventDate: "Now", eventInfo: "tbd"},
			{eventName: "y", eventDate: "Yesterday", eventInfo: "None"}]
		}
	}
	render() {
		var eventList = this.state.events.map(event => {
			return(
			<Initiatives initiative={event}/>
			)
		});
		return (
			<div className="w3-container">
			<Timeline/>
			</div>

		);

	}
}
export default Initiatives