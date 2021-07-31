import { Avatar } from '@material-ui/core';
import React from 'react'
import "./Post.css";
import LanguageIcon from '@material-ui/icons/Language';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import CommentIcon from '@material-ui/icons/Comment';
import SendIcon from '@material-ui/icons/Send';
import ShareIcon from '@material-ui/icons/Share';
import Fade from "react-reveal/Fade";

function Post({imgsrc, avatarsrc, time, info, description, name}) {
    return (
        <Fade bottom>
        <div className="post">
            <div className="post__profile">
                <div className="post__avatar">
                    <Avatar src={avatarsrc}/>
                    <div className="post__info">
                        <p>{name} . 1st</p>
                        <p>{info}</p>
                        <p className="post__time">{time} . <LanguageIcon className="post__timestamp"/></p>
                    </div>
                </div>
                <div className="post__description">
                    <p>{description}</p>
                    <img src={imgsrc} alt="postimage"/>
                </div>
                <div className="post__icons">
                    <div className="post__icon">
                        <ThumbUpAltIcon/>
                        <p>Like</p>
                    </div>
                    <div className="post__icon">
                        <CommentIcon/>
                        <p>Comment</p>
                    </div>
                    <div className="post__icon">
                        <ShareIcon/>
                        <p>Share</p>
                    </div>
                    <div className="post__icon">
                        <SendIcon/>
                        <p>Send</p>
                    </div>
                </div>

            </div>
        </div>
        </Fade>
    )
}

export default Post
