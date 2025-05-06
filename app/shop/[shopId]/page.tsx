import PageShopId from "@/app/_components/PageShopId";
import { servicesProduct } from "@/app/_lib/productService";

interface PageProps {
  params: { shopId: string };
}

async function Page({ params }: PageProps) {
  const { shopId } = params;
  const data = await servicesProduct.getProductById(shopId);

  const newData = {
    id: data?.product?.id || "",
    about: data?.product?.about || "",
    colors: data?.product?.colors || "",
    count: data?.product?.count || 0,
    discount: data?.product?.discount || 0,
    name: data?.product?.name || "",
    newProduct: data?.product?.new || false,
    price: data?.product?.price || 0,
    props: data?.product?.props || "{}", 
    images: data?.product?.images || "",
    comments: data?.comments || [],
  };

  return <PageShopId {...newData} />;
}

export default Page;
