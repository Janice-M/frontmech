import React,{ useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Input, Image, TileCta } from '../../common'
import  ImageAssets from '../../res/images/index'

const { login } = ImageAssets

const Login = () => {
  return (
    <div className='auth'>
      <Image className="auth__image" src={login} />
      <div className="auth__caption">
        <span className="auth__caption--head">Login</span><br/>
        <span className="auth__caption--label">
          Please login to continue using our app
        </span>
      </div>
      <div className="auth__fields">
        <Input placeholder="Email" showIcon={false}/>
        <Input type="password" placeholder="Password" showIcon={false}/>
        <div className="auth__fields--actions">
          <div>
            <Input
              className="radio"
              type="radio"
              placeholder="Remember Me"
              showIcon={false}/>
            <span>Remember Me</span>
          </div>
          <span>Forgot Password?</span>
        </div>
        <TileCta
          handleClick={() => {}}
          label="Login"
          showIcon={false}
          />
      </div>
      <div className="auth__footer">
        <span>
          Don't have an account ?
          <Link className="link" to="/signup">  Sign Up</Link>
        </span>
      </div>
    </div>
  );
};

export default Login;
