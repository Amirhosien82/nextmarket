"use client";
import Product from "@/app/_components/Product";
import Card from "@/app/_components/Card";

interface ShowItemsProps {
  isProduct: boolean;
  items: {
    images: string;
    id: string;
    name: string;
    price: number | null;
    discount: number;
    count: number;
    about: string;
    special: boolean;
    new: boolean;
    date: Date;
    sold: number;
    colors: string;
    props: string;
  }[];
}

function ShowItems({ items = [], isProduct }: ShowItemsProps) {
  console.log("data", items);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {isProduct
        ? items.map((item) => <Product key={item.id} product={item} />)
        : items.map((item) => <Card key={item.id} />)}
    </div>
  );
}

export default ShowItems;
