import React from 'react'
import "./Feeds.css";
import HelpIcon from '@material-ui/icons/Help';
import DiscFullIcon from '@material-ui/icons/DiscFull';


function Feeds() {
    return (
        <div className="feeds">
            <div className="feeds__container">
                <div className="feeds__info">
                    <p>Linkedin News</p>
                    <HelpIcon/>
                </div>
                <div className="feeds__lists">
                    <div className="feeds__list">
                        <DiscFullIcon className="feeds__icon"/>
                        <h3>Hard-Soft Skills Matter</h3>
                    </div>
                    <p>3d ago . 6054 readers</p>
                    <div className="feeds__list">
                        <DiscFullIcon className="feeds__icon"/>
                        <h3>Mern Stack is taking over Mean Stack</h3>
                    </div>
                    <p>4d ago . 653 readers</p>
                    <div className="feeds__list">
                        <DiscFullIcon className="feeds__icon"/>
                        <h3>React is the most popular framework</h3>
                        
                    </div>
                    <p>1d ago . 3005 readers</p>
                    <div className="feeds__list">
                        <DiscFullIcon className="feeds__icon"/>
                        <h3>SEO Tips and Tricks</h3>
                        
                    </div>
                    <p>2d ago . 345 readers</p>
                    <div className="feeds__list">
                        <DiscFullIcon className="feeds__icon"/>
                        <h3>Digital Marketing v/s Traditional Marketing </h3>
                        
                    </div>
                    <p>22h ago . 209 readers</p>
                    <div className="feeds__list">
                        <DiscFullIcon className="feeds__icon"/>
                        <h3>Javascript is the most widely used Language</h3>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feeds
