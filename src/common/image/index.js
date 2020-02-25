
import React from 'react';


const Image = ({src, className}) => {

  return (
    <img
      className={`image ${className}`}
      src={src[0]}
      srcSet={`${src[0]} 300w, ${src[1]} 768w, ${src[2]} 1280w`}
      alt={src} />
  );
};

export default Image;
