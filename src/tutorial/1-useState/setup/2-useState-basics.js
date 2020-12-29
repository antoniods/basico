import React, { useState } from 'react';

const UseStateBasics = () => {

  const [text, setText] = useState('primo text');

  const handleClick = () => {
    if (text === 'primo text') {
      setText('secondo text'); 
    } else {
      setText('primo text');
  } 
};
  

  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button type="button" onClick={handleClick}>Cambia titolo</button>
    </React.Fragment>
  )
};

export default UseStateBasics;
