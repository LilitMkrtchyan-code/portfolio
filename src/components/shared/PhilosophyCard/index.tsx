import type { PhilosophyCardProps } from './types';
import styles from './styles.module.css';

export const PhilosophyCard = ({ title, description, icon: Icon }: PhilosophyCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.iconBox}>
        <Icon size={28} strokeWidth={2} className={styles.icon} />
      </div>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDescription}>{description}</p>
    </div>
  );
};
