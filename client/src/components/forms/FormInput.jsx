import React from 'react';

function FormInput({ title, type, handleChange }) {
  return (
    <>
      <label>{title}</label>
      <input
        type={type}
        onChange={handleChange}
        required
        className='border-2'
      />
    </>
  );
}

export default FormInput;
