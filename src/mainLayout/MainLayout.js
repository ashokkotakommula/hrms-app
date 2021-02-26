import React from 'react'
import {SiConekta} from 'react-icons/si'
import NavItem from '../components/NavItem/NavItems'


const MainLayout = ({children}) => {
    return(
        <div className="layout-container">
            <div className="nav-container">
                <div className="heading">
                    <SiConekta />
                    <h2>MATRIX HR</h2>  
                </div>
                <NavItem />
                    <img className="nav-img" src="https://res.cloudinary.com/du0xsvxag/image/upload/v1613813180/6673_ahst0t.jpg" alt="nav-img" />
            </div>
            <div className="main-container">
                {children}
            </div>
        </div>
    )
}

export default MainLayout;