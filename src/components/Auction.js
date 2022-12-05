
// import React, { useContext, useEffect, useRef } from 'react';

// import MainContext from "../context/MainContext";
// import { post, timeDistance } from '../plugins/http';
// import { useNavigate } from "react-router-dom";
// import io from "socket.io-client"

// const socket = io.connect('http://localhost:4001');

// const Auction = () => {
//   const nav = useNavigate()
//   const { setShowAuction, id, singleAuction, setSingleAuction, sessionUser } = useContext(MainContext)
//   const bidRef = useRef()

//   useEffect(() => {

//     socket.emit("singleAuction", id)

//     socket.on("singleAuction", (data) => {
//       // console.log(data)
//       donloadSingle(data)
//       // console.log(singleAuction)
//     })
//     socket.on('bid', (data) => {
//       donloadSingle(data)
//     })

//   }, [])

//   const donloadSingle = async (id) => {
//     const data = {
//       id: id
//     }
//     const res = await post('downloadSingle', data)
//     if (res.error === true) return nav('/')
//     setSingleAuction(res.data)
//     console.log(res)

//   }

//   const submit = async () => {

//     const data = {
//       id: id,
//       newPrice: bidRef.current.value,
//       bidderName: sessionUser
//     }
//     const res = await post('placeBid', data)
//     socket.emit('bid', id)
//     console.log(res)
//     bidRef.current.value = ''
//   }

//   const close = () => {
//     setSingleAuction({});
//     setShowAuction(false)
//     console.log(singleAuction)
//     socket.emit("leave", id)

//   }


//   return (
//     <div className="auction-container d-flex j-center a-center" >
//       <div className='auction '>
//         <div className="closeBtn d-flex space-btw">
//           <div className='d-flex a-center'><h5>Place your bids</h5></div>
//           <div style={{ cursor: 'pointer', border: '1px solid black', padding: '10px' }} onClick={close}>X</div>
//         </div>
//         <div className='d-flex s-evenly'>
//           {singleAuction.title && <div className='auction-card d-flex f-wrap f-column a-center'>
//             <div className='image-container' style={{ backgroundImage: `url("${singleAuction.image}")` }}></div>
//             <h5> {singleAuction.title} </h5>
//             <h5>Provider: {singleAuction.name}</h5>
//             <h5>Start price € {singleAuction.startPrice
//             }</h5>
//             <h5>Time left: {timeDistance(singleAuction.time, Date.parse(new Date))}</h5>
//             {singleAuction.bids.length > 0 && <h5>Last price € {singleAuction.bids[singleAuction.bids.length - 1].price}</h5>}
//             <h5>Bids placed {singleAuction.bids.length}</h5>
//           </div>}
//           <div className='auction-card d-flex f-wrap f-column'>

//             {singleAuction.title && <div className='grow1 o-auto'>
//               <strong>€ {singleAuction.startPrice} --- Start Price --- </strong>
//               {singleAuction.bids.map((x, i) => <p key={i}> <strong> € {x.price} </strong>  -placed by- <strong>{x.name}</strong> </p>)}
//             </div>}
//             <div>
//               <input type={'number'} ref={bidRef} placeholder={'Enter price'} />
//               <button onClick={submit}>Submit</button>
//             </div>
//           </div>
//         </div>


//       </div>

//     </div>
//   );
// };

// export default Auction;

