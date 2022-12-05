import React, { useContext, useState, useRef, useEffect } from 'react';

import MainContext from "../context/MainContext";
import { useNavigate } from "react-router-dom";
import { addMessageCount, post } from "../plugins/http";
import Topic from './Topic';
import SingleDiscussion from './SingleDiscussion';
import SingleComment from './SingleComment';


const PersonalMessage = () => {
  const nav = useNavigate()
  const { sender, reciever } = useContext(MainContext)



  const messageTextRef = useRef()
  const messagePhotoRef = useRef()
  const messageVideoRef = useRef()
  const createMessage = async () => {
    const data = {
      from: sender,
      to: reciever,
      text: messageTextRef.current.value,
      photo: messagePhotoRef.current.value,
      video: messageVideoRef.current.value,
      time: new Date,


    }
    // const res = await post('createComment', data)
    // if (res.error === true) return nav('/login')

    // messageTextRef.current.value = ''
    console.log(data)
    nav('/leaders')
  }

  return (

    <div className='d-flex f-column a-center' >
      <button style={{ width: '530px' }} onClick={() => nav('/leaders')}>Back</button>
      <h5>From:  {sender}</h5>
      <h5>To:  {reciever}</h5>


      <input style={{ width: '530px' }} className='m10' type={'text'} ref={messageTextRef} placeholder={'Enter comment text'} />
      <input style={{ width: '530px' }} className='m10' type={'text'} ref={messagePhotoRef} placeholder={'Enter photo'} />
      <input style={{ width: '530px' }} className='m10' type={'text'} ref={messageVideoRef} placeholder={'Enter video'} />
      <button style={{ width: '530px' }} onClick={() => createMessage()}>Send </button>
      {/* <h2> {topic} </h2>
      <h3>Select topic</h3>
      <button onClick={() => nav('/createDiscussion')}>New discussion</button>
      <button onClick={() => nav('/')}> Back to Topic Index</button> */}






    </div>
  );
};

export default PersonalMessage;