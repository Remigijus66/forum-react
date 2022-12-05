// import React, { useContext, useEffect } from 'react';
// import MainContext from "../context/MainContext";
// import { post } from "../plugins/http";
// import AuctionCard from './AuctionCard';
// import io from "socket.io-client"
// import { useNavigate } from "react-router-dom";
// import Checkboxes from './Checkboxes';
// const socket = io.connect('http://localhost:4001');


// const List = () => {
//   const nav = useNavigate()
//   const { auctions, setAuctions, showOpen,
//     showClosed } = useContext(MainContext)

//   useEffect(() => {
//     downloadActualAuctions()

//     socket.on('upload', () => {
//       console.log('upload occured')
//       downloadActualAuctions()
//     })

//     socket.on('updateList', () => {
//       console.log('bid occured')
//       downloadActualAuctions()
//     })


//   }, [])


//   const downloadActualAuctions = async () => {
//     const data = { id: 'dummy' }
//     const res = await post('downloadAll', data)
//     console.log(res)
//     if (res.error === true) return nav('/')
//     setAuctions(res.data)
//     console.log(auctions)
//   }


//   return (
//     <div  >
//       <h2>Auctions list</h2>
//       <div>
//         <Checkboxes />
//       </div>
//       <div className='d-flex f-wrap '>
//         {auctions.filter((e) => (((e.time > Date.parse(new Date)) === showOpen) || e.time < Date.parse(new Date)) && (((e.time < Date.parse(new Date)) === showClosed) || e.time > Date.parse(new Date))).map((x, i) => <div key={i} > <AuctionCard auction={x} />
//         </div>)}
//       </div>
//     </div>
//   );
// };

// export default List;