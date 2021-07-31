import { Avatar } from '@material-ui/core';
import React from 'react'
import Post from './Post';
import "./Posts.css";
import PhotoIcon from '@material-ui/icons/Photo';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import AssignmentIcon from '@material-ui/icons/Assignment';
import EventIcon from '@material-ui/icons/Event';

function Posts() {
    return (
        <div className="posts">
            <div className="posts__nav">
                <div className="posts__search">
                    <Avatar src="./assets/zayn.jpg"/>
                    <input type="text" placeholder="Start a post"/>
                </div>
                <div className="posts__icon">
                    <div className="icon">
                        <PhotoIcon/>
                        <p>Photo</p>
                    </div>
                    <div className="icon">
                        <VideoLibraryIcon/>
                        <p>Video</p>
                    </div>
                    <div className="icon">
                        <EventIcon/>
                        <p>Event</p>
                    </div>
                    <div className="icon">
                        <AssignmentIcon/>
                        <p>Write Article</p>
                    </div>
                </div>
            </div>
            <div className="posts__feed">
                 <Post imgsrc="./assets/post.png"
                 name="Arpit Saxena"
                 description="React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications."
                 info="React Developer | SEO Executive | Content Writing Intern at WorldRef                 "
                 avatarsrc="./assets/Avatar.jpg"
                 time="1h"/>

                 <Post imgsrc="./assets/mern.png"
                 name="Zayn Malik"
                 description="
                 MERN stands for MongoDB, Express, React, Node, after the four key technologies that make up the stack. MongoDB - document database. Express(.js) - Node.js web framework. React(.js) - a client-side JavaScript framework. Node(.js) - the premier JavaScript web server."
                 info="Mern Stack Developer"                
                 avatarsrc="./assets/zayn.jpg"
                 time="1d"/>

                <Post imgsrc="./assets/android.jpg"
                 name="John Deep"
                 description="Android Studio is the official integrated development environment for Google's Android operating system, built on JetBrains' IntelliJ IDEA software and designed specifically for Android development"
                 info="Android Developer"
                 avatarsrc="./assets/avatar1.jpg"
                 time="3d"/>
                 <Post imgsrc="./assets/android.jpg"
                 name="John Deep"
                 description="Android Studio is the official integrated development environment for Google's Android operating system, built on JetBrains' IntelliJ IDEA software and designed specifically for Android development"
                 info="Android Developer"
                 avatarsrc="./assets/avatar1.jpg"
                 time="3d"/>
            </div>
        </div>
    )
}

export default Posts
