import Link from "next/link";
import { ReactNode } from "react";

interface LinkIconProps {
  children: ReactNode;
  href: string;
  onClick?: () => void;
}

function LinkIcon({ children, href, onClick }: LinkIconProps) {
  return (
    <Link
      onClick={onClick}
      className="flex items-start justify-center gap-2 dark:text-gray-50 hover:text-color-success-100 dark:hover:text-color-success-200"
      href={href}
    >
      {children}
    </Link>
  );
}

export default LinkIcon;
