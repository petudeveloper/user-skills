import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './person.module.css';

const Person = () => {
  const [profile, setProfile] = useState({});
  useEffect(() => {
    axios.get('/api/bios/davidalvarezmazzo')
      .then((response) => {
        const data = response.data.person;
        setProfile(data);
      });
  }, []);

  return (
    <div className={styles.container}>
      <svg className={styles.svg} viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="img" patternUnits="userSpaceOnUse" width="100" height="100">
            <image xlinkHref={profile.picture} x="-25" width="150" height="100" />
          </pattern>
        </defs>
        <polygon points="50 1 95 25 95 75 50 99 5 75 5 25" fill="url(#img)" />
      </svg>
      <h2 className={styles.name}>{profile.name}</h2>
    </div>
  );
};

export default Person;
