import React from 'react'

export default function userData(props) {
    return (
        <div className="avatar-container">
            <h5>{props.name}</h5>
            <img className="avatar"  src={props.image} alt=""/>
            <h5>{props.designation}</h5>
            <span>{props.icon}</span>
            <h5>{props.status}</h5>
            <h5>{props.joinedData}</h5>
            <h5>{props.projects}</h5>
            <h5>{props.accomplishments}</h5>
        </div>
    )
}
