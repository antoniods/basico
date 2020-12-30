import React, { useState } from 'react';

const UseStateCounter = () => {
    const [value, setValue] = useState(0);

    

  return <>
  <section style={{margin : '4em 0'}}></section>
  <h2>Counter</h2>
  <h1>{value}</h1>
  <button className='btn' onClick = {() => setValue(value + 1)}>Increase</button>
  <button className='btn' onClick = {() => setValue(0)}>Reset</button>
  <button className='btn' onClick = {() => setValue(value - 1)}>Decrease</button>
  {console.log(value)}
  </>;
};

export default UseStateCounter;
