import React from 'react';
import { useHistory } from "react-router-dom";

import { Section, Image, TileCta } from '../common'
import  ImageAssets from '../res/images/index'

const { homeHero, myCar, service, shop, tints, security, diagnostics } = ImageAssets

const dashboardLayout = [
  { label: 'Service', images: service, route: '/services'},
  { label: 'Shop', images: shop, route: '/store'},
  { label: 'My Cars', images: myCar, route: '/my-car'}
]

const servicesLayout = [
  { label: 'diagnostics', images: diagnostics, route: '/diagnostics'},
  { label: 'Tints', images: tints, route: '/tints'},
  { label: 'Security', images: security, route: '/security'}
]

const Home = () => {
  let history = useHistory();

  return (
    <div className='container home'>
      <Image className="hero" src={homeHero[0]} srcSet={homeHero}/>
      <Section
        header='My Dashboard'
        label={
          <div className='tiles'>
            {dashboardLayout.map((dashboardItem) => (
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
      <Section
        header='Featured Services'
        labelStyle='featuted-services'
        label={
          <div className='tiles'>
            {servicesLayout.map((service) => (
              <TileCta
                handleClick={() => history.push(service.route)}
                label={service.label}
                image={service.images[0]}
                imageSet={service.images}
                />
            ))}
          </div>
          }
        />
    </div>
  );
};

export default Home;
