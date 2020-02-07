
import React, { useContext } from 'react';

import { NavBarContext } from '../../context/navbarContext'
import { IconCta, Image } from '../../common'
import  ImageAssets from '../../res/images/index'

const { mechLogo, navCart, navSearch, sideBarIcon, backDrop } = ImageAssets

const NavBar = () => {
  const { content } = useContext(NavBarContext);
  return (
    <div className='nav' >
      <div className='nav-content' >
        <Image className='nav-content__image' src={backDrop[0]} srcSet={backDrop} />
        <div className='nav-content__icon-row'>
          <div className='nav-content__icon-row--section'>
            <IconCta icon={sideBarIcon[0]} iconSet={sideBarIcon} />
          </div>
          <div className='nav-content__icon-row--section nav-header'>
            <IconCta icon={mechLogo[0]} iconSet={mechLogo} />
          </div>
          <div className='nav-content__icon-row--section checkout-section'>
            <IconCta icon={navSearch[0]} iconSet={navSearch} />
            <IconCta icon={navCart[0]} iconSet={navCart} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
