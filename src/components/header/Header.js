import React from 'react'
import {FiSearch} from 'react-icons/fi'
import {AiOutlineSend} from 'react-icons/ai'
import {RiNotification2Line} from 'react-icons/ri'
import UserData from '../userData/UserData'
export default function Header() {
    return (
        <div className="header-container">
           <div>
               <h2>Dashboard</h2>
           </div> 
           <div className="icon-container">
                <div className="search-icon">
                    <input type="text" placeholder="search" />
                    <FiSearch />  
                </div>
               <AiOutlineSend className="send-icon" />
               <RiNotification2Line className="notification-icon"/>
           </div>
            <UserData name="Ashok K" image="https://reqres.in/img/faces/10-image.jpg" />
        </div>
    )
}
