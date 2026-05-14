import type { ReactNode } from 'react';

export type SectionHeaderProps = {
  subtitle: string;
  title: ReactNode;
  description?: string;
  className?: string;
};
