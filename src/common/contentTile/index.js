import React from 'react';
import IconCta from '../image';


const ContentTile = ({image, imageStyle, content, contentStyle}) => {
  const { head, caption} = content
  return (
    <div className='content-tile'>
      <div className={`content-tile__image ${imageStyle}`}>
        <IconCta className="" src={image[0]} srcSet={image}/>
      </div>
      <div className={`content-tile__content ${contentStyle}`}>
        <div className={`content-tile__content--head`}>
          <span>{head}</span>
        </div>
        <div className={`content-tile__content--caption`}>
          <span>{caption}</span>
        </div>
      </div>
    </div>
  );
};

export default ContentTile;
