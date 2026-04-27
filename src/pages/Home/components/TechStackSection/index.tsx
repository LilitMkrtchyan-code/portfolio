import { TECH_STACK_ITEMS } from './consts';
import styles from './styles.module.css';

const TechStackSection = () => {
  return (
    <section className={styles.techStack}>
      <div className={styles.inner}>
        <div className={styles.marquee}>
          <div className={styles.track}>
            {[...Array(2)].map((_, index) => (
              <div key={index} className={styles.content} aria-hidden={index === 1}>
                {TECH_STACK_ITEMS.map(item => (
                  <div key={`${index}-${item.id}`} className={styles.item}>
                    <item.icon size={22} strokeWidth={1.5} className={styles.icon} />
                    <span className={styles.name}>{item.name}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
