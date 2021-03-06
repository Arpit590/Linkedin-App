import React from 'react'
import "./MessageBox.css";
import { Avatar } from '@material-ui/core';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import CreateIcon from '@material-ui/icons/Create';
import Fade from "react-reveal/Fade";

function MessageBox() {
    return (
        <Fade right>
        <div className="messagebox">
            <div className="messagebox__container">
                <div className="messagebox__avatar">
                    <Avatar src="./assets/Avatar.jpg"/>
                    <p>Messaging</p>
                </div>
                <div className="messagebox__icons">
                    <MoreHorizIcon/>
                    <CreateIcon/>
                    <KeyboardArrowUpIcon/>
                </div>
            </div>
        </div>
        </Fade>
    )
}

export default MessageBox
