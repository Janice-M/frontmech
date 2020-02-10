import React, { Fragment } from 'react';
import { useHistory } from "react-router-dom";

import { Section, Input, Dropdown, ContentTile } from '../common'
import  ImageAssets from '../res/images/index'

const { add, spareImage, maxresdefault, dropdownIcon } = ImageAssets

const Store = () => {
  let history = useHistory();

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
            <ContentTile
              image={spareImage}
              content={{
                head: 'Toyota Landcruiser Prado',
                caption: (
                  <Fragment>
                    <span>2018</span><br/>
                    <span>2.8L 1GD engine</span>
                  </Fragment>
                )
              }}/>
          </Fragment>
          }
        />
    </div>
  );
};

export default Store;
