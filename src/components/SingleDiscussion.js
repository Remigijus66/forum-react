import React, { useContext, useState, useRef } from 'react';

import MainContext from "../context/MainContext";
import { useNavigate } from "react-router-dom";
import DiscussionPage from '../pages/DiscussionPage';
// import { post } from "../plugins/http";


const SingleDiscussion = ({ discussion }) => {
  const nav = useNavigate()
  const { setDiscussionId, setDiscussion } = useContext(MainContext)

  const toMessages = (d) => {

    // setTopic(theme)
    setDiscussionId(d._id)
    setDiscussion(d)
    console.log(d)
    nav('/discussion')
  }
  //toMessages(discussion._id)
  return (

    <div className='topic d-flex a-center ' onClick={() => toMessages(discussion)}>
      <h2 style={{ padding: '20px' }} >{discussion.title}</h2> <h5>Posted by: {discussion.author} </h5>
      <h5>{discussion.date}</h5>


    </div>

  );
};

export default SingleDiscussion;