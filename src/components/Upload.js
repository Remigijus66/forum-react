// import React, { useContext, useState, useRef } from 'react';
// import { useNavigate } from "react-router-dom";
// import MainContext from "../context/MainContext";
// import { post, timeDistance } from "../plugins/http";
// import io from "socket.io-client"

// const socket = io.connect('http://localhost:4001');


// const Upload = () => {
//   const nav = useNavigate()
//   const [verified, setVerified] = useState(false)

//   const { image, setImage,
//     title, setTitle,
//     time, setTime,
//     price, setPrice, } = useContext(MainContext)


//   const auctionImageRef = useRef()
//   const auctionTitleRef = useRef()
//   const auctionPriceRef = useRef()
//   const endTimeRef = useRef()


//   const validate = async () => {
//     const data = {
//       image: auctionImageRef.current.value,
//       title: auctionTitleRef.current.value,
//       time: endTimeRef.current.value,
//       price: auctionPriceRef.current.value
//     }
//     const res = await post('validate', data)
//     console.log(res)
//     if (res.message === 'you are not logged in') return nav('/')
//     if (res.error) return setVerified(false)
//     setImage(res.data.image)
//     setTitle(res.data.title)
//     setTime(res.data.time)
//     setPrice(res.data.price)
//     setVerified(true)

//   }

//   const upload = async () => {
//     const data = {
//       image: image,
//       title: title,
//       time: time,
//       price: price
//     }
//     const res = await post('upload', data)
//     if (res.error === true) return nav('/')
//     socket.emit("upload", 'upload')

//     console.log(res)

//     auctionImageRef.current.value = ''
//     auctionTitleRef.current.value = ''
//     endTimeRef.current.value = ''
//     auctionPriceRef.current.value = ''
//     setVerified(false)

//   }

//   return (
//     <div  >
//       <h2>Upload New Auction</h2>
//       <div className=' d-flex f-wrap  a-center'>

//         <div className='auction-card d-flex f-wrap f-column a-center '>
//           <h3>Enter auction details:</h3>
//           <h5>Image </h5>
//           <input className='m10' type={'text'} ref={auctionImageRef} placeholder={'Enter image '} />
//           <h5> Title </h5>

//           <input type={'text'} ref={auctionTitleRef} placeholder={'Enter title'} />
//           <h5> Time of auction: </h5>
//           <input type={'datetime-local'} ref={endTimeRef} />

//           <h5>Initial price € </h5>
//           <input className='m10' type={'number'} ref={auctionPriceRef} placeholder={'Enter price'} />
//           <button onClick={validate}>Validate</button>

//         </div>
//         <div className='auction-card d-flex f-wrap f-column a-center '>
//           <div className='image-container' style={{ backgroundImage: `url("${image}")` }}></div>
//           <h5> {title} </h5>

//           <h5>Time left: {timeDistance(Date.parse(time), Date.parse(new Date))}</h5>
//           <h5>Initial price € {price}</h5>

//           {verified && <button onClick={upload} >Upload</button>}


//         </div>
//       </div>


//     </div>
//   );
// };

// export default Upload;