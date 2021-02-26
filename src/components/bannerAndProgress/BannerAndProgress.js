import React, { Fragment } from 'react'
import {Link } from 'react-router-dom'

export default function BannerAndProgress({userList, HiDotsHorizontal}) {
    return (
        <Fragment>
            <div className="firstTwo">
                    <div className="card-one">
                        <div className="para"><p>Good Morning Ashok K.</p><p>Today you have 9 new applications. Also you need to hire 2 new UX Designers, 1 React Navtive Developer.</p>
                        <Link to="#" className="link">Read More</Link> </div>
                        <img className="banner-image" src="https://res.cloudinary.com/du0xsvxag/image/upload/v1613883782/video-conference-from-home-concept-online-meeting-with-colleagues-work-training-via-teleconference-video-conferencing_110633-424_scti52.jpg" alt="banner-icon" />
                    </div>
                    <div className="card-two">
                        <div className="head">
                            <h3>Recruitment Progress</h3>
                            <button>View All</button>
                        </div>
                        <div className="data-heading">
                            <h5>Full Name</h5>
                            <h5>Designation</h5>
                            <h5>Status</h5>
                        </div>  
                        <div className="users-list">
                        {
                            userList.map(user => (
                               <div key={user.id} className="user">
                                    <div>
                                        <img src={user.avatar} alt="avatar" />
                                        <p>{user.name}</p>
                                    </div>
                                    <div>
                                        <p>{user.designation}</p>
                                    </div>
                                    <div>
                                        <p><span>{user.icon}</span> {user.status}</p>
                                    </div>
                                    <HiDotsHorizontal className="dots"/>
                               </div>
                                
                            ))
                        }
                        </div>
                        <div className="results-container">
                            <p className="results">showing 4 out of 4 results</p>
                            <button>View All</button>
                        </div>
                    </div>
                </div>
        </Fragment>
    )
}
