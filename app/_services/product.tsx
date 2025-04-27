"use client";

import api from "@/app/_services/initialApi";
import { AxiosInstance } from "axios";
import { Carts } from "@/app/_models/types";

class Product {
  private initalApi: AxiosInstance;

  constructor() {
    this.initalApi = api;
  }

  getProducts() {}

  async getProductById(id: number) {
    const data: Carts = await this.initalApi.get(`/[${id}]`);
  }

  async getProductByIds(ids: number[]) {
    const data: Carts[] = await this.initalApi.get(`/[${ids}]`);
    return data;
  }
}

export { Product };
