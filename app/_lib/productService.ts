// lib/productService.js
// مسیر درست رو تنظیم کن

import { supabase } from "@/app/_lib/supabase";

interface getProductsProps {
  page?: number;
  limit?: number;
  orderby?: string | undefined;
  min_price?: number;
  max_price?: number;
  has_selling_stock?: number | undefined;
  special_products?: boolean | undefined;
  name?: string | undefined;
}

class ServicesProduct {
  async getProducts(params: getProductsProps): Promise<{
    products: {
      images: string
      id: string
      name: string
      price: number | null
      discount: number
      count: number
      about: string
      special: boolean
      new: boolean
      date: Date
      sold: number
      colors: string
      props: string
    }[]
    count: number | null;
  } | undefined> {
    try {
      const {
        page = 1,
        limit = 12,
        orderby = "0",
        min_price = 0,
        max_price = 3_000_000,
        has_selling_stock = 0,
        special_products = false,
        name
      } = params;

      let query = supabase
        .from("product")
        .select("*", { count: "exact" });

      // -------------------- فیلترها ---------------------
      query = query
        .gte("discount", min_price)
        .lte("discount", max_price)
        .gte("count", has_selling_stock ? 1 : 0);

      if (special_products) {
        query = query.eq("special", true);
      }

      if (name) {
        query = query.ilike("name", `%${name}%`);
      }

      // ------------------- ترتیب (orderBy) ---------------------
      if (orderby === "0") {
        query = query.order("date", { ascending: true });
      } else if (orderby === "1") {
        query = query.order("sold", { ascending: false });
      } else if (orderby === "2") {
        query = query.order("discount", { ascending: false });
      } else {
        query = query.order("discount", { ascending: true });
      }

      // ------------------- صفحه‌بندی (Pagination) ---------------------
      const from = (page - 1) * limit;
      const to = from + limit - 1;
      query = query.range(from, to);

      // ------------------- اجرا ---------------------
      const { data: products, count, error } = await query;

      if (error) throw error;

      return { products, count };
    } catch (error) {
      console.error("Error in getProducts with Supabase:", error)
    }
  }

  async getProductById(id: string): Promise<{
    comments: {
      id: number;
      title: string;
      comment: string;
      like: number;
      dislike: number;
      fullName: string;
      productId: string;
      userId: number;
      created_at?: string;
    }[];
    product: {
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
    };
  } | null> {
    try {
      // دریافت اطلاعات محصول
      const { data: product, error: productError } = await supabase
        .from("product")
        .select("*")
        .eq("id", id)
        .single();

      if (productError) throw productError;
      if (!product) return null;

      // دریافت نظرات محصول
      const { data: comments, error: commentsError } = await supabase
        .from("comment")
        .select("*, user:user(fullName)")
        .eq("productId", id);

      if (commentsError) throw commentsError;

      // تبدیل داده‌های نظرات به فرمت مورد نظر
      const formattedComments = comments?.map(comment => ({
        id: comment.id,
        title: comment.title,
        comment: comment.comment,
        like: comment.like,
        dislike: comment.dislike,
        fullName: comment.user?.fullName || 'ناشناس',
        productId: comment.productId,
        userId: comment.userId,
        created_at: comment.created_at
      })) || [];

      return {
        product: {
          images: product.images,
          id: product.id,
          name: product.name,
          price: product.price,
          discount: product.discount,
          count: product.count,
          about: product.about,
          special: product.special,
          new: product.new,
          date: new Date(product.date),
          sold: product.sold,
          colors: product.colors,
          props: product.props
        },
        comments: formattedComments
      };
    } catch (error) {
      console.error("Error in getProductById:", error);
      return null;
    }
  }

}

export const servicesProduct = new ServicesProduct()