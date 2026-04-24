import type { ProfileImageProps } from './types';
import { getProfileImageClassName } from './utils';
import styles from './styles.module.css';

export const ProfileImage = ({
  src,
  alt,
  className = '',
  withHover = false,
}: ProfileImageProps) => {
  const fullClassName = getProfileImageClassName(withHover, className);

  return (
    <div className={fullClassName}>
      <div className={styles.overlay} />
      <img src={src} alt={alt} className={styles.image} />
    </div>
  );
};

export default ProfileImage;
