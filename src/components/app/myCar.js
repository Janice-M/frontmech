import React, { Fragment, useContext, useEffect, useState } from 'react';

import { Section, Input, Dropdown, ContentTile, Map, Modal } from '../../common'
import  ImageAssets from '../../res/images/index'
import { NavBarContext } from '../../data/context/navbarContext'

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

const packages = [
  {
    label: 'Affordable',
    price: 'KES 6, 000'
  },
  {
    label: 'Premium',
    price: 'KES 6, 000'
  }
]

const MyCar = () => {
  const [ showModal, handleShowModal] = useState(false)
  const { content, dispatch } = useContext(NavBarContext)
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

    const toggleModal = () => {
      handleShowModal(!showModal)
    }

  return (
      <div className='container my-car'>
        <Modal contentStyles='map-section__map' handleClose={() => toggleModal()} show={showModal}>
          <Map />
        </Modal>
        <Section
          header='Which car do you want to service?'
          label={
            <Fragment>
              <Dropdown image={dropdownIcon} title="Choose car" items={[{label: 'car'}]}/>
              <ContentTile
                image={maxresdefault}
                handleClick={() => {}}
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
          labelStyle='map-section'
          label={
            <div onClick={() => toggleModal()}>
              <Dropdown image={dropdownIcon} title="Select the location on map" items={[]}/>
            </div>
            }
          />
        <Section
          header='Which package do you want to use?'
          label={
            <Fragment>
              <Dropdown image={dropdownIcon} title="Choose Package" items={packages}/>
              {partsContent.map((part, i) => (
                <ContentTile
                  key={i}
                  image={part.image}
                  handleClick={() => {}}
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
