import Product from "@/app/_components/Product";

interface ShowShopProps {
  products: any[];
}

function ShowShop({ products }: ShowShopProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {products.map((product) => (
        <Product key={product.id} />
      ))}
    </div>
  );
}

export default ShowShop;
