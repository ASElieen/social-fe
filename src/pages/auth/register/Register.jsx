import React, { useState } from 'react';
import Input from '../../../components/input/Input';
import Button from '../../../components/button/Button';
import './Register.scss';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [alertType, setAlertType] = useState('');
  const [hasError, setHasError] = useState(false);

  const registerUser = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      setAlertType('alert-success');
      setHasError(false);
    } catch (error) {
      setLoading(false);
      setHasError(true);
      setAlertType('alert-error');
      setErrorMessage(error?.response?.data.message);
    }
  };
  return (
    <div className="auth-inner">
      {hasError && errorMessage && (
        <div className={`alerts ${alertType}`} role={'alert'}>
          {errorMessage}
        </div>
      )}
      <form className="auth-form" onSubmit={registerUser}>
        <div className="form-input-container">
          {/* username */}
          <Input
            id="username"
            name="username"
            type="text"
            value={username}
            labelText="用户名"
            placeholder="请输入您的用户名"
            handleChange={(e) => {
              setUsername(e.target.value);
            }}
          />

          {/* email field */}
          <Input
            id="email"
            name="email"
            type="text"
            value={email}
            labelText="邮箱"
            placeholder="请输入您的邮箱"
            handleChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          {/* password field */}
          <Input
            id="password"
            name="password"
            type="text"
            value={password}
            labelText="密码"
            placeholder="请输入您的密码"
            handleChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        {/* button component */}
        <Button
          label={`${loading ? '正在注册中,请稍后...' : '注册'}`}
          className="auth-button button"
          disabled={!username || !email || !password}
        />
      </form>
    </div>
  );
};

export default Register;
