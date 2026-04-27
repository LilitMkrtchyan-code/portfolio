import type { HeadingVariant } from './types';
import styles from './styles.module.css';

export const getHeadingClassName = (variant: HeadingVariant, className?: string) => {
  return [styles[variant], className].filter(Boolean).join(' ');
};
