import Heading from '../../../../components/shared/Heading';
import BaseButton from '../../../../components/shared/BaseButton';
import BaseImage from '../../../../components/shared/BaseImage';
import { CV_PATH, FULL_NAME, HERO_IMAGE_URL, JOB_TITLE } from '../../../../consts';
import { HERO_DESCRIPTION, HERO_TAGS } from './consts';
import styles from './styles.module.css';

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.heroInner}>
          <div className={styles.content}>
            <div className={styles.nameRow}>
              <span className={styles.line} />
              <span className={styles.name}>{FULL_NAME}</span>
            </div>
            <Heading as="h1" variant="sectionTitle" className={styles.title}>
              {JOB_TITLE}
            </Heading>
            <p className={styles.description}>{HERO_DESCRIPTION}</p>
            <div className={styles.actions}>
              <a href={CV_PATH} download className={styles.cvButton}>
                Download CV
              </a>
              <BaseButton variant="primary" className={styles.aiButton}>
                Ask AI About Me
              </BaseButton>
            </div>
            <div className={styles.tags}>
              {HERO_TAGS.map(({ label, icon: Icon }) => (
                <div key={label} className={styles.tag}>
                  <Icon size={18} className={styles.tagIcon} />
                  <span className={styles.tagLabel}>{label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.imageWrapper}>
            <BaseImage
              src={HERO_IMAGE_URL}
              alt={FULL_NAME}
              className={styles.profileContainer}
              withHover
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
