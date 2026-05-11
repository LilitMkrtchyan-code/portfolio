import { Drawer } from 'antd';
import type { MobileDrawerProps } from './types';
import { getDrawerClassName } from './utils';
import { X } from 'lucide-react';
import styles from './styles.module.css';

const MobileDrawer = ({
  isOpen,
  onClose,
  children,
  title,
  closeBtnClassName = '',
  className,
  ...restProps
}: MobileDrawerProps) => {
  return (
    <Drawer
      title={title}
      placement="right"
      onClose={onClose}
      open={isOpen}
      closeIcon={null}
      extra={
        <button
          onClick={onClose}
          className={`${styles.closeButton} ${closeBtnClassName}`}
          aria-label="Close menu"
        >
          <X size={20} strokeWidth={2} />
        </button>
      }
      className={getDrawerClassName(className)}
      {...restProps}
    >
      <div className={styles.drawerContent}>{children}</div>
    </Drawer>
  );
};

export default MobileDrawer;
