import { supabase } from "@/app/_lib/supabase";

class Auth {
  async signUp(dataForm: {
    fullName: string;
    phone: string;
    email: string;
    address?: string;
    password: string;
  }) {
    const { data, error } = await supabase.auth.signUp({
      phone: dataForm.phone,
      email: dataForm.email,
      password: dataForm.password,
      options: {
        data: {
          full_name: dataForm.fullName,
          address: dataForm.address,
          phone: dataForm.phone,
        },
      },
    });

    if (error) {
      throw new Error(error.message);
    }
    return data;
  }

  async signIn(dataForm: { email: string; password: string }) {
    const { data, error } = await supabase.auth.signInWithPassword(dataForm);
    if (error) {
      throw new Error(error.message);
    }
    return data;
  }

  async signOut() {
    const { error } = await supabase.auth.signOut();
    if (error) {
      throw new Error(error.message);
    }
  }

  async getUser() {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    return user;
  }
}

export const auth = new Auth();
