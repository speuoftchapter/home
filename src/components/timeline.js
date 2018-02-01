import React from 'react';
import '../css/initiatives.css';


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
                     <ul className="timeline">
                        <li className="timeline wow bounceInUp">
                           <div className="timeline-badge warning"><i className="fa fa-bullseye"></i></div>
                           <div className="date-info">
                             <span className="day"> Now</span>
                           </div>
                           <div className="timeline-panel">
                              <div className="timeline-heading">
                                 <h6 className="timeline-title">Mentorship</h6>
                              </div>
                              <div className="timeline-body">
                                 <p>
                                    1000 girls, 1000 futures mentorship program by <a href="https://www.nyas.org/programs/global-stem-alliance/1000-girls-1000-futures/"> <em>New York Academy of Sciences</em></a>
                                 </p>
                              </div>
                           </div>
                        </li>
                        <li className="timeline-inverted wow bounceInUp">
                           <div className="timeline-badge danger"><i className="fa fa-crosshairs"></i></div>
                           <div className="date-info">
                              <span className="day">04</span><span className="month"> Feb</span><span className="year"> 2017</span>
                           </div>
                           <div className="timeline-panel">
                              <div className="timeline-heading">
                                 <h6 className="timeline-title"><a href="https://docs.google.com/document/d/1kwea5nTqtOosPAktR_GZD8OMGzSQtQpmEM8uIAnGc3c/edit"> GreenPlastics Article Competition</a></h6>
                              </div>
                              <div className="timeline-body">
                                 <p>
                                    $800 cash awards and global journal publication.
                                 </p>
                              </div>
                           </div>
                        </li>
                        <li className="timeline wow bounceInUp">
                           <div className="timeline-badge danger"><i className="fa fa-crosshairs"></i></div>
                           <div className="date-info">
                              <span className="day">31</span><span className="month"> Jan</span><span className="year"> 2016</span>
                           </div>
                           <div className="timeline-panel">
                              <div className="timeline-heading">
                                 <h6 className="timeline-title">SPE mentorship program</h6>
                              </div>
                              <div className="timeline-body">
                                 <p>
                                    Want to help?  Become a mentor now by <a href="https://www.4spe.org/membership/"><em> clicking here</em></a>!
                                 </p>
                              </div>
                           </div>
                        </li>
                        <li className="timeline-inverted wow bounceInUp">
                           <div className="timeline-badge danger"><i className="fa fa-crosshairs"></i></div>
                           <div className="date-info">
                              <span className="day">25</span><span className="month"> Jan</span><span className="year"> 2016</span>
                           </div>
                           <div className="timeline-panel">
                              <div className="timeline-heading">
                                 <h6 className="timeline-title">Version 1.0.2 Released with user identified fixes/enhancements</h6>
                              </div>
                              <div className="timeline-body">
                                 <p>
                                    Release highlights :
                                    Layout changed inline with other Cartwheel applications. (Menu based and full-screen).
                                    Introduced filters and sorting of Actions items.
                                    Print facility to support printing of any saved reports (including previous reports)
                                 </p>
                              </div>
                           </div>
                        </li>
                        <li className="timeline wow bounceInUp">
                           <div className="timeline-badge danger"><i className="fa fa-crosshairs"></i></div>
                           <div className="date-info">
                              <span className="day">25</span><span className="month"> Jan</span><span className="year"> 2016</span>
                           </div>
                           <div className="timeline-panel">
                              <div className="timeline-heading">
                                 <h6 className="timeline-title">Version 1.0.2 Released with user identified fixes/enhancements</h6>
                              </div>
                              <div className="timeline-body">
                                 <p>
                                    Release highlights :
                                    Layout changed inline with other Cartwheel applications. (Menu based and full-screen).
                                    Introduced filters and sorting of Actions items.
                                    Print facility to support printing of any saved reports (including previous reports)
                                 </p>
                              </div>
                           </div>
                        </li>
                        <li className="timeline-inverted wow bounceInUp">
                           <div className="timeline-badge danger"><i className="fa fa-crosshairs"></i></div>
                           <div className="date-info">
                              <span className="day">25</span><span className="month"> Jan</span><span className="year"> 2016</span>
                           </div>
                           <div className="timeline-panel">
                              <div className="timeline-heading">
                                 <h6 className="timeline-title">Version 1.0.2 Released with user identified fixes/enhancements</h6>
                              </div>
                              <div className="timeline-body">
                                 <p>
                                    Release highlights :
                                    Layout changed inline with other Cartwheel applications. (Menu based and full-screen).
                                    Introduced filters and sorting of Actions items.
                                    Print facility to support printing of any saved reports (including previous reports)
                                 </p>
                              </div>
                           </div>
                        </li>
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