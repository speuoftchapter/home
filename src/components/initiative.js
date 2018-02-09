import React from 'react'

class Initiative extends React.Component {
	getPos(pos) {
		return pos ? "timeline wow bounceInUp" : "timeline-inverted wow bounceInUp"
	}
	render() {
		return (
            <li className={this.getPos(this.props.pos)}>
               <div className="timeline-badge warning"><i className="fa fa-bullseye"></i></div>
               <div className="date-info">
                  <span className="day">{this.props.day}</span><span className="month">{' ' + this.props.month}</span><span className="year">{' ' + this.props.year}</span>
               </div>
               <div className="timeline-panel">
                  <div className="timeline-heading">
                     <h6 className="timeline-title">{this.props.title}</h6>
                  </div>
                  <div className="timeline-body">
                     <p>
                     {this.props.content}
                     </p>
                     <br/>
                     <button type="button" className="timeline-button" href={this.props.link}>Click for More Info</button>
                  </div>
               </div>
            </li>
		);

	}
}
export default Initiative