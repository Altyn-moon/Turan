export default function Heading({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const classes = ` ${className}`;
  return <h1 className={classes}>{children}</h1>;
}
