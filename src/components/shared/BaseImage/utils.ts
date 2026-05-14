import styles from './styles.module.css';

export const getProfileImageClassName = (withHover: boolean = false, className?: string) => {
  return [styles.profileImage, withHover ? styles.withHover : '', className]
    .filter(Boolean)
    .join(' ');
};
