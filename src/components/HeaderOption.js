import { Avatar } from '@material-ui/core'
import React from 'react'
import '../styles/HeaderOption.css'

const HeaderOption = ({avatar,Icon,title}) => {
    return (
        <div className="header_option">
            {
                Icon && <Icon className="header_option_icon"/>
            }
            {
                avatar && <Avatar className="header_option_icon" src={avatar}/>
            }
            <h4 className="header_option_title">{title}</h4>
        </div>
    )
}

export default HeaderOption
