import styles from './styles.module.css';

export const getInfoCardClassName = (className?: string) => {
  return [styles.infoCard, className].filter(Boolean).join(' ');
};
