"use client";

import { createContext, ReactNode, useContext, useReducer } from "react";

type CartItem = {
  id: number;
  quantity: number;
};

interface CartProviderProps {
  children: ReactNode;
}

interface CartAction {
  type: string;
  payload: CartItem;
}

interface CartState {
  items: CartItem[];
}

interface CartContextValue {
  dispatch: ({ type, payload }: CartAction) => void;
  state: CartState;
}

const CartContext = createContext<CartContextValue | null>(null);

function CartProvider({ children }: CartProviderProps) {
  const initialState: CartState = {
    items: [],
  };

  function cartReducer(state: CartState, { type, payload }: CartAction) {
    switch (type) {
      case "cart/addItem":
        return {
          ...state,
          items: [...state.items, payload],
        };
      case "cart/removeItem":
        return {
          ...state,
          items: state.items.filter((item) => item.id !== payload.id),
        };
      case "cart/updateQuantity":
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === payload.id ? payload : item
          ),
        };
      case "cart/clearCart":
        return {
          ...state,
          items: [],
        };
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}

export { useCart };
export default CartProvider;
