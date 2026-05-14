import type { LucideIcon } from 'lucide-react';

export type InfoCardProps = {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  footerText: string;
  icon: LucideIcon;
  className?: string;
};
