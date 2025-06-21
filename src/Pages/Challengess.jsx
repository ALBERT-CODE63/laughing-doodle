import React, { useState } from 'react';
import '../Css/challenges.css';

import AlertTypes from '../assets/Alert TYPES.jpg';
import AlertQueue from '../assets/Alert Queu.jpg';
import Phishing from '../assets/Phising.jpg';
import SecurityDescriptio from '../assets/Security.jpg';

const challenges = [
  {
    title: '1. Alert Types Overview',
    description:
      'This section categorizes alerts into Phishing, Spam, and Malware, enabling SOC analysts to quickly assess the nature of incoming threats. Each alert type is tagged with severity levels (low, medium, high) to prioritize response and monitor evolving attack patterns in real-time.',
    image: AlertTypes,
    status: 'Completed'
  },
  {
    title: '2. Alert Queue & Activity Log',
    description:
      'Displays a chronological queue of active alerts, complete with timestamps, IP sources, hostnames, and threat scores. This real-time feed helps analysts triage incidents efficiently, track new threats, and correlate suspicious behavior across the network.',
    image: AlertQueue,
    status: 'Completed'
  },
  {
    title: '3. Dashboard Introduction: What is Phishing?',
    description:
      'An educational panel introducing phishing as a form of social engineering attack designed to steal credentials or deliver malware. It outlines common indicators (e.g., spoofed emails, suspicious links) and reinforces the importance of real-time monitoring and human oversight in phishing defense.',
    image: Phishing,
    status: 'Completed'
  },
  {
    title: '4. Phishing Incident Deep Dive',
    description:
      'Zooms into a flagged phishing attempt, presenting detailed metadata such as suspicious IP addresses, compromised endpoints, and associated user accounts. Suggested remediation steps (e.g., isolate host, reset credentials) help accelerate response times.',
    image: SecurityDescriptio,
    status: 'Completed'
  }
];

const LabChallenges = () => {
  const [modalImage, setModalImage] = useState(null);

  return (
    <div className='challenges-page'>
      <div className='challenges'>
        <h1 className='challenges__title'>Lab Challenges & Hackathons</h1>
        <div className='challenges__list'>
          {challenges.map((challenge, index) => (
            <div className='challenge__card' key={index}>
              {challenge.image && (
                <img
                  src={challenge.image}
                  alt={challenge.title}
                  className='challenge__image'
                  onClick={() => setModalImage(challenge.image)}
                />
              )}
              <h2>{challenge.title}</h2>
              <p className='challenge__status'>
                <strong>Status:</strong> {challenge.status}
              </p>
              <p>{challenge.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modalImage && (
        <div className='image-modal' onClick={() => setModalImage(null)}>
          <div className='image-modal__content'>
            <img src={modalImage} alt='Zoomed' />
          </div>
        </div>
      )}
    </div>
  );
};

export default LabChallenges;
