import React, { useState } from 'react';

import IconCta from '../image';


const Input = ({image, imageStyle, placeholder}) => {
  const [text, setText] = useState({
    text: ''
  });

  const handleSubmit = e => {
    e.preventDefault();
  };

  const handleChange = e => {
    setText({ [e.target.name]: e.target.value });
  };


  return (
    <div className='input'>
      <div className={`input__image ${imageStyle}`}>
        <IconCta className="input-cta" src={image[0]} srcSet={image}/>
      </div>
      <div className={`input__content`}>
          <input
            type='text'
            id='text'
            name='text'
            value={text.text}
            onChange={handleChange}
            placeholder={placeholder}
            className='text'
          />
      </div>
    </div>
  );
};

export default Input;
