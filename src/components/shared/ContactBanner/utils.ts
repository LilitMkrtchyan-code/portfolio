import styles from './styles.module.css';

export const ContactBannerClassName = (className?: string) => {
  return [styles.contactBanner, className].filter(Boolean).join(' ');
};
