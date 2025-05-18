import { supabase } from "@/app/_lib/supabase";

interface IgetBlogsProps {
  page?: number;
  limit?: number;
  orderby?: string | undefined;
  the_hottest?: boolean | undefined;
  name?: string | undefined;
}

class Blogs {
  async getBlogs(params: IgetBlogsProps): Promise<
    | {
        blogs: {
          image: string;
          id: string;
          message: string;
          created_at: Date;
          view: number;
          hottest: boolean;
        }[];

        count: number | null;
      }
    | undefined
  > {
    try {
      const {
        page = 1,
        limit = 12,
        orderby = "0",
        the_hottest = false,
        name,
      } = params;

      let query = supabase.from("blogs").select("*", { count: "exact" });

      // -------------------- فیلترها ---------------------

      if (the_hottest) {
        query = query.eq("hottest", true);
      }

      if (name) {
        query = query.ilike("message", `%${name}%`);
      }

      //------------------- ترتیب (orderBy) ---------------------
        if (orderby === "0") {
          query = query.order("created_at", { ascending: true });
        } else {
          query = query.order("view", { ascending: false });
        }
      // ------------------- صفحه‌بندی (Pagination) ---------------------
      const from = (page - 1) * limit;
      const to = from + limit - 1;
      query = query.range(from, to);

      // ------------------- اجرا ---------------------
      const { data: blogs, count, error } = await query;

      if (error) throw error;

      return { blogs, count };
    } catch (error) {
      console.error("Error in getBlogs with Supabase:", error);
    }
  }
}

export const blogs = new Blogs();
