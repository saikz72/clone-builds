import React from 'react';
import '../styles/header.css';
import { Search, Home, SupervisorAccount, Notifications, Work, Sms } from '@material-ui/icons';
import logo from '../assets/linkedin-logo.png';
import HeaderOption from './HeaderOption';
import profileImage from '../assets/flag.jpeg';

export default function Header() {
  return (
    <div className="header">
      {/* left side of header */}
      <div className="header__left">
        <img src={logo} alt="Logo"></img>

        <div className="header__search">
          <Search />
          <input type="text" />
        </div>
      </div>

      {/* right side of header */}
      <div className="header__right">
        <HeaderOption title="Home" Icon={Home} />
        <HeaderOption title="My Network" Icon={SupervisorAccount} />
        <HeaderOption title="Jobs" Icon={Work} />
        <HeaderOption title="Messaging" Icon={Sms} />
        <HeaderOption title="Notification" Icon={Notifications} />
        <HeaderOption avatar={profileImage} title="me" />
      </div>
    </div>
  );
}
