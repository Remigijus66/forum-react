import React from 'react';
import CreateDiscussion from '../components/CreateDiscussion';
import Nav from '../components/Navigate';




const CreateDiscussionPage = () => {
  return (
    <div className="p50">
      <Nav />

      <CreateDiscussion />
    </div>
  );
};

export default CreateDiscussionPage;