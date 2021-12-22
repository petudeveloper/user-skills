import { useState, useEffect } from 'react';
import axios from 'axios';

const Skills = () => {
  const [novice, setNovice] = useState([]);
  const [proficient, setProficient] = useState([]);
  const [noExperinece, setNoExperinece] = useState([]);
  useEffect(() => {
    axios.get('https://bio.torre.co/api/bios/davidalvarezmazzo')
      .then((response) => {
        const data = response.data.strengths;
        const noviceSkills = [];
        const noExperienceSkills = [];
        const proficientSkills = [];

        data.forEach((element) => {
          if (element.proficiency === 'novice') {
            noviceSkills.push(element);
          } else if (element.proficiency === 'no-experience-interested') {
            noExperienceSkills.push(element);
          } else if (element.proficiency === 'proficient') {
            proficientSkills.push(element);
          }
        });
        setNovice(noviceSkills);
        setProficient(proficientSkills);
        setNoExperinece(noExperienceSkills);
      });
    // .then((response) => setProfileSkills(response.data.strengths));
  }, []);

  return (
    <div>
      <h2>Novice</h2>
      {
        novice
         && novice.map((skill) => (<li key={skill.id}>{skill.name}</li>))
      }
      <h2>Proficient</h2>
      {
        proficient
         && proficient.map((skill) => (<li key={skill.id}>{skill.name}</li>))
      }
      <h2>No Experinece</h2>
      {
        noExperinece
         && noExperinece.map((skill) => (<li key={skill.id}>{skill.name}</li>))
      }
    </div>
  );
};

export default Skills;
