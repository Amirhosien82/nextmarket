"use client";

import { createContext, ReactNode, useContext, useReducer } from "react";
import { Carts } from "@/app/_models/types";

type Items = {
  id: number;
  quantity: number;
};

type CartState = {
  items: Items[];
  carts: Carts[];
};

type AddItem = {
  type: "cart/addItem";
  payload: Carts;
};

type RemoveItem = {
  type: "cart/removeItem";
  payload: { id: number };
};

type UpdateQuantity = {
  type: "cart/updateQuantity";
  payload: Items;
};

type ClearCart = {
  type: "cart/clearCart";
};

type AddItems = {
  type: "cart/addItems";
  payload: { data: Carts[] };
};

type CartAction = AddItem | RemoveItem | UpdateQuantity | ClearCart | AddItems;

interface CartContextValue {
  dispatch: (action: CartAction) => void;
  state: CartState;
}

interface CartProviderProps {
  children: ReactNode;
}

const CartContext = createContext<CartContextValue | null>(null);

function CartProvider({ children }: CartProviderProps) {
  function addDataToLocalStorage(data: Items[]): void {
    localStorage.setItem("carts", JSON.stringify(data));
  }

  const initialState: CartState = {
    items: [],
    carts: [],
  };

  function cartReducer(state: CartState, action: CartAction) {
    switch (action.type) {
      case "cart/addItem": {
        const newItems = [
          ...state.items,
          { id: action.payload.id, quantity: action.payload.quantity },
        ];
        addDataToLocalStorage(newItems);
        return {
          ...state,
          carts: [...state.carts, action.payload],
          items: newItems,
        };
      }
      case "cart/removeItem": {
        const newItems = state.items.filter(
          (item) => item.id !== action.payload.id
        );
        addDataToLocalStorage(newItems);
        return {
          ...state,
          carts: state.carts.filter((item) => item.id !== action.payload.id),
          items: newItems,
        };
      }
      case "cart/updateQuantity": {
        const newItems = state.items.map((item) =>
          item.id === action.payload.id ? action.payload : item
        );
        addDataToLocalStorage(newItems);
        return {
          ...state,
          carts: state.carts.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: action.payload.quantity }
              : item
          ),
          items: newItems,
        };
      }
      case "cart/clearCart": {
        addDataToLocalStorage([]);
        return {
          ...state,
          carts: [],
          items: [],
        };
      }
      case "cart/addItems":
        return {
          ...state,
          carts: action.payload.data,
          items: action.payload.data.map((item) => {
            return {
              id: item.id,
              quantity: item.quantity,
            };
          }),
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
