import React from 'react'
import "./Navbar.css";
import SearchIcon from "@material-ui/icons/Search"
import PeopleIcon from '@material-ui/icons/People';
import HomeIcon from "@material-ui/icons/Home";
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Avatar, IconButton } from '@material-ui/core';
import { Link } from 'react-router-dom';

function Navbar() {

    return (
        <div className="navbar">
            <div className="navbar__left">
                <Link to="/">
                    <img className="navbar__avatar" src="./assets/linkedin.png" alt="logo"/>
                </Link>
                <div className="navbar__search">
                    <SearchIcon/>
                    <input type="text" placeholder="Search"/>
                </div>
            </div>
            <div className="navbar__right">
                <Link to="/">
                <HomeIcon className="home"/>
                </Link>
                <Link to="/network">
                <PeopleIcon className="peoples"/>
                </Link>
                <ChatIcon className="chat"/>
                <NotificationsIcon className="notification"/>
                <div className="avatar">
                    <Link to="/profile">
                    <IconButton>
                        <Avatar src="./assets/Avatar.jpg"/>
                    </IconButton>
                    <p>Arpit</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar
