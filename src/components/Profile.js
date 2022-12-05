import React, { useContext, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MainContext from "../context/MainContext";

import { checksesssion, post, timeDistance } from "../plugins/http";




const Profile = () => {


  const photoRef = useRef()
  const breedRef = useRef()
  const colorRef = useRef()
  const hairRef = useRef()
  const nav = useNavigate()
  const { sessionUser, userImage, setSessionUser, setuserImage } = useContext(MainContext)


  const updateProfile = async () => {
    const data = {
      name: sessionUser.name,
      photo: photoRef.current.value,
      breed: breedRef.current.value,
      color: colorRef.current.value,
      hair: hairRef.current.value,
    }
    const res = await post('updateprofile', data)

    if (res.error === true) return nav('/login')

    setSessionUser(res.data)
    setuserImage(res.data.photo)
    console.log(res)

    photoRef.current.value = ''
    breedRef.current.value = ''
    colorRef.current.value = ''
    hairRef.current.value = ''
  }

  return (
    <div>

      <button style={{ width: '530px' }} onClick={() => nav('/')}>Back</button>
      <div className=' d-flex f-wrap  a-center'>

        <div className='profile-card d-flex f-wrap f-column a-center ' >
          <h5>Your profile</h5>
          <div className='image-container' style={{ backgroundImage: `url("${userImage}")` }}></div>
          <h5>Breed: {sessionUser.breed} </h5>
          <h5>Color: {sessionUser.color} </h5>
          <h5>Hair:{sessionUser.hair} </h5>
          <h5> Messages sent: { }</h5>


          {/* <h5> {auction.title} </h5>
      <h5>Provider: {auction.name}</h5>
      <h5>Start price € {auction.startPrice
      }</h5> */}

          {/* <h5>Time left: {timeDistance(auction.time, Date.parse(new Date))}</h5>
      {auction.bids.length > 0 && <h5>Last price € {auction.bids[auction.bids.length - 1].price}</h5>}
      <h5>Bids placed {auction.bids.length}</h5> */}

        </div>
        <div className='profile-card d-flex f-wrap f-column a-center ' >
          <h5>Update profile</h5>

          {/* <div className='image-container' style={{ backgroundImage: `url("${userImage}")` }}></div> */}
          <h3>Enter profile details:</h3>
          <h5>Photo </h5>
          <input className='m10' type={'text'} ref={photoRef} placeholder={'Enter your photo'} />
          <h5> Breed </h5>
          <input type={'text'} ref={breedRef} placeholder={'Enter breed'} />
          <h5> Color </h5>
          <input type={'text'} ref={colorRef} placeholder={'Enter color'} />
          <h5> Hair </h5>
          <input type={'text'} ref={hairRef} placeholder={'Enter hair'} />
          <button onClick={updateProfile}>Update</button>


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
    </div>
  );
};



export default Profile;