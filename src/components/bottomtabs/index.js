import React, { useContext } from 'react';
import { useHistory } from "react-router-dom";

import { TileCta } from '../../common'
import  ImageAssets from '../../res/images/index'


const { home, support, user } = ImageAssets

const bottomActions = [
  { label: 'Home', images: home, route: '/'},
  { label: 'Account', images: user, route: '/account'},
  { label: 'Support', images: support, route: '/support'}
]

const BottomTab = () => {
  let history = useHistory();

  return (
    <div className='bottom-tab'>
      {bottomActions.map((action) => (
        <TileCta
          handleClick={() => history.push(action.route)}
          label={action.label}
          image={action.images[0]}
          imageSet={action.images}
          />
      ))}
    </div>
  );
};

export default BottomTab;
