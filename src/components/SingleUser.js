import React, { useContext, useState, useRef, useEffect } from 'react';

import MainContext from "../context/MainContext";
import { useNavigate } from "react-router-dom";
import DiscussionPage from '../pages/DiscussionPage';
// import { post } from "../plugins/http";


const SingleUser = ({ user }) => {
  const nav = useNavigate()
  const { onlineUsers, sessionUser, setSender,
    setReciever } = useContext(MainContext)




  const sendMessage = () => {
    setSender(sessionUser.name)
    setReciever(user.name)
    nav('/pm')
  }

  return (

    <div className='topic d-flex a-center ' onClick={() => sendMessage()}>
      <h2 style={{ padding: '20px' }} >{user.name} </h2> {(onlineUsers.some(e => e.name === user.name)) && <div className='online'></div>} <img className='avatar' src={user.photo} alt="" />
      <h5>Messages sent: {user.messages}</h5>



    </div>
    //(vendors.some(e => e.Name === 'Magenic'))
  );
};

export default SingleUser;