import PageShopId from "@/app/_components/PageShopId";
import { servicesProduct } from "@/app/_lib/productService";

interface PageProps {
  params: { shopId: string };
}

async function Page({ params }: PageProps) {
  const { shopId } = params;
  const { product, comments } = await servicesProduct.getProductById(shopId);

  const newData = {
    id: product?.id,
    about: product?.about,
    colors: product?.colors,
    count: product?.count,
    discount: product?.discount,
    name: product?.name,
    newProduct: product?.new,
    price: product?.price,
    props: product?.props,
    images: product?.images,
    comments: comments,
  };

  return <PageShopId {...newData} />;
}

export default Page;
