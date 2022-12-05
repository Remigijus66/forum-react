import MainContext from "../context/MainContext";
import { useNavigate } from "react-router-dom";
import { post } from "../plugins/http";
import Topic from './Topic';
import SingleDiscussion from './SingleDiscussion';
import { useContext, useEffect } from "react";
import SingleUser from "./SingleUser";


const Users = () => {
  const nav = useNavigate()
  const { topic, discussions, setDiscussions, users, setUsers } = useContext(MainContext)


  useEffect(() => {
    const getUsers = async () => {
      const res = await post('getUsers', {})
      console.log(res)
      setUsers(res.data)
    }
    getUsers()

  }, [])





  return (

    <div className='d-flex f-column a-center' >
      <h3>List of all forum users</h3>
      <button onClick={() => { nav('/') }}>Back</button>

      {/* <h2> {topic} </h2>
      <h3>Select discussion</h3>
      <button style={{ width: '530px' }} onClick={() => nav('/createDiscussion')}>New discussion</button>
      <button style={{ width: '530px' }} onClick={() => nav('/')}> Back to Topic Index</button> */}

      {users.length !== 0 && users.map((x, i) => <SingleUser key={i} user={x} />)}
      {discussions.length === 0 && <h5> No Forum users </h5>}




    </div>
  );
};

export default Users;