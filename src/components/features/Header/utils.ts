export const getHeaderLinkClassName = (
  baseClassName: string,
  activeClassName: string,
  isActive: boolean,
): string => {
  return isActive ? `${baseClassName} ${activeClassName}` : baseClassName;
};
