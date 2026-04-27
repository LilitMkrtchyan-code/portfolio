import { NavLink } from 'react-router-dom';
import { FULL_NAME } from '../../../consts';
import { HEADER_LINKS } from './consts';
import BaseButton from '../../shared/BaseButton';
import { getHeaderLinkClassName } from './utils';
import styles from './styles.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <NavLink to="/" className={styles.logo}>
          {FULL_NAME}
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
          LET'S TALK
        </BaseButton>
      </div>
    </header>
  );
};

export default Header;
