import Link from "next/link";

function LinkIcon({ children, href }: { children: any; href: string }) {
  return (
    <Link
      className="flex items-start justify-center gap-2 dark:text-gray-50 hover:text-color-success-100 dark:hover:text-color-success-200"
      href={href}
    >
      {children}
    </Link>
  );
}

export default LinkIcon;
