import { getSectionHeaderClassName } from './utils';
import type { SectionHeaderProps } from './types';
import Heading from '../Heading';
import styles from './styles.module.css';

const SectionHeader = ({ subtitle, title, description, className }: SectionHeaderProps) => {
  return (
    <div className={getSectionHeaderClassName(className)}>
      <div className={styles.titleArea}>
        <Heading as="span" variant="subtitle" className={styles.subtitle}>
          {subtitle}
        </Heading>
        <Heading as="h2" variant="sectionTitle" className={styles.title}>
          {title}
        </Heading>
      </div>

      {description && (
        <div className={styles.rightInfo}>
          <p className={styles.description}>{description}</p>
        </div>
      )}
    </div>
  );
};

export default SectionHeader;
