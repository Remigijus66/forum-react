import React from 'react';
import Discussions from '../components/Disussions';
import Nav from '../components/Navigate';




const TopicPage = () => {
  return (
    <div className="p50">
      <Nav />
      {/* <h2> Topic Page</h2> */}
      {/* <Login /> */}
      <Discussions />
    </div>
  );
};

export default TopicPage;