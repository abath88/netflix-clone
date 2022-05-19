import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";

import './Nav.css'

const Nav = () => {
    const [show, handleShow] = useState(false)
    const navigate = useNavigate()

    const transitionNavBar = () => {
        window.scrollY  > 10 ?
            handleShow(true) :
            handleShow(false)
    }
    
    useEffect( () => {
        window.addEventListener("scroll", transitionNavBar)
        return () => window.removeEventListener("scroll", transitionNavBar)
    }, [])
    return (
        <div className={`nav ${show && 'nav__black'}`}>
            <div className="nav__contents">
                <div className="nav__logoMenu">
                    <img 
                        src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" 
                        alt="" 
                        className="nav__logo"
                        onClick={()=> navigate('/')}
                    />
                    <div className="nav__menu">
                        <span className="active">Home</span>
                        <span>TV Show</span>
                        <span>Movies</span>
                        <span>New & Popular</span>
                        <span>My List</span>
                    </div>
                </div>
                <img 
                    onClick={()=> navigate('/profile')}
                    src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" 
                    alt=""
                    className="nav__avatar"  
                />
            </div>
        </div>
    )
}

export default Nav