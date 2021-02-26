import React, {useState} from 'react'
import Header from '../../components/header/Header'
import { HiDotsHorizontal } from 'react-icons/hi'
import { FiPhoneCall, FiMail } from 'react-icons/fi'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import BannerAndProgress from '../../components/bannerAndProgress/BannerAndProgress'
import CalendedarAndHrdata from '../../components/calendarAndHrdata/CalendarAndHrdata'


export default function Home() {
    const [value, setValue] = useState(new Date())
    const hrData = [
        {
            avatar: "https://reqres.in/img/faces/10-image.jpg",
            name: "Ashok K",
            designation: "HR Manager",
            joinedDate: "18-Apr-2020",
            projects: "33 Active",
            accomplishments: "112"
        }
    ]
    const userList = [
        {
            id: 7,
            name: "Michael",
            avatar: "https://reqres.in/img/faces/7-image.jpg",
            designation: "Project Manager",
            icon: "🔵",
            status: "Practical Round"
            
        },
        {
            id: 8,
            name: "Lindsay",
            avatar: "https://reqres.in/img/faces/8-image.jpg",
            designation: "UI/UX Designer",
            icon: "🔵",
            status: "Practical Round"
        },
        {
            id: 9,
            name: "Tobias",
            avatar: "https://reqres.in/img/faces/9-image.jpg",
            designation: "React Developer",
            icon: "🟢",
            status: "Final Round",
        },
        {
            id: 10,
            name: "Byron",
            avatar: "https://reqres.in/img/faces/10-image.jpg",
            designation: "UI/UX Designer",
            icon: "🟡",
            status: "HR Round",
        }
    ]
    return (
        <div className="home-container">
            <Header />
            <div className="dashboard-cards">
                <BannerAndProgress 
                    userList={userList} 
                    HiDotsHorizontal={HiDotsHorizontal}    
                />
                <CalendedarAndHrdata 
                    Calendar={Calendar} 
                    value={value} 
                    hrData={hrData} 
                    FiPhoneCall={FiPhoneCall} 
                    FiMail={FiMail} 
                    HiDotsHorizontal={HiDotsHorizontal}
                />
            </div>
        </div>
    )
}
