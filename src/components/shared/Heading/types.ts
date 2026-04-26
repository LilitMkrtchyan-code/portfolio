import type { ReactNode } from 'react';

export type HeadingVariant = 'pageTitle' | 'sectionTitle' | 'cardTitle' | 'subtitle';
export type HeadingTag = 'h1' | 'h2' | 'h3' | 'span';

export type HeadingProps = {
  as?: HeadingTag;
  variant?: HeadingVariant;
  children: ReactNode;
  className?: string;
};
