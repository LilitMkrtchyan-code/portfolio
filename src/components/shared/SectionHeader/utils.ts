import styles from './styles.module.css';

export const getSectionHeaderClassName = (className?: string) => {
  return [styles.header, className].filter(Boolean).join(' ');
};
