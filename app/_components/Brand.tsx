import Link from "next/link";

function Brand({ desktop = false }: { desktop: boolean }) {
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
