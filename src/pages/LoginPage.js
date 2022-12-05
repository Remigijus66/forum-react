import React from 'react';
import Login from '../components/Login';
import Nav from '../components/Navigate';
import SendSocket from '../components/SendSocket';


const LoginPage = () => {
  return (
    <div className="p50">
      <Nav />
      {/* <SendSocket /> */}
      <Login />
    </div>
  );
};

export default LoginPage;