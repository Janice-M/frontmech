
import React, { useContext } from 'react';
import { useHistory } from "react-router-dom";

import { NavBarContext } from '../../data/context/navbarContext'
import { IconCta, Image } from '../../common'
import  ImageAssets from '../../res/images/index'

const { navCart, navSearch, sideBarIcon, backDrop, navBackIcon } = ImageAssets

const NavBar = () => {
  const { content } = useContext(NavBarContext);
  let history = useHistory();

  return (
    <div className='nav' >
      <div className='nav-content' >
        <Image className='nav-content__image' src={backDrop} />
        <div className='nav-content__icon-row'>
          <div onClick={() => history.push('/')} className='nav-content__icon-row--section sidebar'>
            <IconCta icon={content.showSearch? sideBarIcon: navBackIcon} />
          </div>
          <div className='nav-content__icon-row--section nav-header'>
            {content.header}
          </div>
          <div className='nav-content__icon-row--section checkout-section'>
            {content.showSearch &&
              <IconCta icon={navSearch}/>
            }
            <IconCta icon={navCart} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
