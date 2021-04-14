import React from 'react'
import './Header.css'
// component import
import HeaderOption from './HeaderOption';
// icon import
import { FaLinkedin } from 'react-icons/fa';
import { AiOutlineSearch } from 'react-icons/ai';
import { AiFillHome } from 'react-icons/ai';
import { MdSupervisorAccount } from 'react-icons/md';
import { MdBusinessCenter } from 'react-icons/md';
import { BsChatSquareQuoteFill } from 'react-icons/bs';
import { MdNotificationsActive } from 'react-icons/md';



const Header = () => {
    return (
        <div className="header">
            {/* header part 1 */}
            <div className="header_left">
                <FaLinkedin className="header_linkedin_logo"/>
                <div className="header_search">
                    <AiOutlineSearch/>
                    <input type="text"/>
                </div>
            </div>
            {/* header part 2 */}
            <div className="header_right">
                <HeaderOption Icon={AiFillHome} title={"Home"}/>
                <HeaderOption Icon={MdSupervisorAccount} title={"My Network"}/>
                <HeaderOption Icon={MdBusinessCenter} title={"Jobs"}/>
                <HeaderOption Icon={BsChatSquareQuoteFill} title={"Messaging"}/>
                <HeaderOption Icon={MdNotificationsActive} title={"Notifications"}/>
                <HeaderOption avatar={"https://twitter.com/ShariarSheikh1/photo"} title={"Shariar-Nahid"}/>
            </div>
        </div>
    )
}

export default Header
