import clsx from 'clsx';

export type ButtonVariant =
  | 'neutral'
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'info'
  | 'success'
  | 'warning'
  | 'error'
  | 'ghost'
  | 'link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

export function Button({
  children,
  className,
  variant,
  ...props
}: ButtonProps): JSX.Element {
  const variantClassName = variant ? `btn-${variant}` : undefined;
  return (
    <button
      className={clsx('btn-active btn', className, variantClassName)}
      {...props}
    >
      {children}
    </button>
  );
}
