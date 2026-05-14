import Heading from '../../../../components/shared/Heading';
import BaseImage from '../../../../components/shared/BaseImage';
import { BIOGRAPHY_DESCRIPTION, BIOGRAPHY_SUBTITLE, BIOGRAPHY_TITLE_LINES } from './consts';
import { FULL_NAME, HERO_IMAGE_URL } from '../../../../consts';
import styles from './styles.module.css';

const BiographySection = () => {
  return (
    <section className={styles.biography}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.content}>
            <Heading as="span" variant="subtitle" className={styles.subtitle}>
              {BIOGRAPHY_SUBTITLE}
            </Heading>
            <Heading as="h1" variant="pageTitle" className={styles.title}>
              {BIOGRAPHY_TITLE_LINES.map(item => (
                <span key={item.id} className={`${styles.titleLine} ${styles[item.className]}`}>
                  {item.text}
                </span>
              ))}
            </Heading>
            <p className={styles.description}>{BIOGRAPHY_DESCRIPTION}</p>
          </div>

          <div className={styles.imageWrapper}>
            <div className={styles.imageInner}>
              <BaseImage
                src={HERO_IMAGE_URL}
                alt={FULL_NAME}
                withHover={true}
                className={styles.profileContainer}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BiographySection;
