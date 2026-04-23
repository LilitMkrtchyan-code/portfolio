import { NavLink } from 'react-router-dom';
import BaseButton from '../../shared/BaseButton';
import { HEADER_CTA_LABEL, HEADER_LINKS, LOGO_TEXT } from './consts';
import { getHeaderLinkClassName } from './utils';
import styles from './styles.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <NavLink to="/" className={styles.logo}>
          {LOGO_TEXT}
        </NavLink>
        <nav className={styles.nav} aria-label="Main navigation">
          {HEADER_LINKS.map(item => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                getHeaderLinkClassName(styles.link, styles.active, isActive)
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <BaseButton variant="primary" className={styles.headerCta}>
          {HEADER_CTA_LABEL}
        </BaseButton>
      </div>
    </header>
  );
};

export default Header;
