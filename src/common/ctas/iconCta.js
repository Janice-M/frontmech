import React from 'react';

import Image from '../image'


const IconCta = ({icon, iconSet}) => {
  return (
    <div className='icon-cta'>
      <Image className='icon-cta__image' src={icon} srcSet={iconSet}/>
    </div>
  );
};

export default IconCta;
