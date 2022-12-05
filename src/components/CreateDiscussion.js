import React, { useContext, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MainContext from "../context/MainContext";
import { addMessageCount, post } from '../plugins/http';






const CreateDiscussion = () => {


  const titleRef = useRef()
  const descriptionRef = useRef()

  const nav = useNavigate()
  const { sessionUser, topic, } = useContext(MainContext)


  const createDiscussion = async () => {
    const data = {
      author: sessionUser.name,
      topic: topic,
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      date: new Date
    }
    // console.log(data)
    const res = await post('createDiscussion', data)
    if (res.error === true) return nav('/login')
    // console.log(res)
    addMessageCount(sessionUser.name)
    titleRef.current.value = ''
    descriptionRef.current.value = ''
    nav('/topic')
  }

  return (
    <div>

      <button style={{ width: '530px' }} onClick={() => nav('/topic')}>Back</button>
      <h2>{topic}</h2>
      <div className=' d-flex f-wrap  a-center'>

        {/* <div className='profile-card d-flex f-wrap f-column a-center ' >
          <h5>Your profile</h5>
          <div className='image-container' style={{ backgroundImage: `url("${userImage}")` }}></div>
          <h5>Breed: {sessionUser.breed} </h5>
          <h5>Color: {sessionUser.color} </h5>
          <h5>Hair:{sessionUser.hair} </h5> */}



      </div>
      <div className='profile-card d-flex f-wrap f-column a-center ' >

        <h5>Create discussion</h5>

        {/* <div className='image-container' style={{ backgroundImage: `url("${userImage}")` }}></div> */}
        <h3>Create discussion</h3>
        <h5>Discussion  title</h5>
        <input className='m10' type={'text'} ref={titleRef} placeholder={'Enter discussion title'} />
        <h5>Discussion description </h5>
        <input className='m10' type={'text'} ref={descriptionRef} placeholder={'Enter discussion description'} />


        <button onClick={createDiscussion}>Create</button>


        {/* <h5> Time of auction: </h5>
          <input type={'datetime-local'} ref={endTimeRef} />

          <h5>Initial price € </h5>
          <input className='m10' type={'number'} ref={auctionPriceRef} placeholder={'Enter price'} />
          <button onClick={validate}>Validate</button> */}


        {/* <h5> {auction.title} </h5>
      <h5>Provider: {auction.name}</h5>
      <h5>Start price € {auction.startPrice
      }</h5> */}

        {/* <h5>Time left: {timeDistance(auction.time, Date.parse(new Date))}</h5>
      {auction.bids.length > 0 && <h5>Last price € {auction.bids[auction.bids.length - 1].price}</h5>}
      <h5>Bids placed {auction.bids.length}</h5> */}

      </div>
    </div>

  );
};



export default CreateDiscussion;