import { useToggle } from '../../../hooks/useToggle';
import { Grid } from 'antd';
import { NavLink } from 'react-router-dom';
import { FULL_NAME, LOGO_TEXT } from '../../../consts';
import BaseButton from '../../shared/BaseButton';
import { Menu } from 'lucide-react';
import MobileDrawer from '../../shared/MobileDrawer';
import HeaderNav from '../HeaderNav';
import styles from './styles.module.css';

const { useBreakpoint } = Grid;

export const Header = () => {
  const { isVisible, show, hide } = useToggle();
  const { lg } = useBreakpoint();

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.logoWrapper}>
          {!lg && (
            <button
              className={styles.burgerButton}
              onClick={show}
              aria-label="Open navigation menu"
            >
              <Menu size={24} strokeWidth={2} />
            </button>
          )}
          <NavLink to="/" className={styles.logo}>
            {FULL_NAME}
          </NavLink>
        </div>

        {lg ? (
          <HeaderNav
            linkClassName={styles.link}
            activeClassName={styles.active}
            navClassName={styles.desktopNav}
          />
        ) : (
          <MobileDrawer
            isOpen={isVisible}
            onClose={hide}
            title={LOGO_TEXT}
            placement="left"
            size={350}
            closeBtnClassName={styles.closeButton}
          >
            <HeaderNav
              linkClassName={styles.mobileLink}
              activeClassName={styles.mobileActive}
              onLinkClick={hide}
              navClassName={styles.mobileHeaderNav}
            />
          </MobileDrawer>
        )}
        <BaseButton variant="primary" className={styles.headerCta}>
          LET'S TALK
        </BaseButton>
      </div>
    </header>
  );
};

export default Header;
