import { NavLink } from 'react-router-dom';
import { getHeaderLinkClassName } from './utils';
import { HEADER_NAV_LINKS } from './consts';
import type { HeaderNavProps } from './types';

const HeaderNav = ({
  navClassName = '',
  linkClassName,
  activeClassName,
  onLinkClick,
}: HeaderNavProps) => {
  return (
    <nav className={navClassName} aria-label="Main navigation">
      {HEADER_NAV_LINKS.map(item => (
        <NavLink
          key={item.to}
          to={item.to}
          onClick={onLinkClick}
          className={({ isActive }) =>
            getHeaderLinkClassName(linkClassName, activeClassName, isActive)
          }
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
};
export default HeaderNav;
