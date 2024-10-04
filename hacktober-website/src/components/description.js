import React from 'react';
import './description.css';

function Description() {
  return (
    <div className="description-container">
      <div className="greensquares">
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
      </div>
      <div className="text-container">
        <h1 className="date">21 & 22 OCTOBER</h1>
        <p className="paragraph">
          <strong>Hacktoberfest</strong> is an annual event hosted by
          <a href="https://www.digitalocean.com/" target="_blank" rel="noopener noreferrer"> DigitalOcean</a> and
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer"> GitHub</a> promoting and supporting Open Source collaboration. It’s all about encouraging meaningful contributions to open source.
        </p>
        <p className="paragraph">
          Join the Amritapuri Hacktoberfest hosted by <a href="https://amfoss.in" target="_blank" rel="noopener noreferrer">amFOSS</a>. Don’t miss this exciting opportunity to collaborate, code, and celebrate open source!
        </p>
      </div>
    </div>
  );
}

export default Description;
