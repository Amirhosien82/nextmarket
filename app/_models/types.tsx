import { ReactElement, ReactNode } from "react";

export interface OpenContext {
  open: boolean;
  setOpen: (value: boolean) => void;
}

export interface OpenProps {
  children: ReactElement;
}

export interface WindowProps {
  children: ReactNode;
}

export type Carts = {
  id: number;
  name: string;
  img: string[];
  price: number;
  discount: number;
  quantity: number;
};
