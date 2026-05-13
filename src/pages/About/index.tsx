import ReactMarkdown from 'react-markdown';
import BiographyHeroSection from './components/BiographyHeroSection';
import { cvContent } from '../../data/cvContent';
import styles from './styles.module.css';

const About = () => {
  return (
    <>
      <BiographyHeroSection />
      <section className={styles.about}>
        <div className="container">
          <div className={styles.cv}>
            <div className="markdownContent">
              <ReactMarkdown>{cvContent}</ReactMarkdown>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
