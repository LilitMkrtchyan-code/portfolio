import type { AppTitleProps, TitleTag, TitleVariant } from './types';
import styles from './styles.module.css';

const DEFAULT_TAG: Record<TitleVariant, TitleTag> = {
  pageTitle: 'h1',
  sectionTitle: 'h2',
  cardTitle: 'h3',
};

const AppTitle = ({ as, variant = 'cardTitle', children, className = '' }: AppTitleProps) => {
  const Component = as ?? DEFAULT_TAG[variant];

  return <Component className={`${styles[variant]} ${className}`}>{children}</Component>;
};

export default AppTitle;
