import React from 'react'
import { GoHome } from 'react-icons/go'
import { MdPeopleOutline } from 'react-icons/md'
import { CgClipboard}  from 'react-icons/cg'
import { HiOutlineDocumentReport } from 'react-icons/hi'
import { BiCalendar } from 'react-icons/bi'
import { RiSettings4Line } from 'react-icons/ri' 
import { Link, useLocation } from 'react-router-dom'

const NavItem = () => {
    const location = useLocation();
    const list = [
        {
            name: "Dashboard",
            icon: <GoHome />,
            link: '/'
        },
        {
            name: "Recruitment",
            icon: <MdPeopleOutline />,
            link: '/recruitment'
        },
        {
            name: "Onboarding",
            icon: <CgClipboard />,
            link: '/onboarding'
        },
        {
            name: "Reports",
            icon: <HiOutlineDocumentReport />,
            link: '/reports'
        },
        {
            name: "Calendar",
            icon: <BiCalendar />,
            link: '/calendar'
        },
        {
            name: "Settings",
            icon: <RiSettings4Line />,
            link: '/settings'
        }
    ]
    return(
        <div className="nav-links">
            {
                list.map((item , index) => (
                   <Link to={item.link} key={index}>
                        <div className={item.link === location.pathname ? "link-color" : "link-item"} key={item.id}>
                            {item.icon}
                            <h4>{item.name}</h4>
                        </div>
                   </Link>
                ))
            }
        </div>
    ) 
}

export default NavItem