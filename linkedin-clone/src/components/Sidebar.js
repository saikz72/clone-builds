import React from 'react';
import '../styles/sidebar.css';
import SidebarTop from './SidebarTop';

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/** top section  */}
      <SidebarTop />

      {/** bottom section  */}
    </div>
  );
};

export default Sidebar;
