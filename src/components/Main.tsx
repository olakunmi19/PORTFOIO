import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import '../assets/styles/Main.scss';
import '../assets/images/Profile.jpg';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={require('../assets/images/Profile.jpg')} alt="Olagoke Mustapha" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/olakunmi19" target="_blank" rel="noreferrer"><GitHubIcon/></a>
          </div>
          <h1>Olagoke Mustapha</h1>
          <p>Mobile & Full Stack Developer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/olakunmi19" target="_blank" rel="noreferrer"><GitHubIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;