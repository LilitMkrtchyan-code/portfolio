import { NavLink } from 'react-router-dom';
import type { BaseButtonProps, LinkButtonProps } from './types';
import { getBaseButtonClassName } from './utils';

export const BaseButton = ({
  children,
  variant = 'primary',
  className = '',
  ...props
}: BaseButtonProps) => {
  const fullClassName = getBaseButtonClassName(variant, className);

  if ('to' in props) {
    const { to, ...linkProps } = props as LinkButtonProps;
    return (
      <NavLink to={to} className={fullClassName} {...linkProps}>
        {children}
      </NavLink>
    );
  }
  return (
    <button className={fullClassName} type={props.type ?? 'button'} {...props}>
      {children}
    </button>
  );
};

export default BaseButton;
