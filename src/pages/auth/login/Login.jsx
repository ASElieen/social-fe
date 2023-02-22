import React from 'react';
import './Login.scss';
import { FaArrowRight } from 'react-icons/fa';
import Input from '../../../components/input/Input';
import Button from '../../../components/button/Button';

const Login = () => {
  return (
    <div className="auth-inner">
      <div className="alerts" role="alert">
        Error message
      </div>
      <form className="auth-form">
        <div className="form-input-container">
          {/* username */}
          <Input
            id="username"
            name="username"
            type="text"
            value="text for now"
            labelText="Username"
            placeholder="enter ur username"
            handleChange={() => {}}
          />

          {/* password field */}
          <Input
            id="password"
            name="password"
            type="text"
            value="text for now"
            labelText="Password"
            placeholder="enter ur password"
            handleChange={() => {}}
          />

          <label className="checkmark-container" htmlFor="checkbox">
            <Input id="checkbox" name="checkbox" type="checkbox" value={false} handleChange={() => {}} />
            Keep me signed in
          </label>
        </div>
        {/* button component */}
        <Button label={'LOGIN'} className="auth-button button" disabled={false} />

        <span className="forgot-password">
          Forgot password? <FaArrowRight className="arrow-right" />
        </span>
      </form>
    </div>
  );
};

export default Login;
