import React from 'react';
import Input from '../../../components/input/Input';
import Button from '../../../components/button/Button';
import './Register.scss';

const Register = () => {
  return (
    <div className="auth-inner">
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

          {/* email field */}
          <Input
            id="email"
            name="email"
            type="text"
            value="test@text.com"
            labelText="邮箱"
            placeholder="enter ur Email"
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
        </div>
        {/* button component */}
        <Button label={'注册'} className="auth-button button" disabled={false} />
      </form>
    </div>
  );
};

export default Register;
