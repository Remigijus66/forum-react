import React from 'react';
import CreateComment from '../components/CreateComment';
import Nav from '../components/Navigate';




const MessagePage = () => {
  return (
    <div className="p50">
      <Nav />

      <CreateComment />
    </div>
  );
};

export default MessagePage;