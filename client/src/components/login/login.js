import { useState } from 'react';
import Axios from 'axios';
import styles from './login.module.css';

const Login = () => {
  const [userNameReg, setUserNameReg] = useState('');
  const [passwordNameReg, setPasswordNameReg] = useState('');
  const [userNameLogin, setUserNameLogin] = useState('');
  const [passwordNameLogin, setPasswordNameLogin] = useState('');

  const register = () => {
    Axios.post('http://localhost:3001/register', {
      username: userNameReg,
      password: setPasswordNameReg
    }).then((res) => console.log(res))
  } 

  return (
    <div>
      <div className={styles.formContainer}>
        <h1 className={styles.title}>Registration</h1>
        <label htmlFor="usernameReg">
          Username
          <input type="text" id="usernameReg" value={userNameReg} onChange={(e) => { setUserNameReg(e.target.value); }} />
        </label>
        <label htmlFor="passwordReg">
          Password
          <input type="text" id="passwordReg" value={passwordNameReg} onChange={(e) => { setPasswordNameReg(e.target.value); }} />
        </label>
        <button type="button" onClick={register}>Register</button>
      </div>
      <div className={styles.formContainer}>
        <h1 className={styles.title}>Login</h1>
        <label htmlFor="usernameLogin">
          Username
          <input type="text" id="passwordLogin" onChange={(e) => { setUserNameLogin(e.target.value); }} />
        </label>
        <label htmlFor="passwordLogin">
          Password
          <input type="text" id="passwordLogin" onChange={(e) => { setPasswordNameLogin(e.target.value); }} />
        </label>
        <button type="button">Register</button>
      </div>
    </div>
  );
};

export default Login;
