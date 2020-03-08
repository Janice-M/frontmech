import React, { useContext, useEffect } from 'react';
import { useHistory } from "react-router-dom";

import { ContentTile } from '../../common'
import { NavBarContext } from '../../data/context/navbarContext'

import  ImageAssets from '../../res/images/index'

const { diagnosticsIcon, suspensionIcon, starterIcon, brakeIcon, serviceIcon } = ImageAssets

const serviceContent = [
  { icon: serviceIcon,
    head: 'Minor Service',
    caption: 'Oil change, oil filter, air cleaner, and 25 point check up',
    route: '/my-car'
  },
  { icon: serviceIcon,
    head: 'Major Service',
    caption: 'Minor service + Spark plugs, Fuel filter and cabin filter',
    route: '/services'
  },
  { icon: brakeIcon,
    head: 'Brake Maintenance',
    caption: 'Brake pads + Brake discs',
    route: '/services'
  },
  { icon: suspensionIcon,
    head: 'Suspension Parts',
    caption: 'Shock absorbers, Springs, bushing and mountings',
    route: '/services'
  },
  { icon: diagnosticsIcon,
    head: 'Diagnostic',
    caption: 'Computer diagnostic scan',
    route: '/services'
  },
  { icon: starterIcon,
    head: 'Battery Replacement',
    caption: 'Battery Replacement',
    route: '/services'
  }
]

const Services = () => {
  let history = useHistory();
  let { content, dispatch } = useContext(NavBarContext)
  const serviceHeader = <div className='nav-title'>Book a Service</div>


  useEffect(() => {
    updateHeader()
  })

  const updateHeader = () => {
    if(content.headerRoute !== 'service'){
      dispatch({
        type: 'UPDATE_HEADER',
        header: {
          header: serviceHeader,
          headerRoute: 'service',
          showSearch: false
        }})
    }}
  return (
    <div className='container service'>
      {serviceContent.map((tileContent, i) => (
        <ContentTile
          key={i}
          image={tileContent.icon}
          handleClick={() => history.push(tileContent.route)}
          content={{
            head: tileContent.head,
            caption: tileContent.caption
          }}/>
      ))}
    </div>
  );
};

export default Services;
