import Link from "next/link";

interface ButtonProps {
    name: string;
    className: string;
  }

export default function Button({name, className}: ButtonProps) {
    return (<Link
        href={"/"}
        className= {className}
      >
        {name}
      </Link>)
}