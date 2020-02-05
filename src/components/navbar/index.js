
import React, { useContext } from 'react';

import { NavBarContext } from '../../context/navbarContext'
import { IconCta } from '../../common/ctas/index'
import Image from '../../common/image/index'
import  ImageAssets from '../../res/images/index'

const { mechLogo, navCart, navSearch, sideBarIcon, backDrop } = ImageAssets

const NavBar = () => {
  const { content } = useContext(NavBarContext);
  return (
    <div className='nav' >
      <div className='nav-content' >
        <Image className='nav-content__image' src={backDrop[0]} srcSet={backDrop} />
        <div className='nav-content__icon-row'>
          <IconCta icon={sideBarIcon[0]} iconSet={sideBarIcon} />
          <IconCta icon={mechLogo[0]} iconSet={mechLogo} />
          <IconCta icon={navSearch[0]} iconSet={navSearch} />
          <IconCta icon={navCart[0]} iconSet={navCart} />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
