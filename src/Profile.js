import { Avatar, IconButton } from '@material-ui/core';
import React from 'react'
import "./Profile.css";
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';

function Profile() {
    return (
        <div className="profile1">
            <div className="profile__container">
                <div className="profile__data">
                    <div className="profile__datacontainer">
                    <img src="./assets/background.png" alt="background"/>
                    <Avatar src="./assets/Avatar.jpg" className="profile__avatar"/>
                    <div className="profile__details">
                        <div className="profile__info">
                            <h1>Arpit Saxena</h1>
                            <p className="profile__description">React Developer | SEO Executive | Content Writing Intern at WorldRef</p>
                            <p className="profile__place">Noida, Uttar Pradesh, India</p>
                            <p className="profile__connect">500+ connections</p>
                        </div>
                        <div className="profile__buttons">
                            <button>Connect</button>
                            <button>Message</button>
                            <button>More</button>
                        </div>
                        <div className="profile__about">
                            <h1>About</h1>
                            <p>I'm Arushi, born and brought up in Noida. I pursued my graduation in B.com (hons) from University of Delhi. I chose the very field because of my affinity for numbers combined with my logical approach to every scenario and willingness to discover the real business world. That 3 years journey gave me a great exposure towards society</p>
                        </div>

                        <div className="profile__experiences">
                            <div className="profile__heading">
                                <h1>Experience</h1>
                                <IconButton>
                                    <AddIcon/> 
                                </IconButton>
                                
                            </div>
                            <div className="profile__experience">
                                <Avatar src="./assets/experience1.png" className="avatar__profile"/>
                                <div className="profile__experienceInfo">
                                    <h1>Content Writing Intern</h1>
                                    <p>WorldRef - Internship</p>
                                    <p>Jun 2021 - Present . 2 mos</p>
                                </div> 
                            </div>
                            <div className="profile__experience">
                                <Avatar src="./assets/experience2.png" className="avatar__profile"/>
                                <div className="profile__experienceInfo">
                                    <h1>React Developer</h1>
                                    <p>Amazon - Internship</p>
                                    <p>Aug 2020 - Present . 11 mos</p>
                                </div> 
                            </div>
                        </div>
                        <div className="profile__dashboard">
                            <h1>Your Dashboard</h1>
                            <div className="dashboard__box">
                                <div className="dashboard__content">
                                    <h1>240</h1>
                                    <p>Who viewed your profile</p>
                                </div>
                                <div className="dashboard__content">
                                    <h1>498</h1>
                                    <p>Video views</p>
                                </div>
                                <div className="dashboard__content" style={{"border": "none"}}>
                                    <h1>82</h1>
                                    <p>Search appearances</p>
                                </div>
                            </div>
                        </div>
                        </div>
                    
                    </div>

                </div>
                <diV className="profile__suggestions">
                    <h1>People also viewed</h1>
                    <diV className="profile__people">
                        <Avatar src="./assets/zayn.jpg"/>
                        <div className="profile__peopleInfo">
                            <h1>Zayn Malik . 1st</h1>
                            <p>Android Developer | One Direction Member</p>
                            <button>Connect</button>
                        </div>
                    </diV>
                    <diV className="profile__people">
                        <Avatar src="./assets/photo.jpg"/>
                        <div className="profile__peopleInfo">
                            <h1>John Jones . 2nd</h1>
                            <p>React Developer | Intern at Amazon</p>
                            <button>Connect</button>
                        </div>
                    </diV>
                    <diV className="profile__people">
                        <Avatar src="./assets/avatar1.jpg"/>
                        <div className="profile__peopleInfo">
                            <h1>Deepak Sharma . 1st</h1>
                            <p>Content Writer</p>
                            <button>Connect</button>
                        </div>
                    </diV>
                    <diV className="profile__people">
                        <Avatar src="./assets/avatar2.jpg"/>
                        <div className="profile__peopleInfo">
                            <h1>Harry Styles . 3rd</h1>
                            <p>One Direction Member | Entrepreneur</p>
                            <button>Connect</button>
                        </div>
                    </diV>
                    <diV className="profile__people">
                        <Avatar src="./assets/avatar3.jpg"/>
                        <div className="profile__peopleInfo">
                            <h1>Lionel Messi . 1st</h1>
                            <p>GOAT | Businessman</p>
                            <button>Connect</button>
                        </div>
                    </diV>
                    <diV className="profile__people">
                        <Avatar src="./assets/avatar4.jpg"/>
                        <div className="profile__peopleInfo">
                            <h1>Cristiano Ronaldo . 1st</h1>
                            <p>GOAT | MERN STACK Developer</p>
                            <button>Connect</button>
                        </div>
                    </diV>
                    <diV className="profile__people">
                        <Avatar src="./assets/avatar5.jpg"/>
                        <div className="profile__peopleInfo">
                            <h1>Cilian Murphy . 2nd</h1>
                            <p>Head of Peaky Blinders</p>
                            <button>Connect</button>
                        </div>
                    </diV>
                    <diV className="profile__people">
                        <Avatar src="./assets/avatar6.jpg"/>
                        <div className="profile__peopleInfo">
                            <h1>Clever Qazi . 1st</h1>
                            <p>Python Developer</p>
                            <button>Connect</button>
                        </div>
                    </diV>
                </diV>
            </div> 
        </div>
    )
}

export default Profile
