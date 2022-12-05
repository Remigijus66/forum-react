import React from 'react';
import DiscussionComments from '../components/DiscussionComments';
import Nav from '../components/Navigate';




const DiscussionPage = () => {
  return (
    <div className="p50">
      <Nav />

      <DiscussionComments />
    </div>
  );
};

export default DiscussionPage;