import type { LucideIcon } from 'lucide-react';

export type DirectChannelItem = {
  id: string;
  label: string;
  title: string;
  href: string;
  isExternal?: boolean;
  icon: LucideIcon;
};
