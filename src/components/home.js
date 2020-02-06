import React from 'react';
import { useHistory } from "react-router-dom";

import { Section, Image, TileCta } from '../common'
import  ImageAssets from '../res/images/index'

const { homeHero, myCar, service, shop } = ImageAssets

const dashboardData = [
  { label: 'Service', images: service, route: '/service'},
  { label: 'Shop', images: shop, route: '/store'},
  { label: 'My Cars', images: myCar, route: '/my-car'}
]

const Home = () => {
  let history = useHistory();

  return (
    <div className='container'>
      <Image className="hero" src={homeHero[0]} srcSet={homeHero}/>
      <Section
        header='My Dashboard'
        label={
          <div className='tiles'>
            {dashboardData.map((dashboardItem) => (
              <TileCta
                handleClick={() => history.push(dashboardItem.route)}
                label={dashboardItem.label}
                image={dashboardItem.images[0]}
                imageSet={dashboardItem.images}
                />
            ))}
          </div>
          }
        />
      <Section header='Featured Services'/>
    </div>
  );
};

export default Home;
