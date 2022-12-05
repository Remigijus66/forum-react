import React, { useContext } from 'react';
import MainContext from "../context/MainContext";


const SendSocket = () => {
  const { socket } = useContext(MainContext)

  const send = () => {
    socket.emit('dummy', 'socket')
  }

  return (
    <div  >
      <button onClick={send}>Send Socket</button>

    </div>
  );
};

export default SendSocket;