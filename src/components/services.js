import React from 'react';

import { ContentTile } from '../common'

import  ImageAssets from '../res/images/index'

const { diagnosticsIcon, suspensionIcon, starterIcon, brakeIcon, serviceIcon } = ImageAssets

const serviceContent = [
  { icon: serviceIcon,
    head: 'Minor Service',
    caption: 'Oil change, oil filter, air cleaner, and 25 point check up'
  },
  { icon: serviceIcon,
    head: 'Major Service',
    caption: 'Minor service + Spark plugs, Fuel filter and cabin filter'
  },
  { icon: brakeIcon,
    head: 'Brake Maintenance',
    caption: 'Brake pads + Brake discs'
  },
  { icon: suspensionIcon,
    head: 'Suspension Parts',
    caption: 'Shock absorbers, Springs, bushing and mountings'
  },
  { icon: diagnosticsIcon,
    head: 'Diagnostic',
    caption: 'Computer diagnostic scan'
  },
  { icon: starterIcon,
    head: 'Battery Replacement',
    caption: 'Battery Replacement'
  }
]

const Services = () => {
  return (
    <div className='container service'>
      {serviceContent.map((tileContent) => (
        <ContentTile
          image={tileContent.icon}
          content={{
            head: tileContent.head,
            caption: tileContent.caption
          }}/>
      ))}
    </div>
  );
};

export default Services;
