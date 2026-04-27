import styles from './styles.module.css';
import type { ButtonVariant } from './types';

export const getBaseButtonClassName = (variant: ButtonVariant = 'primary', className?: string) => {
  return [styles.baseButton, styles[variant], className].filter(Boolean).join(' ');
};
