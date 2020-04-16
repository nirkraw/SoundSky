import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = ({logout, openModal, currentUser }) => {
  const soundSkyLogo = <NavLink to="/" className="soundsky">SOUNDSKY</NavLink>   
  const sessionButtons = () => {
    if(location.pathname === "/") {
      return (
          <header className="signedout-header">
            {soundSkyLogo}
            <div className ="session-buttons">
              <button className = "signin-button" onClick={() => openModal('login')}>Sign in</button>
              <button className= "signup-button" onClick={() => openModal('signup')}>Create account</button>
            </div>
          </header>
      )
    } else {
      return (
        <div></div>
      )
    }
  };
  const signinHeader = (currentUser, logout) => {
    return(<header>
      <div className= "signedin-header" >
        <NavLink to="/" ><div className="logo-container">
          <img className="cloud-logo" src="/assets/music-cloud" alt="cloud_logo" />
        </div></NavLink> 
            <div className="home">
          <NavLink to="/">Home</NavLink> 
            </div>
            <div className="linkedin">
          <a href="https://www.linkedin.com/in/nir-krawczyk-b001a5145" target="blank">LinkedIn</a>
            </div>
            <div className="nir-kay">
          <a href="https://nirkaymusic.com/" target="_blank">Nir Kay</a>
            </div>
        <div className= "right-banner">
          <NavLink to="/upload" className="nav-bar-upload">Upload</NavLink> 
          <img className="nav-bar-artist-pic" src={currentUser.profilePhotoUrl} alt="artist-pic"/>
          <NavLink to={`/users/${currentUser.id}`} className="user-show-link">{currentUser.username}</NavLink>
          <NavLink to="/" className="signout-button" onClick={logout}>Sign out</NavLink>
        </div>
      </div> 
    </header>)
  };
  if (currentUser) {
    return signinHeader(currentUser, logout);
  } else {
    return sessionButtons(); 
  }
};

export default Header;
