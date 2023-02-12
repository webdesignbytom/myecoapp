import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from '../components/forms/Form';
import Navbar from '../components/nav/Navbar';
import { LoginFormComponents } from './utils'

function Login() {
  const [loginUserData, setLoginUserData] = useState({
    email: '',
    password: '',
  });

  let navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('submit');


    const { email, password } = loginUserData;

    const res = await fetch(`http://localhost:4000/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const userResData = await res.json();
    
    navigate('/', {
      replace: true,
    });
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    console.log('value', value);

    setLoginUserData({
      ...loginUserData,
      [name]: value,
    });
  };
  return (
    <>
      <Navbar />
      <div>
        <h1>Login</h1>
        <Form inputs={LoginFormComponents} handleChange={handleChange} handleSubmit={handleSubmit} />
      </div>
    </>
  );
}

export default Login;

