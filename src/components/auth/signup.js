import React,{ useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Input, Image, TileCta } from '../../common'
import  ImageAssets from '../../res/images/index'

const { signup } = ImageAssets

const Fields = [
  {name: 'First Name', type: 'text'},
  {name: 'Last Name', type: 'text'},
  {name: 'Username', type: 'text'},
  {name: 'Email', type: 'text'},
  {name: 'Password', type: 'password'},
  {name: 'Confirm Password', type: 'password'},
  ]

const Signup = () => {
  return (
    <div className='auth'>
      <Image className="auth__image signup-image" src={signup} />
        <div className="auth__caption">
          <span className="auth__caption--head">Sign Up</span><br/>
          <span className="auth__caption--label">
            Please sign up to continue using our app
          </span>
        </div>
        <div className="auth__fields">
          {Fields.map((field, i) => (
            <Input
              key={i}
              placeholder={field.name}
              showIcon={false}
              type={field.type}/>
          ))}
          <TileCta
            handleClick={() => {}}
            label="Sign Up"
            showIcon={false}
            />
        </div>
        <div className="auth__footer">
          <span>
            Already have an account ?
            <Link className="link"  to="/login">  Login</Link>
          </span>
        </div>
    </div>
  );
};

export default Signup;
