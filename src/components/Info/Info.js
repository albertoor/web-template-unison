import React from 'react';
import './Info.css';

// Icons
import {
  DiReact,
  DiNodejsSmall,
  DiJavascript1,
  DiHtml5,
  DiCss3Full,
  DiPython,
  DiDjango,
} from 'react-icons/di';

export default function Info() {
  return (
    <div className="info-container">
      <div className="text">
        <p>Hello, Good to see you 👀.</p>
        <p>I'm Alberto Ornelas and I like technology.</p>
        <p>I want to become a Full-Stack Web developer and I'm on it.</p>
      </div>

      <div className="programming-technologies">
        <div className="technologies-title">
          <h2>Programming Skills</h2>
        </div>
        <div className="technologies">
          <div className="technology">
            <DiReact color="#ffff" size="120px" />
            <h4>React Js</h4>
          </div>
          <div className="technology">
            <DiNodejsSmall color="#ffff" size="120px" />
            <h4>Node Js</h4>
          </div>
          <div className="technology">
            <DiJavascript1 color="#ffff" size="120px" />
            <h4>Javascript</h4>
          </div>
          <div className="technology">
            <DiHtml5 color="#ffff" size="120px" />
            <h4>HTML</h4>
          </div>
          <div className="technology">
            <DiCss3Full color="#ffff" size="120px" />
            <h4>CSS</h4>
          </div>
          <div className="technology">
            <DiPython color="#ffff" size="120px" />
            <h4>Python</h4>
          </div>
          <div className="technology">
            <DiDjango color="#ffff" size="120px" />
            <h4>Django</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
