import { Avatar } from '@material-ui/core';
import React from 'react'
import "./People.css";
import LinkIcon from '@material-ui/icons/Link';


function People({name, mutual, description, avatarSrc}) {
    return (
        <div className="people">
            <img src="./assets/background.png" alt="background"/>
            <Avatar className="avatar__people" src={avatarSrc}/>
            <div className="people__content">
                <h1>{name}</h1>
                <p>{description}</p>
            </div>
            <div className="mutual">
                <LinkIcon/>
                <p>{mutual} mutual connections</p>
            </div>
            <button>Connect</button>
            
        </div>
    )
}

export default People
