import React, { useState } from 'react';

import Input  from '../input';


const Dropdowm = ({title, image, imageStyle, items}) => {
  const [dropValues, setdropValues] = useState({
    dropdownOpen: false,
    dropdownTitle: title
  });

  const toggleList = () => {
    setdropValues({...dropValues, dropdownOpen: !dropValues.dropdownOpen })
  }

  const handleClick = (item) => {
    setdropValues({...dropValues,
      dropdownTitle: item.label,
      dropdownOpen: !dropValues.dropdownOpen })
  }

  return (
    <div  className='dropdown'>
      <div onClick={() => toggleList()} className={`dropdown__header ${imageStyle}`}>
        <Input
          className="dropdown-cta"
          image={image}
          placeholder={dropValues.dropdownTitle}
          disabled/>
      </div>
      {dropValues.dropdownOpen &&
        <div className="dropdown__content">
          <ul>
            {items.map((item, i) => (
              <li key={i} onClick={() => handleClick(item)}> {item.label} </li>
            ))}
          </ul>
        </div>
      }
    </div>
  );
};

export default Dropdowm;
