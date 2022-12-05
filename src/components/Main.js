import React, { useContext, useState, useRef } from 'react';

import MainContext from "../context/MainContext";
import { useNavigate } from "react-router-dom";
import { post } from "../plugins/http";
import Topic from './Topic';


const Main = () => {

  const topics = ['Sausages', 'Cats', 'Sticks and Balls']


  return (

    <div className='d-flex f-column a-center' >

      <h2> Worlds first noble dogs's forum </h2>
      <h3>Select topic</h3>
      {topics.map((x, i) => <Topic key={i} theme={x} />)}




    </div>
  );
};

export default Main;