import React, { useState, useEffect } from 'react';
import { useForm } from './useForm';
import Hello from './Hello';  

function App() {
  const [values, handleChange] = useForm({
    email: '',
    password: '',
    firstname: ''
  });
  const [showHello, setShowHello] = useState(true);

  useEffect(() => {
    console.log('render');
  }, [values.email, values.password])

  return (
    <div>
      <button onClick={() => setShowHello(!showHello)}>toggle Hello</button>
      {showHello && <Hello />}
      <br/>
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
      <input 
        type="firstname" 
        name="firstname" 
        value={values.firstname}
        onChange={handleChange}
      />
    </div>
  );
};

export default App;
