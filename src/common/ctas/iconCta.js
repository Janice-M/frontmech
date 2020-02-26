import React from 'react';

import Image from '../image'


const IconCta = ({icon}) => {
  return (
    <div className='icon-cta'>
      <Image className='icon-cta__image' src={icon}/>
    </div>
  );
};

export default IconCta;
