import React, { useState } from 'react';
import { useForm } from './useForm';

function App() {
  const [values, handleChange] = useForm({email: '', password: ''});

  return (
    <div>
      email:
      <input 
        type="email" 
        name="email"
        value={values.email} 
        onChange={handleChange} 
      />
      <br/>
      password:
      <input 
        type="password" 
        name="password" 
        value={values.password}
        onChange={handleChange}
      />
    </div>
  );
};

export default App;
