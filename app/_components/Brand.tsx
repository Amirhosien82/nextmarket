import Link from "next/link";

interface BrandProps {
  desktop: boolean;
}

function Brand({ desktop = false }: BrandProps) {
  return (
    <Link
      href="/"
      className={`text-color-success-100 font-bold ${
        desktop ? "text-3xl" : "text-xl"
      }`}
    >
      NEXTMARKET
    </Link>
  );
}

export default Brand;
