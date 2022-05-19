import React from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice'
import { faCalendarPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Nav from '../Nav'

import { signOut } from 'firebase/auth'
import { auth } from '../firebase'


import './ProfileScreen.css'

const ProfileScreen = () => {
    const user = useSelector(selectUser)
    return (
        <div className="profileScreen">
            <Nav />
            <div className="profileScreen__nav"></div>
            <div className="profileScreen__body">
                <h1>
                    Account 
                    <span className="profileScreen__memberSlice">
                        <FontAwesomeIcon icon={faCalendarPlus} style={{width: '40px', color: "red"}}/>
                        Member Since {user.creationTime.split(" ")[2]} {user.creationTime.split(" ")[3]}
                    </span>
                </h1>
                <div className="profileScreen__details">
                    <div className="profileScreen__section">
                        <div className="profileScreen__header">
                            MEMBERSHIP & BILLING
                        </div>
                        <div className="profileScreen__content">
                            <div className="profileScreen__contentCol">
                                <h2>{user.email}</h2>
                                <h3>Password:*********</h3>
                                <h3>Phone: unknown</h3>
                            </div>
                            <div className="profileScreen__contentCol">
                                <span>Change email</span>
                                <span>Change password</span>
                                <span>Change phone number</span>
                            </div>  
                            
                        </div>
                    </div>

                    <div className="profileScreen__section">
                        <div className="profileScreen__header">
                            PROFILE
                        </div>
                        <div className="profileScreen__content">
                            <div className="profileScreen__contentCol"></div>
                            <div className="profileScreen__contentCol">
                                <span onClick={() => {signOut(auth)}}>Sign Out</span>
                            </div>   
                        </div>
                    </div>
                    
                    
                </div>
            </div>
            

        </div>
    )
}

export default ProfileScreen