import React,{ useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Input, Image, TileCta } from '../../common'
import  ImageAssets from '../../res/images/index'

const { signup } = ImageAssets

const Fields = [ 'First Name', 'Last Name', 'Username', 'Email', 'Password', 'Confirm Password']

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
            <Input key={i} placeholder={field} showIcon={false}/>
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
