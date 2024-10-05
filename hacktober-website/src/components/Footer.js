import React from 'react';
import './footer.css';

function Footer() {
  return (
    <footer className="footer section">
      <div className="footercontents">
        <h3>Support Open Source With</h3>
        <div className="foss-logo">
          <img src="/assets/amfoss_logo.png" alt="fosslogo" />
        </div>
        <p>We'll see you there!</p>
        <div className="foot-icon">
          <a href="https://hacktoberfest.com"><img src="/assets/hacktober_logo.png" alt="hackicon" /></a>
          <a href="https://github.com"><img src="/assets/github.png" alt="GitHub" /></a>
          <a href="https://digitalocean.com"><img src="/assets/channels4_profile-removebg-preview 1.png" alt="icon3" /></a>
        </div></div>
    </footer>
  );
}

export default Footer;
