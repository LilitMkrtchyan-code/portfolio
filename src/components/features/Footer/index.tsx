import { NavLink } from 'react-router-dom';
import { LOGO_TEXT, SOCIAL_LINKS } from '../../../consts';
import styles from './styles.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <NavLink to="/" className={styles.logo}>
            {LOGO_TEXT}
          </NavLink>
          <p className={styles.copyright}>© 2026 Lilit Mkrtchyan. Available for Work</p>
          <nav className={styles.nav} aria-label="Social links">
            {SOCIAL_LINKS.map(link => (
              <a
                key={link.href}
                href={link.href}
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
