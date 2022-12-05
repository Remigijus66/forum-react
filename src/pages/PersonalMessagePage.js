import React from 'react';
import Nav from '../components/Navigate';
import PersonalMessage from '../components/PersonalMessage';




const PersonalMessagePage = () => {
  return (
    <div className="p50">
      <Nav />
      <PersonalMessage />
      <h2>Personal message Page</h2>
      {/* <Login /> */}
    </div>
  );
};

export default PersonalMessagePage;