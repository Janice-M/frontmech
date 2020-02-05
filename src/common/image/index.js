
import React from 'react';


const Image = ({src, srcSet, className}) => {

  return (
    <img
      className={`image ${className}`}
      src={src}
      srcSet={`${srcSet[0]} 300w, ${srcSet[1]} 768w, ${srcSet[2]} 1280w`}
      alt={src} />
  );
};

export default Image;
