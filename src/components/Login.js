import PropTypes from 'prop-types';
import { useState } from 'react';
import Axios from 'axios';
import styles from './login.module.css';

const Login = ({ updateStatus }) => {
  const [userNameReg, setUserNameReg] = useState('');
  const [passwordNameReg, setPasswordNameReg] = useState('');
  const [userNameLogin, setUserNameLogin] = useState('');
  const [passwordNameLogin, setPasswordNameLogin] = useState('');

  Axios.defaults.withCredentials = true;

  const register = () => {
    Axios.post('https://user-skills-backend.herokuapp.com/api/users/register', {
      username: userNameReg,
      password: passwordNameReg,
    }).then((res) => {
      if (res.data) {
        console.log(res.data);
        updateStatus(true);
      }
    });
    setUserNameReg('');
    setPasswordNameReg('');
  };

  const login = () => {
    Axios.post('https://user-skills-backend.herokuapp.com/api/users/login', {
      username: userNameLogin,
      password: passwordNameLogin,
    }).then((res) => {
      if (res.data) {
        console.log(res.data);
        updateStatus(true);
      }
    });
    setUserNameLogin('');
    setPasswordNameLogin('');
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h1 className={styles.title}>Registration</h1>

        <div className={styles.labels}>
          <label htmlFor="usernameReg">
            Username:
            {' '}
            <input type="text" id="usernameReg" value={userNameReg} onChange={(e) => { setUserNameReg(e.target.value); }} />
          </label>
          <label htmlFor="passwordReg">
            Password:
            {' '}
            <input type="text" id="passwordReg" value={passwordNameReg} onChange={(e) => { setPasswordNameReg(e.target.value); }} />
          </label>
        </div>
        <button className={styles.loginBtn} type="button" onClick={register}>Register</button>
      </div>

      <div className={styles.formContainer}>
        <h1 className={styles.title}>Login</h1>
        <div className={styles.labels}>
          <label htmlFor="usernameLogin">
            Username:
            {' '}
            <input type="text" id="passwordLogin" value={userNameLogin} onChange={(e) => { setUserNameLogin(e.target.value); }} />
          </label>
          <label htmlFor="passwordLogin">
            Password:
            {' '}
            <input type="text" id="passwordLogin" value={passwordNameLogin} onChange={(e) => { setPasswordNameLogin(e.target.value); }} />
          </label>
        </div>
        <button className={styles.loginBtn} onClick={login} type="button">Login</button>
      </div>
    </div>
  );
};

Login.propTypes = {
  updateStatus: PropTypes.func.isRequired,
};

export default Login;
