import React from 'react';

import Image from '../image'


const TileCta = ({image, imageSet, label, labelStyle, handleClick}) => {
  return (
    <div onClick={() => handleClick()} className='tile-cta'>
      <Image className='tile-cta__image' src={image} srcSet={imageSet}/>
      <div className={`tile-cta__label ${labelStyle}`}>
        <span>  {label}  </span>
      </div>
    </div>
  );
};

export default TileCta;
