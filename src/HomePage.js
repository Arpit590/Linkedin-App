import React from 'react'
import "./HomePage.css";
import Sidebar from './Sidebar';
import Posts from "./Posts";
import Feeds from "./Feeds";


function HomePage() {
    return (
        <div className="homepage">
            <div className="homepage__container">
                <Sidebar/>
                <Posts/>
                <Feeds/>
            </div>
        </div>
    )
}

export default HomePage
