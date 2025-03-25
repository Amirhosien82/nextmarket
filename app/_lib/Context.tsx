"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface ContextProviderProps {
  children: ReactNode;
}

type Cart = { id: number; quantity: number };

const Context = createContext<
  | {
      data: Cart[];
      quantityPluse: (id: number) => void;
      quantityMinus: (id: number) => void;
      hasCart: (id: number) => boolean;
      removeCart: (id: number) => void;
      clearCart: () => void;
      insertCart: (id: number) => void;
    }
  | undefined
>(undefined);

function ContextProvider({ children }: ContextProviderProps) {
  const [data, setData] = useState<Cart[]>([]);

  useEffect(() => {
    const cart: Cart[] = JSON.parse(localStorage.getItem("carts") || "[]");
    setData(cart);
  }, []);

  useEffect(() => {
    localStorage.setItem("carts", JSON.stringify(data));
  }, [data]);

  function quantityPluse(id: number) {
    data.map((cart) =>
      cart.id === id ? { id, quantity: cart.quantity + 1 } : cart
    );
  }

  function quantityMinus(id: number) {
    const isOne: boolean = data.includes({ id, quantity: 1 });
    if (isOne) {
      data.filter((cart) => cart.id !== id);
    } else {
      data.map((cart) =>
        cart.id === id ? { id, quantity: cart.quantity - 1 } : cart
      );
    }
  }

  function removeCart(id: number) {
    const newCart = data.filter((cart) => cart.id !== id);
    setData(newCart);
  }

  function clearCart() {
    setData([]);
  }

  function hasCart(id: number) {
    const has: boolean = data.some((cart) => cart.id == id);
    return has;
  }

  function insertCart(id: number) {
    setData((cart) => [...cart, { id, quantity: 1 }]);
  }

  return (
    <Context.Provider
      value={{
        data,
        quantityMinus,
        quantityPluse,
        hasCart,
        removeCart,
        clearCart,
        insertCart,
      }}
    >
      {children}
    </Context.Provider>
  );
}

function usePost() {
  const data = useContext(Context);
  if (data) return data;
  throw new Error("could");
}

export { usePost };
export default ContextProvider;
