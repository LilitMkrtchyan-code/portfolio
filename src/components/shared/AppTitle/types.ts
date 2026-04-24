import type { ReactNode } from 'react';

export type TitleVariant = 'pageTitle' | 'sectionTitle' | 'cardTitle';
export type TitleTag = 'h1' | 'h2' | 'h3';

export type AppTitleProps = {
  as?: TitleTag;
  variant?: TitleVariant;
  children: ReactNode;
  className?: string;
};
