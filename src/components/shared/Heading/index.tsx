import type { HeadingProps, HeadingTag, HeadingVariant } from './types';
import { getHeadingClassName } from './utils';

const DEFAULT_TAG: Record<HeadingVariant, HeadingTag> = {
  pageTitle: 'h1',
  sectionTitle: 'h2',
  cardTitle: 'h3',
  subtitle: 'span',
};

const Heading = ({ as, variant = 'cardTitle', children, className }: HeadingProps) => {
  const Component = as ?? DEFAULT_TAG[variant];

  return <Component className={getHeadingClassName(variant, className)}>{children}</Component>;
};

export default Heading;
