import Heading from '../../../../components/shared/Heading';
import { ESSENTIALS } from './consts';
import styles from './styles.module.css';

const CvEssentials = () => {
  return (
    <div className={styles.cvEssentials}>
      <Heading variant="subtitle" className={styles.title}>
        CV Essentials
      </Heading>
      <div className={styles.essentialsList}>
        {ESSENTIALS.map((item, index) => (
          <div key={index} className={styles.essentialItem}>
            <span className={styles.itemLabel}>{item.label}</span>
            <span className={`${styles.itemStatus} ${styles[item.status]}`}>{item.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
export default CvEssentials;
