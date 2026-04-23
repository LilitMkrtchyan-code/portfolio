import { NavLink } from 'react-router-dom';
import { FOOTER_LOGO_TEXT, FOOTER_COPYRIGHT, FOOTER_LINKS } from './consts';
import styles from './styles.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <NavLink to="/" className={styles.logo}>
          {FOOTER_LOGO_TEXT}
        </NavLink>
        <p className={styles.copyright}>{FOOTER_COPYRIGHT}</p>
        <nav className={styles.nav} aria-label="Social links">
          {FOOTER_LINKS.map(link => (
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
    </footer>
  );
};

export default Footer;
