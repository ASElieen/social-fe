import React, { useState, useEffect } from 'react';
import Input from '@components/input/Input';
import Button from '@components/button/Button';
import { Utils } from '@services/utils/utils.service';
import { authService } from '@services/api/auth/auth.service';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import useLocalStorage from '@/hooks/useLocalStorage';
import useSessionStorage from '@/hooks/useSessionStorage';
import './Register.scss';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [alertType, setAlertType] = useState('');
  const [hasError, setHasError] = useState(false);
  const [user, setUser] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [setStoredUsername] = useLocalStorage('username', 'set');
  const [setLoggedIn] = useLocalStorage('keepLoginIn', 'set');
  const [pageReload] = useSessionStorage('pageReload', 'set');

  const registerUser = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const avatarColor = Utils.avatarColor();
      const avatarImage = Utils.generateAvatarImage(username.charAt(0).toUpperCase(), avatarColor); // for now
      const result = await authService.signUp({
        username,
        email,
        password,
        avatarColor,
        avatarImage
      });

      setLoggedIn(true);
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
            labelText="?????????"
            placeholder="????????????????????????"
            style={{ border: `${hasError ? '1px solid #fa9b8a' : ''}` }}
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
            labelText="??????"
            placeholder="?????????????????????"
            style={{ border: `${hasError ? '1px solid #fa9b8a' : ''}` }}
            handleChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          {/* password field */}
          <Input
            id="password"
            name="password"
            type="password"
            value={password}
            labelText="??????"
            placeholder="?????????????????????"
            style={{ border: `${hasError ? '1px solid #fa9b8a' : ''}` }}
            handleChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        {/* button component */}
        <Button
          label={`${loading ? '???????????????,?????????...' : '??????'}`}
          className="auth-button button"
          disabled={!username || !email || !password}
        />
      </form>
    </div>
  );
};

export default Register;
