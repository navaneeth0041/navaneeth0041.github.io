import React from "react";
import amfossLogo from '../../assets/amfoss_logo.png';
import amritaLogo from '../../assets/amrita_logo.png';
import hacktoberLogo from '../../assets/hacktoberfest.png';
import '/home/navne/HacktoberFest-Website/hacktober-website/src/components/Header/Header.css';
import Countdown from "../Countdown/CountdownTimer";


function Header(){
    const eventDate = "2024-10-21";
    return(
        <div className="header">
            <div className="header-top">
                <img src = {amfossLogo} alt = "amfoss logo" className="logo"/>
                <img src = {amritaLogo} alt="amrita logo" className="logo"/>
            </div>
            <div className="header-main">
                <div className="left-content">
                <img src = {hacktoberLogo} alt="hacktoberfest logo" className="mainLogo"/>
                <p className="subtext"> It's that time of year again.<br/>HacktoberFest is nearly upon us!</p>
                <button className="register-btn">Register Now</button>

                </div>
                <div className="right-content">
                    <Countdown eventDate={eventDate}/>
                </div>
            </div>
            
        </div>
    )
}

export default Header;