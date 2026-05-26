import Heading from '../../components/shared/Heading';
import ContactForm from './components/ContactForm';
import DirectChannels from './components/DirectChannels';
import { CONTACT_PAGE_DESCRIPTION, PAGE_TITLE_HIGHLIGHT, PAGE_TITLE_PREFIX } from './consts';
import styles from './styles.module.css';

const Contact = () => {
  return (
    <section className={styles.contactPage}>
      <div className="container">
        <div className={styles.contentGrid}>
          <div className={styles.leftColumn}>
            <header className={styles.hero}>
              <Heading as="h1" variant="pageTitle" className={styles.heroTitle}>
                {PAGE_TITLE_PREFIX}{' '}
                <span className={styles.accentText}>{PAGE_TITLE_HIGHLIGHT}</span>
              </Heading>
              <p className={styles.heroDescription}>{CONTACT_PAGE_DESCRIPTION}</p>
            </header>
            <DirectChannels />
          </div>
          <div className={styles.rightColumn}>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
