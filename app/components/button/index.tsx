import clsx from 'clsx';

const colorMap = {
  primary: {
    bg: 'green200',
    text: 'white',
  },
};

export type ButtonVariant = 'primary';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

export function Button({
  children,
  className,
  variant,
  ...props
}: ButtonProps): JSX.Element {
  const variantClassName = variant
    ? `bg-${colorMap[variant].bg} text-${colorMap[variant].text}`
    : undefined;

  return (
    <button
      className={clsx(
        'flex items-center justify-center rounded border-none px-3 py-2',
        className,
        variantClassName
      )}
      {...props}
    >
      {children}
    </button>
  );
}
