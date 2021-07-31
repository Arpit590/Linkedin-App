import { Avatar } from '@material-ui/core';
import React from 'react'
import { Link } from 'react-router-dom';
import "./Sidebar.css";

function Sidebar() {
    return (
        <div className="sidebar">
            <img src="./assets/background.png" alt="background"/>
            <Avatar src="./assets/Avatar.jpg" className="avatar1"/>
            <div className="sidebar__info">
                <Link to="/profile">
                    <h1>Arpit Saxena</h1>
                    <p>React Developer | SEO Executive | Content Writing Intern at WorldRef</p>
                </Link>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__views">
                    <p className="profile">Who viewed your profile: </p>
                    <p className="number">2659</p>
                </div>
                <div className="sidebar__views">
                    <p className="profile">Views of your video: </p>
                    <p className="number">265</p>
                </div>
            </div>
            <div className="sidebar__tags">
                    <p>Recent</p>
                    <ul>
                        <li># linkedin</li>
                        <li># react</li>
                        <li># mern</li>
                        <li># seo</li>
                        <li># digital marketing</li>
                        <li># js</li>
                    </ul>
            </div>
        </div>
    )
}

export default Sidebar;