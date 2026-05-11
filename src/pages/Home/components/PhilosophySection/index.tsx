import { PhilosophyCard } from '../../../../components/shared/PhilosophyCard';
import SectionHeader from '../../../../components/shared/SectionHeader';
import { DESCRIPTION, PHILOSOPHY_CARDS } from './consts';
import styles from './styles.module.css';

const PhilosophySection = () => {
  return (
    <section className={styles.philosophy}>
      <div className="container">
        <div className={styles.inner}>
          <SectionHeader
            title="Engineering Mindset"
            subtitle="Philosophy"
            description={DESCRIPTION}
          />
          <div className={styles.cards}>
            {PHILOSOPHY_CARDS.map(card => (
              <PhilosophyCard key={card.id} {...card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
