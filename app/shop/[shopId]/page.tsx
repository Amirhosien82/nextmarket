import PageShopId from "@/app/_components/PageShopId";
import { getProduct } from "@/app/_lib/product";

interface PageProps {
  params: { shopId: string };
}

async function Page({ params }: PageProps) {
  const { shopId } = params;
  const data = await getProduct(shopId);

  const images = data[1].map((item) => item.url);
  const {
    id = "",
    about = "",
    colors = "",
    count = 0,
    discount = 0,
    name = "",
    new: newProduct = false,
    price = 0,
    props = "",
  } = data[0] || {};

  const comments = data[2].map((item) => {
    return {
      like: item.like,
      title: item.title,
      dislike: item.dislike,
      fullName: item.User.fullName,
      comment: item.Comment,
    };
  });

  const productData = {
    id,
    about,
    colors,
    count,
    discount,
    name,
    newProduct,
    price,
    props,
    images,
    comments,
  };

  return <PageShopId {...productData} />;
}

export default Page;
