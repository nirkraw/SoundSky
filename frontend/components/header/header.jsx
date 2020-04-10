import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = ({ currentUser, logout, openModal }) => {
  const soundSkyLogo = <NavLink to="/" className="soundsky">SOUNDSKY</NavLink>   
  const sessionButtons = () => {
    return (
      <div className="top-banner">git 
        <header className="signedout-header">
          {soundSkyLogo}
          <div className ="session-buttons">
            <button className = "signin-button" onClick={() => openModal('login')}>Sign in</button>
            <button className= "signup-button" onClick={() => openModal('signup')}>Create account</button>
          </div>
        </header>
      </div>)
  };
  const signinHeader = (currentUser, logout) => {
    return(<header className= "signedin-header" >
      {soundSkyLogo}
      <div className= "right-banner">
        <NavLink to={`/users/${currentUser.id}`} className="user-show-link">{currentUser.username}</NavLink>
        <button className="logout-button" onClick={logout}>Log Out</button>
      </div>
    </header>)
  };

  return (currentUser ? signinHeader(currentUser, logout) : sessionButtons() )
};

export default Header;
