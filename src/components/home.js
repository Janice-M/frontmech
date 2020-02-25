import React, { Fragment, useContext, useEffect } from 'react';
import { useHistory } from "react-router-dom";

import { Section, Image, TileCta,IconCta } from '../common'
import  ImageAssets from '../res/images/index'
import DesktopTemplate from './desktopTemplate'
import { NavBarContext } from '../context/navbarContext'

const { homeHero, mechLogo, myCar, service, shop, tints, security, diagnostics } = ImageAssets

const dashboardLayout = [
  { label: 'Service', images: service, route: '/services'},
  { label: 'Shop', images: shop, route: '/store'},
  { label: 'My Cars', images: myCar, route: '/my-car'}
]

const servicesLayout = [
  { label: 'diagnostics', images: diagnostics, route: '/'},
  { label: 'Tints', images: tints, route: '/'},
  { label: 'Security', images: security, route: '/'}
]

const Home = () => {
  let history = useHistory();
  let { content, dispatch } = useContext(NavBarContext)
  const homeHeader = <IconCta icon={mechLogo} />

  useEffect(() => {
    updateHeader()
  })

  const updateHeader = () => {
    if(content.headerRoute !== 'home'){
      dispatch({
        type: 'UPDATE_HEADER',
        header: {
          header: homeHeader,
          headerRoute: 'home',
          showSearch: true
        }})
    }
  }

  return (
    <Fragment>
      <div className='container home'>
        <Image className="hero" src={homeHero} />
        <Section
          header='My Dashboard'
          label={
            <div className='tiles'>
              {dashboardLayout.map((dashboardItem) => (
                <TileCta
                  handleClick={() => history.push(dashboardItem.route)}
                  label={dashboardItem.label}
                  image={dashboardItem.images}
                  />
              ))}
            </div>
            }
          />
        <Section
          header='Featured Services'
          labelStyle='featured-services'
          label={
            <div className='tiles'>
              {servicesLayout.map((service) => (
                <TileCta
                  handleClick={() => history.push(service.route)}
                  label={service.label}
                  image={service.images}
                  />
              ))}
            </div>
            }
          />
      </div>
      <DesktopTemplate />
    </Fragment>
  );
};

export default Home;
