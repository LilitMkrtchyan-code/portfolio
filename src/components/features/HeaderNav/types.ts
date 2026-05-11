export type HeaderNavLink = {
  label: string;
  to: string;
};

export type HeaderNavProps = {
  navClassName?: string;
  linkClassName: string;
  activeClassName: string;
  onLinkClick?: () => void;
};
