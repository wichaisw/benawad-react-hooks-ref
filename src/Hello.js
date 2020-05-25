import React, { useEffect } from 'react';

const Hello = () => {
  useEffect(() => {
    // equal to commponentDidMount if the second parameter is an empty array
    const onMouseMove = e => console.log(e);
    window.addEventListener('mousemove', onMouseMove);
    console.log('render');
    
  return () => {
    // cleaning up an effect here
    //componentWillUnmount
    window.removeEventListener('mousemove', onMouseMove);
    console.log('unmount');
  };

  }, []);

  return <div>Hello</div>
}

export default Hello;