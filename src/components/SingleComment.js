import React, { useContext, useState, useRef } from 'react';

import MainContext from "../context/MainContext";
import { useNavigate } from "react-router-dom";
import DiscussionPage from '../pages/DiscussionPage';
import { post } from '../plugins/http';
// import { post } from "../plugins/http";


const SingleComment = ({ comment }) => {
  const nav = useNavigate()
  const { setReplyComment } = useContext(MainContext)
  // const nav = useNavigate()
  // const { topic, setTopic } = useContext(MainContext)
  const reply = () => {
    setReplyComment(comment)
    nav('/message')
  }
  // const getSingleComment = async (id) => {
  //   const data = { _id: id }
  //   const res = await post('getSingleComment', data)
  // }

  return (

    <div className='comment d-flex a-center ' onClick={() => reply('comment id in DB needed')}>
      {comment.originalComment !== undefined && <div>  <h5>Reply to: {comment.originalComment.author}</h5> <h5>Text {comment.originalComment.text}</h5>

      </div>}
      {/* <h2 style={{ padding: '20px' }} >{discussion.title}</h2> <h5>Posted by: {discussion.author} </h5>
      <h5>{discussion.date}</h5> */}
      <h5>{comment.author}</h5>
      <h5>{comment.time}</h5>
      {comment.text && <h5>{comment.text}</h5>}
      {comment.photo && <div className='comment-photo' style={{ backgroundImage: `url("${comment.photo}")` }}></div>}
      {/* {comment.photo && <h5>{comment.photo}</h5>}
      {comment.video && <h5>{comment.video}</h5>} */}
      {/* {comment.video && <video src={comment.video} />} */}

      <button onClick={() => reply()}>Reply</button>
    </div>

  );
};

export default SingleComment;