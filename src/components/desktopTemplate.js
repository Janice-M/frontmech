import React from 'react';

import { Section, Image, TileCta } from '../common'
import  ImageAssets from '../res/images/index'

const { homeHero } = ImageAssets

const Home = () => {

  return (
    <div className='desktop'>
      <Image className="desktop-hero" src={homeHero[0]} srcSet={homeHero}/>
      <div className="desktop-caption">
        <div className="header-styles">Desktop Version Coming Soon!<div>
        <div className="label-styles">
          We are currently working on the desktop version
          currently the site is only available on mobile 😊.
        </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
