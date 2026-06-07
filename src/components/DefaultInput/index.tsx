import type { ComponentProps } from 'react';
import styles from './styles.module.css';

type DefaultInputProps = {
  id: string;
  labelText: string;
} & ComponentProps<'input'>;

export function DefaultInput({ id, labelText, ...rest }: DefaultInputProps) {
  return (
    <>
      <label className={styles.label} htmlFor={id}>
        {labelText}
      </label>
      <input id={id} className={styles.input} {...rest} />
    </>
  );
}
