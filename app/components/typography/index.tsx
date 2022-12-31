import clsx from 'clsx';

function Heading1({
  children,
  className,
  ...props
}: React.HtmlHTMLAttributes<HTMLHeadElement>): JSX.Element {
  return (
    <h1
      className={clsx('text-center text-4xl font-bold text-neutral', className)}
      {...props}
    >
      {children}
    </h1>
  );
}
function Heading2({
  children,
  className,
  ...props
}: React.HtmlHTMLAttributes<HTMLHeadElement>): JSX.Element {
  return (
    <h2
      className={clsx('text-center text-xl font-light', className)}
      {...props}
    >
      {children}
    </h2>
  );
}

export const Heading = {
  One: Heading1,
  Two: Heading2,
};
