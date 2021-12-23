import { useState } from 'react';
import styles from './login.module.css';

const Login = () => {
  const [userNameReg, setUserNameReg] = useState('');
  const [passwordNameReg, setPasswordNameReg] = useState('');

  return (
    <div>
      <div className={styles.formContainer}>
        <h1 className={styles.title}>Registration</h1>
        <label htmlFor="usernameReg">
          Username
          <input type="text" id="usernameReg" />
        </label>
        <label htmlFor="passwordReg">
          Password
          <input type="text" id="passwordReg" />
        </label>
        <button type="button">Register</button>
      </div>
      <div className={styles.formContainer}>
        <h1 className={styles.title}>Login</h1>
        <label htmlFor="usernameLogin">
          Username
          <input type="text" id="passwordLogin" />
        </label>
        <label htmlFor="passwordLogin">
          Password
          <input type="text" id="passwordLogin" />
        </label>
        <button type="button">Register</button>
      </div>
    </div>
  );
};

export default Login;
