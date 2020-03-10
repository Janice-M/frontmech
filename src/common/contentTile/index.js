import React from 'react';
import IconCta from '../image';


const ContentTile = ({image, imageStyle, content, contentStyle, handleClick}) => {
  const { head, caption} = content
  return (
    <div onClick={() => handleClick()} className='content-tile'>
      <div className={`content-tile__image ${imageStyle}`}>
        <IconCta className="" src={image}/>
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
