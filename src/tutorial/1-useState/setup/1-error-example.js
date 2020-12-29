import React from 'react';


const ErrorExample = () => {
  let title = 'random title';
  const handleClick = () => {
    title = 'hello people';
    console.log(title);
  };

return (
    <React.Fragment>
      <h2>
        {title}
        <button type='button' className='btn' onClick={handleClick}>cambia il titolo</button>
      </h2>
    </React.Fragment>
  );

};

export default ErrorExample;
