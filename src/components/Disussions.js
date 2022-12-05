import React, { useContext, useState, useRef, useEffect } from 'react';

import MainContext from "../context/MainContext";
import { useNavigate } from "react-router-dom";
import { post } from "../plugins/http";
import Topic from './Topic';
import SingleDiscussion from './SingleDiscussion';


const Discussions = () => {
  const nav = useNavigate()
  const { topic, discussions, setDiscussions } = useContext(MainContext)


  useEffect(() => {
    const getDiscussions = async (t) => {
      const res = await post('getDiscussions', { topic: t })
      console.log(res)
      setDiscussions(res.data)
    }
    getDiscussions(topic)

  }, [])





  return (

    <div className='d-flex f-column a-center' >

      <h2> {topic} </h2>
      <h3>Select discussion</h3>
      <button style={{ width: '530px' }} onClick={() => nav('/createDiscussion')}>New discussion</button>
      <button style={{ width: '530px' }} onClick={() => nav('/')}> Back to Topic Index</button>

      {discussions.length !== 0 && discussions.map((x, i) => <SingleDiscussion key={i} discussion={x} />)}
      {discussions.length === 0 && <h5> No Discussions on this topic </h5>}




    </div>
  );
};

export default Discussions;