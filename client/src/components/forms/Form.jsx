import React from 'react';
import FormInput from './FormInput';

function Form({ handleSubmit, handleChange, inputs }) {
    
  return (
    <>
      <form onSubmit={handleSubmit} className='grid w-56'>
        {inputs.map((input, index) => {
            return (
                <FormInput key={index} title={input.label} type={input.type} handleChange={handleChange}/>
            )
        })}
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}

export default Form;
