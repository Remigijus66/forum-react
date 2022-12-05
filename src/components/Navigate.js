import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faGear } from '@fortawesome/free-solid-svg-icons'
import MainContext from "../context/MainContext";
import { post } from "../plugins/http";


const Nav = () => {
  const { sessionUser, setSessionUser, userImage, setuserImage, socket } = useContext(MainContext)
  const nav = useNavigate()
  // const gearIcon = <FontAwesomeIcon icon="fa-solid fa-gear" />
  const gearIcon = <FontAwesomeIcon icon={faGear} />

  const logout = async () => {
    const data = { name: sessionUser.name }
    const res = await post('logout', data)
    console.log(res.message)
    if (res.message === 'session terminated') {
      setSessionUser({});
      setuserImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFUUgRMfIreBNH7C7UXCnE7Uk_vm_PR0jEgaAQxCGbNBD0rojxzh6QggsPF9Jk9v_ozYM&usqp=CAU")
    }
    socket.emit('logout', sessionUser.name)
    nav('/login')

  }

  return (
    <div>

      <div className='navline d-flex a-center' >
        <div className='grow1'>

          {/* <button >Auctions list</button>
          <button >Upload new auction </button> */}

        </div>

        <div className='d-flex f-wrap a-center' >
          <h4>{sessionUser.name}</h4>
          <img className='avatar' src={userImage} alt="" />
          {sessionUser.name && <div style={{
            fontSize: '40px',
            margin: '10px', cursor: 'pointer'
          }} onClick={() => nav('/profile')}> {gearIcon} </div>}
          {/* {sessionUser.name && <button onClick={() => nav('/profile')} >Profile </button>} */}
          {sessionUser.name && <button onClick={logout}>Logout </button>}
        </div>
      </div >
      <button onClick={() => nav('/login')} >LoginPage </button>
      <button onClick={() => nav('/')} >IndexPage </button>
      <button onClick={() => nav('/topic')} >TopicPage </button>
      <button onClick={() => nav('/discussion')} >DiscussionPage </button>
      <button onClick={() => nav('/createDiscussion')} >CreateDiscussionPage </button>
      <button onClick={() => nav('/leaders')} >LeaderboardPage </button>
      <button onClick={() => nav('/message')} >MessagePage </button>
      <button onClick={() => nav('/pm')} >PersonalMessagePage </button>



    </div>
  );
};

export default Nav;
