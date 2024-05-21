import React from 'react';
import Navbar from '../components/Navbar';

function Homepage() {
  return (
    <div>
      <Navbar />
      <div className="font-sans p-8">
        <h1 className="text-center text-2xl mb-8">About Us</h1>
        <p className="text-center text-lg mb-4">
          Our news app brings you the latest and most relevant news from around the world. We strive to provide
          accurate and up-to-date information to keep you informed.
        </p>
        <p className="text-center text-lg">
          Contact us at <a href="mailto:support@example.com" className="text-blue-500">support@example.com</a> for any inquiries or feedback.
        </p>
      </div>
    </div>
  );
}

export default Homepage;
