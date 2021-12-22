import { useState, useEffect } from 'react';
import axios from 'axios';

const Skills = () => {
  const [profileSkills, setProfileSkills] = useState([]);
  useEffect(() => {
    axios.get('https://bio.torre.co/api/bios/davidalvarezmazzo')
      .then((response) => setProfileSkills(response.data.strengths));
  }, []);

  return (
    <div>
      {
        profileSkills
         && profileSkills.map((skill) => (<li key={skill.id}>{skill.name}</li>))
      }
    </div>
  );
};

export default Skills;
