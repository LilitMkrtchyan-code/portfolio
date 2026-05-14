import InfoCard from '../../../../components/shared/InfoCard';
import SectionHeader from '../../../../components/shared/SectionHeader';
import {
  INFO_CARDS,
  EDUCATION_SECTION_TITLE,
  EDUCATION_SECTION_DESCRIPTION,
  EDUCATION_SECTION_SUBTITLE,
  CODE_IMAGE_ALT_TEXT,
} from './consts';
import code from '../../../../assets/images/code.webp';
import BaseImage from '../../../../components/shared/BaseImage';
import styles from './styles.module.css';

const EducationSection = () => {
  const featuredCard = INFO_CARDS.find(c => c.id === 'frontend');
  const otherCards = INFO_CARDS.filter(c => c.id !== 'frontend');

  return (
    <section className={styles.educationSection}>
      <div className="container">
        <div className={styles.inner}>
          <SectionHeader
            subtitle={EDUCATION_SECTION_SUBTITLE}
            title={EDUCATION_SECTION_TITLE}
            description={EDUCATION_SECTION_DESCRIPTION}
          />
          <div className={styles.cardsGrid}>
            {featuredCard && <InfoCard {...featuredCard} className={styles.featured} />}
            <div className={styles.imageCard}>
              <BaseImage src={code} alt={CODE_IMAGE_ALT_TEXT} withHover />
            </div>
            {otherCards.map(card => (
              <InfoCard key={card.id} {...card} className={styles.equalCard} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
