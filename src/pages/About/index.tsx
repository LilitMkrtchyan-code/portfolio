import ContactBanner from '../../components/shared/ContactBanner';
import BiographySection from './components/BiographySection';
import EducationSection from './components/EducationSection';
import WorkingApproach from './components/WorkingApproach';

const About = () => {
  return (
    <>
      <BiographySection />
      <EducationSection />
      <WorkingApproach />
      <ContactBanner />
    </>
  );
};

export default About;
