import React from 'react';
import '../css/initiatives.css';
import Initiative from './initiative'

class Timeline extends React.Component {
  render() {
    return (
      <section className="section-spacing text-center" id="features">
         <div className="container">
            <header className="section-header">
               <h2>INITIATIVES</h2>
               <h3>Events you should check out!</h3>
            </header>
            <div className="container-fluid">
               <div className="row">
                  <div className="col-md-12">
                     <ul className="initiatives timeline">

                        <Initiative pos={true} day="" month="Now" year=""
                        title="Mentorship"
                        content="1000 girls, 1000 futures mentorship program New York Academy of Sciences"/>

                        <Initiative pos={false} day={4} month="Feb" year="2017"
                        title="GreenPlastics Article Competition"
                        content="$800 cash awards and global journal publication."
                        link="https://docs.google.com/document/d/1kwea5nTqtOosPAktR_GZD8OMGzSQtQpmEM8uIAnGc3c/edit"/>

                        <Initiative pos={true} day={31} month="Jan" year="2016"
                        title="SPE mentorship program"
                        content="Want to help?  Become a mentor now"
                        link="https://www.4spe.org/membership/"/>

                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
  }
}
export default Timeline;