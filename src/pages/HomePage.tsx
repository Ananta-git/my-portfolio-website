import React from 'react';
import Hero from '../components/sections/Hero';
import Projects from '../components/sections/Projects';
// import Skills from '../components/sections/Skills';
// import Experience from '../components/sections/Experience';
// import Contact from '../components/sections/Contact';
import Hero2 from '../components/sections/Hero2';
import ValueSection from '../components/sections/Valuesection';
import ExperienceSection from '../components/sections/ExperienceSection';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <ValueSection />
      {/* <Hero2 /> */}
      {/* <Projects />  */}
      <ExperienceSection />
      {/* <Skills />
      <Experience />
      <Contact /> */}
    </>
  );
};

export default HomePage;