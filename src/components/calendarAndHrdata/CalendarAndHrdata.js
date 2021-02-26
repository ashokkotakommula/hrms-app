import React, { Fragment } from 'react'

export default function CalendarAndHrdata({Calendar, value, hrData, FiPhoneCall, FiMail, HiDotsHorizontal}) {
    return (
        <Fragment>
            <div className="SeconsTwo">   
                    <div className="card-three">
                        <Calendar value={value}  className="calendar"/>
                    </div>
                    <div className="card-four">
                        <div className="data-container">
                            <div className="hr-info">
                                {
                                    hrData.map((hr) => (
                                        <div key={Date.now()} className="hrimg-container">
                                            <img src={hr.avatar} alt="avtar" />
                                            <div className="name-container">
                                                <h5>{hr.name}</h5>
                                                <h6>{hr.designation}</h6>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className="hr-icon">
                                <FiPhoneCall className="call"/>
                                <FiMail className="msg"/>
                                <HiDotsHorizontal className="dot"/>
                            </div>
                        </div>
                        <div className="details-container">
                            {
                                hrData.map((hr) => (
                                    <div key={Date.now()} className="more-details">
                                        <p>Joined Date: <b>{hr.joinedDate}</b></p>
                                        <p>Projects: <b>{hr.projects}</b></p> 
                                        <p>Accomplishments: <b>{hr.accomplishments}</b></p>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="btn-container">
                            <button>View More</button>
                        </div>
                    </div>
                </div>
        </Fragment>
    )
}
