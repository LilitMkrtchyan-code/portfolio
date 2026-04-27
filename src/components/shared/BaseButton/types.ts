import type { ButtonHTMLAttributes, ReactNode } from 'react';
import type { NavLinkProps } from 'react-router-dom';

export type ButtonVariant = 'primary' | 'secondary';

type BaseProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
};

export type LinkButtonProps = BaseProps & { to: string } & NavLinkProps;
export type NativeButtonProps = BaseProps & {
  to?: never;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export type BaseButtonProps = LinkButtonProps | NativeButtonProps;
