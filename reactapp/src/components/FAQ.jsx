import React from "react";
import "../assets/css/FAQ.css";

const TermsAndConditions = () => {
  return (
    <div className="terms-container">
      <div className="terms-header">
        <h1>Frequently Asked Questions</h1>
      </div>

      <div className="terms-section">
        <div className="terms-section-header">
          <h2>What is meditation, and why is it beneficial?</h2>
        </div>
        <div className="terms-section-content">
          <p>
          Meditation is a practice that involves focusing your mind on a particular object, thought, or activity to achieve mental clarity, relaxation, and emotional balance. 
          It offers numerous benefits, including stress reduction, improved concentration, better emotional well-being, and enhanced self-awareness
          </p>
        </div>
      </div>

      <div className="terms-section">
        <div className="terms-section-header">
          <h2>How do I get started with meditation as a beginner?</h2>
        </div>
        <div className="terms-section-content">
          <p>
          To start meditating as a beginner, you can explore our beginner-friendly guided meditation sessions. 
          These sessions provide step-by-step instructions and techniques to help you get started
          </p>
        </div>
      </div>

      <div className="terms-section">
        <div className="terms-section-header">
          <h2>What types of meditation techniques are available in the app?</h2>
        </div>
        <div className="terms-section-content">
          <p>
          Our app offers a variety of meditation techniques, including mindfulness meditation, loving-kindness meditation, body scan, breath awareness, and more.
           You can choose the technique that resonates with you the most.
          </p>
        </div>
      </div>

      <div className="terms-section">
        <div className="terms-section-header">
          <h2>How long should I meditate each day?</h2>
        </div>
        <div className="terms-section-content">
          <p>
          The ideal meditation duration varies from person to person. For beginners, it's recommended to start with 5-10 minutes per day and gradually increase the duration as you become more comfortable with the practice. 
          Ultimately, the goal is to meditate for 20-30 minutes daily
          </p>
        </div>
      </div>

      <div className="terms-section">
        <div className="terms-section-header">
          <h2>Can meditation help with stress and anxiety?</h2>
        </div>
        <div className="terms-section-content">
          <p>
          Yes, meditation is known to be effective in reducing stress and anxiety. Regular practice can calm the mind, reduce the body's stress response, and provide mental clarity to better manage challenging situations.
          </p>
        </div>
      </div>

      <div className="terms-section">
        <div className="terms-section-header">
          <h2>Is meditation suitable for children or teenagers?</h2>
        </div>
        <div className="terms-section-content">
          <p>
          Yes, meditation can be beneficial for individuals of all ages, including children and teenagers.
           We offer guided meditations specifically designed for younger users to help them develop mindfulness and emotional resilience.
          </p>
        </div>
      </div>

      
      <div>
        <a href="/home">Back</a>
      </div>
    </div>
  );
};

export default TermsAndConditions;