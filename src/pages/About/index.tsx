import { cvContent } from '../../data/cvContent';
import ReactMarkdown from 'react-markdown';
import styles from './styles.module.css';

const About = () => {
  return (
    <div className={styles.about}>
      <div className="container">
        <div className={styles.cv}>
          <div className="markdownContent">
            <ReactMarkdown>{cvContent}</ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
