import { Avatar } from '@material-ui/core'
import React from 'react'
import InputOptions from './InputOptions'
import './Post.css'

//icon import
import { FiThumbsUp } from 'react-icons/fi';
import { IoChatboxOutline } from 'react-icons/io5';
import { AiOutlineShareAlt } from 'react-icons/ai';
import { AiOutlineSend } from 'react-icons/ai';

const Post = ({name,description,message,photoUrl }) => {
    return (
        <div className="post">
            <div className="post_header">
                <Avatar/>
                <div className="post_info">
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
            </div>

            <div className="post-body">
                <p>{message}</p>
            </div>
            <div className="post_buttons">
                <InputOptions Icon={FiThumbsUp} title="Like" color="gray"/>
                <InputOptions Icon={IoChatboxOutline} title="Comment" color="gray"/>
                <InputOptions Icon={AiOutlineShareAlt} title="Share" color="gray"/>
                <InputOptions Icon={AiOutlineSend} title="Send" color="gray"/>
            </div>
        </div>
    )
}

export default Post