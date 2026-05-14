import type { InfoCardProps } from './types';
import { getInfoCardClassName } from './utils';
import { ArrowUpRight } from 'lucide-react';
import styles from './styles.module.css';

const InfoCard = ({
  category,
  title,
  subtitle,
  description,
  footerText,
  icon: Icon,
  className,
}: InfoCardProps) => {
  return (
    <div className={getInfoCardClassName(className)}>
      <div className={styles.cardHeader}>
        <div className={styles.iconWrapper}>
          <Icon size={22} strokeWidth={2} />
        </div>
        <span className={styles.category}>{category}</span>
      </div>

      <div className={styles.cardBody}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <h4 className={styles.cardSubtitle}>{subtitle}</h4>
        <p className={styles.cardDescription}>{description}</p>
      </div>

      <div className={styles.cardFooter}>
        <span className={styles.footerText}>{footerText}</span>
        <div className={styles.arrow}>
          <ArrowUpRight size={20} strokeWidth={1.5} />
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
