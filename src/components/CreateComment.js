import React, { useContext, useState, useRef, useEffect } from 'react';

import MainContext from "../context/MainContext";
import { useNavigate } from "react-router-dom";
import { addMessageCount, post } from "../plugins/http";
import Topic from './Topic';
import SingleDiscussion from './SingleDiscussion';
import SingleComment from './SingleComment';


const CreateComment = ({ id }) => {
  const nav = useNavigate()
  const { sessionUser, discussionId, replyComment, setReplyComment } = useContext(MainContext)


  // useEffect(() => { console.log('replyComment', replyComment) }, [])


  const commentTextRef = useRef()
  const commentPhotoRef = useRef()
  const commentVideoRef = useRef()
  const createComment = async () => {
    const data = {
      author: sessionUser.name,
      discussion: discussionId,
      inReply: replyComment._id,
      text: commentTextRef.current.value,
      photo: commentPhotoRef.current.value,
      video: commentVideoRef.current.value,
      time: new Date,
      originalComment: replyComment

    }
    const res = await post('createComment', data)
    if (res.error === true) return nav('/login')
    addMessageCount(sessionUser.name)
    commentTextRef.current.value = ''
    setReplyComment({})
    nav('/discussion')
  }

  return (

    <div className='d-flex f-column a-center' >

      <button style={{ width: '530px' }} onClick={() => nav('/discussion')}>Back</button>
      {replyComment._id !== undefined && <div><h5>Inreply to: {replyComment.Author} : {replyComment.text}</h5><h5>to be added more details</h5></div>}
      <input style={{ width: '530px' }} className='m10' type={'text'} ref={commentTextRef} placeholder={'Enter comment text'} />
      <input style={{ width: '530px' }} className='m10' type={'text'} ref={commentPhotoRef} placeholder={'Enter photo'} />
      <input style={{ width: '530px' }} className='m10' type={'text'} ref={commentVideoRef} placeholder={'Enter video'} />
      <button style={{ width: '530px' }} onClick={() => createComment()}>Send </button>
      {/* <h2> {topic} </h2>
      <h3>Select topic</h3>
      <button onClick={() => nav('/createDiscussion')}>New discussion</button>
      <button onClick={() => nav('/')}> Back to Topic Index</button> */}






    </div>
  );
};

export default CreateComment;