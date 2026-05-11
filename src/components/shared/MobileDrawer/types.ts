import type { DrawerProps } from 'antd';

export type MobileDrawerProps = DrawerProps & {
  isOpen: boolean;
  onClose: () => void;
  closeBtnClassName?: string;
  className?: string;
};
