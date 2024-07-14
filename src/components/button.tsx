import Link from "next/link";

interface ButtonProps {
  name: string;
  className: string;
  href: string;
  onClick?: () => void;
}

export default function Button({
  name,
  className,
  href,
  onClick,
}: ButtonProps) {
  return (
    <Link href={href} className={className}>
      {name}
    </Link>
  );
}
