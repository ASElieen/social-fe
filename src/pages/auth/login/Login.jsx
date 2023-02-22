import React from 'react';
import './Login.scss';
import { FaArrowRight } from 'react-icons/fa';
import Input from '../../../components/input/Input';
import Button from '../../../components/button/Button';
import { Link } from 'react-router-dom';

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
            labelText="用户名"
            placeholder="enter ur username"
            handleChange={() => {}}
          />

          {/* password field */}
          <Input
            id="password"
            name="password"
            type="text"
            value="text for now"
            labelText="密码"
            placeholder="enter ur password"
            handleChange={() => {}}
          />

          <label className="checkmark-container" htmlFor="checkbox">
            <Input id="checkbox" name="checkbox" type="checkbox" value={false} handleChange={() => {}} />
            记住我
          </label>
        </div>
        {/* button component */}
        <Button label={'登录'} className="auth-button button" disabled={false} />

        <Link to={'/forgot-password'}>
          <span className="forgot-password">
            忘记密码? <FaArrowRight className="arrow-right" />
          </span>
        </Link>
      </form>
    </div>
  );
};

export default Login;
