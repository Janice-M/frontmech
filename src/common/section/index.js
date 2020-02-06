import React from 'react';

const Section = ({header, headerStyle, label, labelStyle}) => {
  return (
    <div className='section'>
      <div className={`section__header ${labelStyle}`}>
        <span>  {header}  </span>
      </div>
      <div className={`section__label ${labelStyle}`}>
        <span>  {label}  </span>
      </div>
    </div>
  );
};

export default Section;
