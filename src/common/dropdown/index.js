import React, { useState } from 'react';

import Input  from '../input';


const Dropdowm = ({title, image, imageStyle, items}) => {
  const [dropValues, setdropValues] = useState({
    dropdownOpen: false,
    dropdownTitle: title
  });

  const handleClickOutside = () => {
    setdropValues({...dropValues, listOpen: false })
  }

  const toggleList = () => {
    setdropValues({...dropValues, dropdownOpen: !dropValues.dropdownOpen })
  }


  return (
    <div className='dropdown'>
      <div onClick={() => toggleList()} className={`dropdown__header ${imageStyle}`}>
        <Input
          className="dropdown-cta"
          image={image}
          placeholder={dropValues.dropdownTitle}
          disabled/>
      </div>
      {dropValues.dropdownOpen &&
        <div className={`dropdown__content`}>
          <ul>
            {items.map((item) => (
              <li> {item.label} </li>
            ))}
          </ul>
        </div>
      }
    </div>
  );
};

export default Dropdowm;
