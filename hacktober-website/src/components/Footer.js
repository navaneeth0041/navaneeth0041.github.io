import React from 'react';
import './footer.css';

function Footer() {
  return (
    <footer className="footer section">
      <div className="footercontents">
        <h3>Support Open Source With</h3>
        <div className="foss-logo">
        <img src={`${process.env.PUBLIC_URL}/assets/amfoss_logo.png`} alt="amfoss logo" className="logo" />
        </div>
        <p>We'll see you there!</p>
        <div className="foot-icon">
          <a href="https://hacktoberfest.com"><img src={`${process.env.PUBLIC_URL}/assets/hacktober_logo.png`} alt="hacktober logo"/></a>
          <a href="https://github.com"><img src={`${process.env.PUBLIC_URL}/assets/github.png`} alt="github logo"/></a>
          <a href="https://digitalocean.com"><img src={`${process.env.PUBLIC_URL}/assets/channels4_profile-removebg-preview 1.png`} alt="digital ocean"/></a>
        </div></div>
    </footer>
  );
}

export default Footer;
