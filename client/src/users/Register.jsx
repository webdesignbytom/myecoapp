import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Form from '../components/forms/Form';

import { RegisterFormComponents } from './utils'

function Register() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  let navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('submit');

    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    const { email, password } = formData;

    const res = await fetch(`http://localhost:4000/register`, {
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
    
    navigate('/login', {
      replace: true,
    });
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    console.log('value', value);

    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <>
    <div>
      <h1>Register</h1>
      <Form inputs={RegisterFormComponents} handleChange={handleChange} handleSubmit={handleSubmit} />
    </div>
    </>
  )
}

export default Register