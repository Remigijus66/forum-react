import React, { useContext, useState, useRef, useEffect } from 'react';

import MainContext from "../context/MainContext";
import { useNavigate } from "react-router-dom";
import { addMessageCount, post } from "../plugins/http";
import Topic from './Topic';
import SingleDiscussion from './SingleDiscussion';
import SingleComment from './SingleComment';


const DiscussionComments = () => {
  const [commentsIndex, setCommentsIndex] = useState(1)
  const nav = useNavigate()
  const { sessionUser, discussionId, discussion, comments, setComments } = useContext(MainContext)


  useEffect(() => {

    const getComments = async (id) => {
      const res = await post('getComments', { discussion: id, commentsIndex: commentsIndex })
      console.log(res)
      setComments(res.data)
    }
    setCommentsIndex(1)
    getComments(discussionId)


  }, [])

  useEffect(() => {

    const getComments = async (id) => {
      const res = await post('getComments', { discussion: id, commentsIndex: commentsIndex })
      console.log(res)
      setComments(res.data)
    }

    getComments(discussionId)


  }, [commentsIndex])

  const next = () => {
    setCommentsIndex(commentsIndex + 5)


  }
  const previous = () => {
    setCommentsIndex(commentsIndex - 5)
  }


  return (

    <div className='d-flex f-column a-center' >

      <button style={{ width: '530px' }} onClick={() => nav('/topic')}>Back</button>

      <button style={{ width: '530px' }} onClick={() => nav('/message')}>Create new Comment </button>
      {/* <h2> {topic} </h2>
      <h3>Select topic</h3>
      <button onClick={() => nav('/createDiscussion')}>New discussion</button>
      <button onClick={() => nav('/')}> Back to Topic Index</button> */}
      <div className='comment d-flex a-center '><h2>{discussion.title}</h2>
        <h5>Discussion started by {discussion.author}</h5>
        <h5> on {discussion.date}</h5>
        <h5>{discussion.description}</h5>

      </div>

      {comments.length !== 0 && comments.map((x, i) => <SingleComment key={i} comment={x} />)}
      {comments.length === 0 && <h5> No Messages on this discussion </h5>}


      {commentsIndex > 5 && <h5 onClick={previous} style={{ cursor: 'pointer' }}>Previous Page</h5>}

      <h5 >Comments: {commentsIndex} to {commentsIndex + 4}</h5>
      <h5 onClick={next} style={{ cursor: 'pointer' }}>Next Page</h5>


    </div>
  );
};

export default DiscussionComments;