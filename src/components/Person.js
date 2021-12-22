import { useState, useEffect } from 'react';
import axios from 'axios';

const Person = () => {
  const [profile, setProfile] = useState({});
  useEffect(() => {
    axios.get('https://bio.torre.co/api/bios/davidalvarezmazzo')
      .then((response) => {
        const data = response.data.person;
        setProfile(data);
      });
  }, []);

  return (
    <div>
      <img alt={profile.name} src={profile.picture} />
      <h2>{profile.name}</h2>
    </div>
  );
};

export default Person;
