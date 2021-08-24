import React from 'react';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav class="nav-container">
      <div class="home-section">
        <a href="/">Home 🏯</a>
      </div>
      <div class="nav-sites">
        <ul>
          <li class="current-site">
            <a href="#" target="_blank" rel="noopener noreferrer">
              Heroku
            </a>
          </li>
          <li>
            <a href="#" target="_blank" rel="noopener noreferrer">
              000webhost
            </a>
          </li>

          <li>
            <a href="#" target="_blank" rel="noopener noreferrer">
              Firebase
            </a>
          </li>
          <li>
            <a href="#" target="_blank" rel="noopener noreferrer">
              Replit
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
