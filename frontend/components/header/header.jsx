import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = ({ currentUser, logout, openModal }) => {
  const soundSkyLogo = <NavLink to="/" className="soundsky">SOUNDSKY</NavLink>   
  const sessionButtons = () => {
    return (<header className="signedout-header">
      {soundSkyLogo}
        <div className ="session-buttons">
          <button className = "signin-button" onClick={() => openModal('login')}>Sign In</button>
          <button className= "signup-button" onClick={() => openModal('signup')}>Create Account</button>
        </div>
    </header>)
  };
  const signinHeader = (currentUser, logout) => {
    return(<header className= "signedin-header" >
      {soundSkyLogo}
      <div className= "right-banner">
        {/* CHANGE TO SHOW PAGE WHEN IT"S READY  */}
        <NavLink to="/" className="user-show-link">{currentUser.username}</NavLink>
        {/* CHANGE TO USER SHOW PAGE WHEN IT"S READY ^^^ */}
        <button className="logout-button" onClick={logout}>Log Out</button>
      </div>
    </header>)
  };

  return (currentUser ? signinHeader(currentUser, logout) : sessionButtons() )
};

export default Header;
