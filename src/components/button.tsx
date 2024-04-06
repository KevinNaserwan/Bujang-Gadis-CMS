import Link from "next/link";

interface ButtonProps {
    name: string;
    className: string;
    href: string;
  }

export default function Button({name, className, href}: ButtonProps) {
    return (<Link
        href={href}
        className= {className}
      >
        {name}
      </Link>)
}