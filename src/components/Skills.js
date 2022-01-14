import { useState, useEffect } from 'react';
import { GiHalfBodyCrawling } from 'react-icons/gi';
import { BiRun, BiWalk } from 'react-icons/bi';
import axios from 'axios';
import styles from './skills.module.css';

const Skills = () => {
  const [novice, setNovice] = useState([]);
  const [proficient, setProficient] = useState([]);
  const [noExperinece, setNoExperinece] = useState([]);
  useEffect(() => {
    axios.get('/torre/api/bios/davidalvarezmazzo')
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
    <div className={styles.container}>
      <h3 className={styles.title}>Skills and Interests:</h3>
      <div>
        <div className={styles.skillTitleContainer}>
          <BiRun />
          <h4 className={styles.skillTitle}>Proficient</h4>
        </div>
        <div>
          {
            proficient
            && proficient.map((skill) => (
              <span
                className={styles.skillItem}
                key={skill.id}
              >
                {skill.name}
              </span>
            ))
          }
        </div>
      </div>

      <div>
        <div className={styles.skillTitleContainer}>
          <BiWalk />
          <h4 className={styles.skillTitle}>Novice</h4>
        </div>
        <div>
          {
            novice
            && novice.map((skill) => (
              <span
                className={styles.skillItem}
                key={skill.id}
              >
                {skill.name}
              </span>
            ))
          }
        </div>
      </div>

      <div>
        <div className={styles.skillTitleContainer}>
          <GiHalfBodyCrawling />
          <h4 className={styles.skillTitle}>No Experinece</h4>
        </div>
        <div>
          {
            noExperinece
            && noExperinece.map((skill) => (
              <span
                className={styles.skillItem}
                key={skill.id}
              >
                {skill.name}
              </span>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Skills;
