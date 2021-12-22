import { useState, useEffect } from 'react';
import { GiHalfBodyCrawling } from 'react-icons/gi';
import { BiRun, BiWalk } from 'react-icons/bi';
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
  }, []);

  return (
    <div>
      <h2>Novice</h2>
      <BiWalk />
      {
        novice
         && novice.map((skill) => (<li key={skill.id}>{skill.name}</li>))
      }
      <h2>Proficient</h2>
      <BiRun />
      {
        proficient
         && proficient.map((skill) => (<li key={skill.id}>{skill.name}</li>))
      }
      <h2>No Experinece</h2>
      <GiHalfBodyCrawling />
      {
        noExperinece
         && noExperinece.map((skill) => (<li key={skill.id}>{skill.name}</li>))
      }
    </div>
  );
};

export default Skills;
