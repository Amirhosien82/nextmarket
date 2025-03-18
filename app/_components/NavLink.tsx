import Link from "next/link";

interface NavLinkProps {
  href: string;
  children: string;
  hover: boolean;
}

function NavLink({ href, children, hover = false }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={`whitespace-nowrap text-sm flex items-center justify-center ${
        hover
          ? "dark:text-gray-50 dark:hover:text-color-success-200 hover:text-color-success-100 group"
          : "text-color-success-100 dark:text-color-success-200"
      }`}
    >
      <span>{children}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className={`size-4 ${
          hover
            ? "dark:text-gray-50 dark:group-hover:text-color-success-200 group-hover:text-color-success-100"
            : "text-color-success-100 dark:text-color-success-200"
        }`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 19.5 8.25 12l7.5-7.5"
        />
      </svg>
    </Link>
  );
}

export default NavLink;
