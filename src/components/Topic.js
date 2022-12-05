import React, { useContext, useState, useRef } from 'react';

import MainContext from "../context/MainContext";
import { useNavigate } from "react-router-dom";
// import { post } from "../plugins/http";


const Topic = ({ theme }) => {
  const nav = useNavigate()
  const { topic, setTopic } = useContext(MainContext)
  const toTopic = () => {
    setTopic(theme)
    nav('/topic')
    console.log(topic)
  }

  return (

    <div className='topic d-flex a-center ' onClick={toTopic}>
      <h2 style={{ padding: '20px' }} >{theme}</h2>
      <h5>number of discussiions to be added</h5>
    </div>
  );
};

export default Topic;