import React from 'react';
import './homeCSS.css';

const About = () => {
  return (
    <div className="container">
      <div className="card">
        <h1>About Us </h1>
        <p>
          Greetings and blessings, dear visitor! We are friends united by our passion for authentic cuisine and a sincere love for our traditions.
        </p>
        <p>
          Our journey began with a simple idea: to create a space where cherished flavors of the past meet the practical needs of modern life, all served with warmth and a sprinkle of humor. 😊
        </p>
        <ul>
          <li><strong>Honor Our Heritage:</strong> A tribute to generations of tradition.</li>
          <li><strong>Inspire and Educate:</strong> Clear instructions, meaningful connections.</li>
          <li><strong>Foster Community:</strong> A space where warmth and respectful humor meet culinary excellence.</li>
        </ul>
        <p className="italic">
          We are honored to share our passion with you and look forward to growing together through the love of food, family, and faith. 🙏💫
        </p>
      </div>
    </div>
  );
};

export default About;
