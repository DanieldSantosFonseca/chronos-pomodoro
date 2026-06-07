import type { ComponentProps, ReactNode } from 'react';
import styles from './styles.module.css';

type DefaultButtonProps = {
  icon: ReactNode;
  color?: 'green' | 'red';
} & ComponentProps<'button'>;

export function DefaultButton({
  icon,
  color = 'green',
  ...props
}: DefaultButtonProps) {
  return (
    <>
      <button className={`${styles.button} ${styles[color]}`} {...props}>
        {icon}
      </button>
    </>
  );
}
