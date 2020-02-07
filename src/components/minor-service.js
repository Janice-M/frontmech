import React from 'react';
import { useHistory } from "react-router-dom";

import { Section, TileCta, Input } from '../common'
import  ImageAssets from '../res/images/index'

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

  return (
    <div className='container store'>
      <Input image={search} placeholder="Search"/>
      <Input image={add} placeholder="Add Vehicle for exact fit parts"/>
      <Section
        header='Top Categories'
        labelStyle='category'
        label={
          <div className='tiles'>
            {categoriesLayout.map((category) => (
              <TileCta
                handleClick={() => history.push(category.route)}
                label={category.label}
                image={category.images[0]}
                imageSet={category.images}
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
            {accesoriesLayout.map((accesory) => (
              <TileCta
                handleClick={() => history.push(accesory.route)}
                label={accesory.label}
                image={accesory.images[0]}
                imageSet={accesory.images}
                />
            ))}
          </div>
          }
        />
    </div>
  );
};

export default Store;