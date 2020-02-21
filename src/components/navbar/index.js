
import React, { useContext } from 'react';
import { useHistory } from "react-router-dom";

import { NavBarContext } from '../../context/navbarContext'
import { IconCta, Image } from '../../common'
import  ImageAssets from '../../res/images/index'

const { mechLogo, navCart, navSearch, sideBarIcon, backDrop, navBackIcon } = ImageAssets

const NavBar = () => {
  const { content } = useContext(NavBarContext);
  let history = useHistory();

  return (
    <div className='nav' >
      <div className='nav-content' >
        <Image className='nav-content__image' src={backDrop[0]} srcSet={backDrop} />
        <div className='nav-content__icon-row'>
          <div onClick={() => history.goBack()} className='nav-content__icon-row--section sidebar'>
            <IconCta icon={content.showSearch? sideBarIcon[0]: navBackIcon[0]} iconSet={content.showSearch? sideBarIcon : navBackIcon } />
          </div>
          <div className='nav-content__icon-row--section nav-header'>
            {content.header}
          </div>
          <div className='nav-content__icon-row--section checkout-section'>
            {content.showSearch &&
              <IconCta icon={navSearch[0]} iconSet={navSearch} />
            }
            <IconCta icon={navCart[0]} iconSet={navCart} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
