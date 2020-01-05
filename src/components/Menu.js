import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
  const activeStyle = {
    color: 'green',
    fontSize: '2rem'
  };

  return (
    <div>
      <ul>
        <li><NavLink exact to="/" activeStyle={activeStyle}>Home</NavLink></li>
        <li><NavLink exact to="/playlist" activeStyle={activeStyle}>Playlist Lobby</NavLink></li>
        <li><NavLink to="/playlist/4886" activeStyle={activeStyle}>Playlist 4886</NavLink></li>
      </ul>
      <hr />
    </div>
  );
};

export default Menu;