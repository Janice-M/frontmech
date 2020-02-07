import React, { useState } from 'react';

import IconCta from '../image';


const Dropdowm = ({title, imageStyle, placeholder}) => {
  const [dropValues, setdropValues] = useState({
    dropdownOpen: false,
    dropdownTitle: title
  });

  handleClickOutside(){
    setdropValues({...dropValues, listOpen: false })
  }
  toggleList(){
    setdropValues({...dropValues, listOpen: !dropValues.listOpen })
  }


  return (
    <div className='input'>
      <div className={`input__image ${imageStyle}`}>
        <IconCta className="input-cta" src={image[0]} srcSet={image}/>
      </div>
      <div className={`input__content`}>
      </div>
    </div>
  );
};

export default Dropdowm;
