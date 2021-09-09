import React from 'react';
import "./Projects.css";


export default function Projects() {
  return (
    <div className="projects">
      <h1>Personal Projects</h1>
      <ul className="projects-links">
      <li>
        <a href="https://cat-facts-application.herokuapp.com" target="_blank">Cats Facts App</a>
      </li>
      <li>
        <a href="https://react-random-user-generator.herokuapp.com" target="_blank">User Random App</a>
      </li>
      <li>
        <a href="https://counter-react-a.herokuapp.com" target="_blank">React Counter App</a>
      </li>
      <li>
        <a href="https://react-redux-calculator-app.herokuapp.com" target="_blank">Calculator Redux App</a>
      </li>
      <li>
        <a href="https://react-binary-to-decimal-app.stackblitz.io" target="_blank">Binary to Decimal App</a>
      </li>
      <li>
        <a href="https://react-quiz-application.stackblitz.io" target="_blank">Quiz App</a>
      </li>
    </ul>
    </div>
  );
}
