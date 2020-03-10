import React, { useContext, useEffect } from 'react';
import { useHistory } from "react-router-dom";

import { Section, TileCta, Input } from '../../common'
import  ImageAssets from '../../res/images/index'
import { NavBarContext } from '../../data/context/navbarContext'

const { add,
  airFilter,
  search,
  brakePads,
  carLight,
  fabric,
  shockAbsorber,
  sparkPlug,
  starter,
  tank } = ImageAssets


const categoriesLayout = [
  { label: 'Air Filters', images: airFilter, route: '/store'},
  { label: 'Break Pads', images: brakePads, route: '/store'},
  { label: 'Lubricant', images: tank, route: '/store'},
  { label: 'Spark Plugs', images: sparkPlug, route: '/store'},
  { label: 'Shock Absorbers', images: shockAbsorber, route: '/store'},
  { label: 'Batteries', images: starter, route: '/store'}
]

const accesoriesLayout = [
  { label: 'Bulbs', images: carLight, route: '/store'},
  { label: 'Floor Mats', images: fabric, route: '/store'}
]

const Store = () => {
  let history = useHistory();
  let { content, dispatch } = useContext(NavBarContext)
  const storeHeader = <div className='nav-title'>Farsi Auto Store</div>


  useEffect(() => {
    updateHeader()
  })

  const updateHeader = () => {
    if(content.headerRoute !== 'store'){
      dispatch({
        type: 'UPDATE_HEADER',
        header: {
          header: storeHeader,
          headerRoute: 'store',
          showSearch: false
        }})
    }}

  return (
    <div className='container store'>
      <Input image={search} placeholder="Search"/>
      <Input image={add} placeholder="Add Vehicle for exact fit parts"/>
      <Section
        header='Top Categories'
        labelStyle='category'
        label={
          <div className='tiles'>
            {categoriesLayout.map((category, i) => (
              <TileCta
                key={i}
                handleClick={() => history.push(category.route)}
                label={category.label}
                image={category.images}
                />
            ))}
          </div>
          }
        />
      <Section
        header='Accesories'
        labelStyle='accesories'
        label={
          <div className='tiles'>
            {accesoriesLayout.map((accesory, i) => (
              <TileCta
                key={i}
                handleClick={() => history.push(accesory.route)}
                label={accesory.label}
                image={accesory.images}
                />
            ))}
          </div>
          }
        />
    </div>
  );
};

export default Store;
