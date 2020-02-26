import React, { Fragment, useContext, useEffect } from 'react';

import { Section, Input, Dropdown, ContentTile } from '../common'
import  ImageAssets from '../res/images/index'
import { NavBarContext } from '../data/context/navbarContext'

const { add, spareImage, maxresdefault, dropdownIcon } = ImageAssets

const partsContent = [
  {
    image: spareImage,
    head: 'OEM Genuine parts',
    caption: 'Toyota sythentic motor oil, OEM Air cleaner + Oil Filter',
    price: 'KES 6, 000'
  },
  {
    image: spareImage,
    head: 'OEM Genuine parts',
    caption: 'Toyota sythentic motor oil, OEM Air cleaner + Oil Filter',
    price: 'KES 6, 000'
  }
]

const MyCar = () => {
  let { content, dispatch } = useContext(NavBarContext)
  const carHeader = <div className='nav-title'>Minor Service</div>


  useEffect(() => {
    updateHeader()
  })

  const updateHeader = () => {
    if(content.headerRoute !== 'my-car'){
      dispatch({
        type: 'UPDATE_HEADER',
        header: {
          header: carHeader,
          headerRoute: 'my-car',
          showSearch: false
        }})
    }}

  return (
    <div className='container my-car'>
      <Section
        header='Which car do you want to service?'
        label={
          <Fragment>
            <Dropdown image={dropdownIcon} title="Choose car" items={[{label: 'car'}]}/>
            <ContentTile
              image={maxresdefault}
              content={{
                head: 'Toyota Landcruiser Prado',
                caption: (
                  <Fragment>
                    <span>2018</span><br/>
                    <span>2.8L 1GD engine</span>
                  </Fragment>
                )
              }}/>
              <Input image={add} placeholder="Add new car"/>
            </Fragment>
          }
        />
      <Section
        header='Where will the service be done?'
        label={
            <Dropdown image={dropdownIcon} title="Select the location on map" items={[{label: 'car'}]}/>
          }
        />
      <Section
        header='Which parts do you want to use?'
        label={
          <Fragment>
            <Dropdown image={dropdownIcon} title="Choose parts" items={[{label: 'car'}]}/>
            {partsContent.map((part, i) => (
              <ContentTile
                key={i}
                image={part.image}
                content={{
                  head: part.head,
                  caption: (
                    <Fragment>
                      <span>{part.caption}</span><br/>
                      <span className="price">{part.price}</span>
                    </Fragment>
                  )
                }}/>
            ))}
          </Fragment>
          }
        />
    </div>
  );
};

export default MyCar;
