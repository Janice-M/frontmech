import React, { Fragment, useContext, useEffect } from 'react';
import { useHistory } from "react-router-dom";

import { Section, Image, TileCta,IconCta } from '../../common'
import  ImageAssets from '../../res/images/index'
import DesktopTemplate from '../temp/desktopTemplate'
import { NavBarContext } from '../../data/context/navbarContext'
import { storeContext } from '../../data/context/storeContext'
import { headerUpdateAction, fetchProducts, fetchServices } from '../../data/api/actions'

const { homeHero, mechLogo, myCar, service, shop, tints, security, diagnostics } = ImageAssets

const dashboardLayout = [
  { label: 'Service', images: service, route: '/services'},
  { label: 'Shop', images: shop, route: '/store'},
  { label: 'My Cars', images: myCar, route: '/'}
]

const servicesLayout = [
  { label: 'diagnostics', images: diagnostics, route: '/'},
  { label: 'Tints', images: tints, route: '/'},
  { label: 'Security', images: security, route: '/'}
]

const Home = () => {
  let history = useHistory();
  let navDispatch = useContext(NavBarContext).dispatch
  let store = useContext(storeContext)
  const { content,  dispatch } = store

  const homeHeader = <IconCta icon={mechLogo} />

  const handleHeaderUpdate = () => {
    headerUpdateAction(navDispatch,
      {
        header: homeHeader,
        headerRoute: 'home',
        showSearch: true
      }
    )
  }

  useEffect(() => {
    fetchProducts(dispatch)
    fetchServices(dispatch)

    handleHeaderUpdate()// eslint-disable-next-line
  }, [])

  console.log(content);

  return (
    <Fragment>
      <div className='container home'>
        <Image className="hero" src={homeHero} />
        <Section
          header='My Dashboard'
          label={
            <div className='tiles'>
              {dashboardLayout.map((dashboardItem, i) => (
                <TileCta
                  key={i}
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
              {servicesLayout.map((service, i) => (
                <TileCta
                  key={i}
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
