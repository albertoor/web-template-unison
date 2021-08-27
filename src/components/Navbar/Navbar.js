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
          <li>
            <a
              href="https://albertoornelasdev.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Heroku
            </a>
          </li>
          <li>
            <a
              href="https://albertoornelasdev.000webhostapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              000webhost
            </a>
          </li>

          <li>
            <a
              href="https://albertoornelasdev.stackblitz.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              StackBlitz
            </a>
          </li>
          <li>
            <a
              href="https://my-site.aornelasdev.repl.co"
              target="_blank"
              rel="noopener noreferrer"
            >
              Replit
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
