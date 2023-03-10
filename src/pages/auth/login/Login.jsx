import React, { useState, useEffect } from 'react';
import './Login.scss';
import { FaArrowRight } from 'react-icons/fa';
import Input from '@components/input/Input';
import Button from '@components/button/Button';
import { authService } from '@services/api/auth/auth.service';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import useLocalStorage from '@/hooks/useLocalStorage';
import useSessionStorage from '@/hooks/useSessionStorage';
import { Utils } from '@/services/utils/utils.service';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [keepLogin, setKeepLogin] = useState(false);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState('');

  const [errorMessage, setErrorMessage] = useState('');
  const [alertType, setAlertType] = useState('');
  const [hasError, setHasError] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [setStoredUsername] = useLocalStorage('username', 'set');
  const [setLoggedIn] = useLocalStorage('keepLoginIn', 'set');
  const [pageReload] = useSessionStorage('pageReload', 'set');

  const loginUser = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const result = await authService.signIn({
        username,
        password
      });

      setLoggedIn(keepLogin);
      setStoredUsername(username);

      setAlertType('alert-success');
      setHasError(false);

      Utils.dispatchUser(result, pageReload, dispatch, setUser);
    } catch (error) {
      setLoading(false);
      setHasError(true);
      setAlertType('alert-error');
      setErrorMessage(error?.response?.data.message);
    }
  };

  useEffect(() => {
    if (loading && !user) return;
    if (user) navigate('/app/social/streams');
  }, [loading, user, navigate]);

  return (
    <div className="auth-inner">
      <div className="alerts" role="alert">
        {hasError && errorMessage && (
          <div className={`alerts ${alertType}`} role={'alert'}>
            {errorMessage}
          </div>
        )}
      </div>
      <form className="auth-form" onSubmit={loginUser}>
        <div className="form-input-container">
          {/* username */}
          <Input
            id="username"
            name="username"
            type="text"
            value={username}
            labelText="?????????"
            placeholder="??????????????????"
            handleChange={(e) => setUsername(e.target.value)}
          />

          {/* password field */}
          <Input
            id="password"
            name="password"
            type="password"
            value={password}
            labelText="??????"
            placeholder="?????????????????????"
            handleChange={(e) => setPassword(e.target.value)}
          />

          <label className="checkmark-container" htmlFor="checkbox">
            <Input
              id="checkbox"
              name="checkbox"
              type="checkbox"
              value={keepLogin}
              handleChange={() => setKeepLogin(!keepLogin)}
            />
            ?????????
          </label>
        </div>
        {/* button component */}
        <Button
          label={loading ? '?????????.....' : '??????'}
          className="auth-button button"
          disabled={!username || !password}
        />

        <Link to={'/forgot-password'}>
          <span className="forgot-password">
            ????????????? <FaArrowRight className="arrow-right" />
          </span>
        </Link>
      </form>
    </div>
  );
};

export default Login;
