import React,{ useContext, useEffect } from 'react';

import { Image, } from '../../common'
import  ImageAssets from '../../res/images/index'
import { headerUpdateAction } from '../../data/api/actions'
import { NavBarContext } from '../../data/context/navbarContext'

const { homeHero } = ImageAssets

const Support = () => {
  let navDispatch = useContext(NavBarContext).dispatch
  const supportHeader = <div className='nav-title'>Customer Support</div>

  const handleHeaderUpdate = () => {
    headerUpdateAction(navDispatch,
      {
        header: supportHeader,
        headerRoute: 'support',
        showSearch: true
      }
    )
  }

  useEffect(() => {
    handleHeaderUpdate()// eslint-disable-next-line
  }, [])

  return (
    <div className='container support'>
      <Image className="support-hero" src={homeHero}/>
      <div className="support-caption">
        <div className="header-styles">Contact Us</div><br/>
          <div className="support-label">Please call number:: 000000000000</div>
          <div className="support-label">or</div>
          <div className="support-label">Email us at:: support@mymech.com</div>
      </div>
    </div>
  );
};

export default Support;
