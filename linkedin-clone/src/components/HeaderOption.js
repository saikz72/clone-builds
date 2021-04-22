import { Avatar } from '@material-ui/core';
import React from 'react';
import '../styles/headerOption.css';

const HeaderOption = ({ avatar, Icon, title }) => {
  return (
    <div className="headerOption">
      {Icon && <Icon className="headerOption__icon" />}
      <h3 className="headerOption__title">{title}</h3>
      {avatar && <Avatar className="headerOption__icon" src={avatar} />}
    </div>
  );
};

export default HeaderOption;
