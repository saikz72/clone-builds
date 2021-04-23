import { Avatar } from '@material-ui/core';
import React from 'react';
import '../styles/sidebarTop.css';
import backgroundImage from '../assets/backgroundImage.jpeg';

export default function SidebarTop() {
  const recentItem = (topic) => {
    return (
      <div className="sidebarTop__recentItem">
        <span className="sidebarTop__hash">#</span>
        <p>{topic}</p>
      </div>
    );
  };

  return (
    <div className="sidebarTop">
      <div className="sidebarTop__p">
        <img src={backgroundImage} alt=""></img>
        <Avatar className="sidebarTop__avatar" />
        <h2>Saikou Ceeay</h2>
        <h4>FBU Engineering Intern at Facebook</h4>
      </div>

      <div className="sidebarTop__stats">
        <div className="sidebarTop__stat">
          <p>Who viewed you</p>
          <p className="sidebarTop__statNumber">94</p>
        </div>
        <div className="sidebarTop__stat">
          <p>Connections</p>
          <p className="sidebarTop__statNumber">440</p>
        </div>
      </div>

      <div className="sidebarTop__bottom">
        <p>Recent</p>
        {recentItem('Microsoft')}
        {recentItem('programming')}
        {recentItem('cloudcomputing')}
      </div>
    </div>
  );
}
