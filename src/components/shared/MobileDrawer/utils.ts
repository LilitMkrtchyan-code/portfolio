import styles from './styles.module.css';

export const getDrawerClassName = (className?: string) => {
  return [styles.mobileDrawer, className].filter(Boolean).join(' ');
};
