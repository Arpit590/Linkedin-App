import React from 'react'
import "./Network.css";
import ContactsIcon from '@material-ui/icons/Contacts';
import PeopleIcon from '@material-ui/icons/People';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import EventIcon from '@material-ui/icons/Event';
import AssignmentIcon from '@material-ui/icons/Assignment';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import People from "./People";
import Fade from "react-reveal/Fade";

function Network() {
    return (
        <div className="network">
            <div className="network__container">
                <Fade left>
                <div className="network__sidebar">
                    <h1>Manage my network</h1>
                    <div className="sidebar__lists">
                        <ul>
                            <li>
                                <div className="sidebar__list">
                                    <div className="sidebar__content">
                                    <PeopleIcon/>
                                    <p>Connections</p>
                                    </div>
                                    <p>502</p>
                                </div>
                            </li>
                            <li>
                                <div className="sidebar__list">
                                    <div className="sidebar__content">
                                    <ContactsIcon/>
                                    <p>Contacts</p>
                                    </div>
                                    <p>3076</p>
                                </div>
                            </li>
                            <li>
                                <div className="sidebar__list">
                                    <div className="sidebar__content">
                                    <GroupAddIcon/>
                                    <p>Groups</p>
                                    </div>
                                    <p>4</p>
                                </div>
                            </li>
                            <li>
                                <div className="sidebar__list">
                                    <div className="sidebar__content">
                                    <EventIcon/>
                                    <p>Events</p>
                                    </div>
                                    <p>9</p>
                                </div>
                            </li>
                            <li>
                                <div className="sidebar__list">
                                    <div className="sidebar__content">
                                    <AssignmentIcon/>
                                    <p>Newsletter</p>
                                    </div>
                                    <p>2</p>
                                </div>
                            </li>
                        </ul>
                        <div className="show__less">
                        <p>Show less</p>
                        <ExpandLessIcon/>
                        </div>
                    </div>
                </div>
                </Fade>
                <div className="networks">
                    <div className="networks__container">
                        <div className="networks__heading">
                            <h1>People you may know</h1>
                            <p>See all</p>
                        </div>

                        <diV className="networks__cards">
                        <Fade bottom>
                        <div className="networks__card">
                            <People name="Zayn Malik"
                            description="Android Developer | Mern Stack Developer"
                            avatarSrc="./assets/zayn.jpg"
                            mutual="4"/>
                            <People name="Lionel Messi"
                            description="GOAT | Developer"
                            avatarSrc="./assets/avatar3.jpg"
                            mutual="100"/>
                            <People name="Cilain Murphy"
                            description="Head of Peaky Blinder"
                            avatarSrc="./assets/avatar5.jpg"
                            mutual="45"/>
                            <People name="Clever Qazi"
                            description="Python Developer"
                            avatarSrc="./assets/avatar6.jpg"
                            mutual="988"/>
                        </div>
                        </Fade>

                        <Fade bottom>
                        <div className="networks__card">
                            <People name="Cristiano Ronaldo"
                            description="GOAT | Entereprenuer"
                            avatarSrc="./assets/avatar4.jpg"
                            mutual="1"/>
                            <People name="John Jones"
                            description="Flutter Developer | SEO Executive"
                            avatarSrc="./assets/avatar1.jpg"
                            mutual="100"/>
                            <People name="Harry Styles"
                            description="Member of One Direction | Digital Marketer"
                            avatarSrc="./assets/avatar2.jpg"
                            mutual="62"/>
                            <People name="Rowan Roy"
                            description="Fashion Influencer | Developer"
                            avatarSrc="./assets/avatar9.png"
                            mutual="23"/>
                        </div>
                        </Fade>
                        
                        <Fade bottom>
                        <div className="networks__card">
                            <People name="Billie Ellish"
                            description="Singer | Bad Guy"
                            avatarSrc="./assets/avatar7.jpg"
                            mutual="7088"/>
                            <People name="Alex Costa"
                            description="Fashion Influcer | CEO Forte Series"
                            avatarSrc="./assets/avatar10.jpg"
                            mutual="45"/>
                            <People name="Bebe Rexha"
                            description="Singer"
                            avatarSrc="./assets/avatar8.jpg"
                            mutual="4555"/>
                            <People name="Joey Tribbiani"
                            description="Star of Days of our lives | Actor"
                            avatarSrc="./assets/avatar11.jpg"
                            mutual="1234"/>
                        </div>
                        </Fade>
                        </diV>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Network
