"use client";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useReducer,
} from "react";
import { auth } from "@/app/_lib/auth";
import { servicesProduct } from "../_lib/productService";

// TYPES
type User = { aud: boolean; fullName: string | null };
type CardSave = { id: string; quantity: number };
type Card = {
  id: string | undefined;
  name: string | undefined;
  image: string | undefined;
  price: number | null | undefined;
  discount: number | undefined;
  count: number | undefined;
  quantity: number;
};

type Favorites = {
  id: string | undefined;
  name: string | undefined;
  image: string | undefined;
  price: number | null | undefined;
  discount: number | undefined;
  count: number | undefined;
};

type State = {
  user: User;
  card: Card[];
  favorites: Favorites[];
  loading: boolean;
  loadingQuantity: boolean;
};

type Action =
  | { type: "user/add"; payload: User }
  | { type: "card/set"; payload: Card[] }
  | { type: "card/add"; payload: Card }
  | { type: "card/update-quantity"; payload: CardSave }
  | { type: "card/remove"; payload: { id: string } }
  | { type: "card/clear" }
  | { type: "favorites/set"; payload: Favorites[] }
  | { type: "favorites/add"; payload: Favorites }
  | { type: "favorites/remove"; payload: { id: string } }
  | { type: "favorites/clear" }
  | { type: "loading/set"; payload: boolean }
  | { type: "loading-quantity/set"; payload: boolean };

type ContextType = State & {
  dispatch: React.Dispatch<Action>;
  addToCart: (product: Card) => Promise<void>;
  updateQuantity: (cardSave: CardSave) => Promise<void>;
  removeFromCart: (id: string) => Promise<void>;
  clearCart: () => Promise<void>;
  addToFavorites: (product: Favorites) => Promise<void>;
  removeFromFavorites: (id: string) => Promise<void>;
  clearFavorites: () => Promise<void>;
};

// CONTEXT SETUP
const initialState: State = {
  user: { aud: false, fullName: null },
  card: [],
  favorites: [],
  loading: false,
  loadingQuantity: false,
};

const AppContext = createContext<ContextType | null>(null);

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "user/add":
      return { ...state, user: action.payload };
    case "card/set":
      return { ...state, card: action.payload };
    case "card/add":
      return { ...state, card: [...state.card, action.payload] };
    case "card/update-quantity":
      return {
        ...state,
        card: state.card.map((c) =>
          c.id === action.payload.id
            ? { ...c, quantity: action.payload.quantity }
            : c
        ),
      };
    case "card/remove":
      return {
        ...state,
        card: state.card.filter((c) => c.id !== action.payload.id),
      };
    case "card/clear":
      return { ...state, card: [] };

    case "favorites/set":
      return { ...state, favorites: action.payload };
    case "favorites/add":
      return { ...state, favorites: [...state.favorites, action.payload] };

    case "favorites/remove":
      return {
        ...state,
        favorites: state.favorites.filter((c) => c.id !== action.payload.id),
      };
    case "favorites/clear":
      return { ...state, favorites: [] };

    case "loading/set":
      return { ...state, loading: action.payload };

    case "loading-quantity/set":
      return { ...state, loadingQuantity: action.payload };
    default:
      return state;
  }
}

// UTIL FUNCTIONS
async function persistCard(cards: Card[], user: User) {
  const newCard = cards.map((item) => ({
    id: item.id,
    quantity: item.quantity,
  }));
  const jsonCard = JSON.stringify(newCard);

  if (user.aud) {
    await auth.updateUser(jsonCard);
  } else {
    localStorage.setItem("card", jsonCard);
  }
}

async function persistFavorites(cards: Favorites[], user: User) {
  const newFavorites = cards.map((item) => ({
    id: item.id,
  }));
  const jsonFavorites = JSON.stringify(newFavorites);

  if (user.aud) {
    await auth.updateUserFavorites(jsonFavorites);
  } else {
    localStorage.setItem("favorites", jsonFavorites);
  }
}

async function getProducts(idCards: CardSave[]) {
  const products = await Promise.all(
    idCards.map(async (item) => {
      const product = await servicesProduct.getProductById(item.id);
      return {
        id: product?.product.id,
        price: product?.product.price,
        discount: product?.product.discount,
        count: product?.product.count,
        quantity: item.quantity,
        name: product?.product.name,
        image: product?.product.images?.split("***")[0] || "",
      };
    })
  );
  return products;
}

// PROVIDER
export default function Provider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = async (product: Card) => {
    try {
      dispatch({ type: "loading/set", payload: true });
      const newCart = [...state.card, product];
      await persistCard(newCart, state.user);
      dispatch({ type: "card/add", payload: product });
    } catch (error) {
      console.error("Error adding to cart", error);
    } finally {
      dispatch({ type: "loading/set", payload: false });
    }
  };

  const addToFavorites = async (product: Favorites) => {
    try {
    
      const newFavorites = [...state.favorites, product];
      await persistFavorites(newFavorites, state.user);
      dispatch({ type: "favorites/add", payload: product });
    } catch (error) {
      console.error("Error adding to cart", error);
    } 
  };

  const updateQuantity = async (cardSave: CardSave) => {
    try {
      dispatch({ type: "loading-quantity/set", payload: true });
      const newCart = state.card.map((c) =>
        c.id === cardSave.id ? { ...c, quantity: cardSave.quantity } : c
      );
      await persistCard(newCart, state.user);
      dispatch({ type: "card/update-quantity", payload: cardSave });
    } catch (error) {
      console.error("Error updating quantity", error);
    } finally {
      dispatch({ type: "loading-quantity/set", payload: false });
    }
  };

  const removeFromCart = async (id: string) => {
    try {
      dispatch({ type: "loading/set", payload: true });
      const newCart = state.card.filter((c) => c.id !== id);
      await persistCard(newCart, state.user);
      dispatch({ type: "card/remove", payload: { id } });
    } catch (error) {
      console.error("Error removing from cart", error);
    } finally {
      dispatch({ type: "loading/set", payload: false });
    }
  };

  const removeFromFavorites = async (id: string) => {
    try {
    
      const newFavorites = state.favorites.filter((c) => c.id !== id);
      await persistFavorites(newFavorites, state.user);
      dispatch({ type: "favorites/remove", payload: { id } });
    } catch (error) {
      console.error("Error removing from cart", error);
    } 
  };

  const clearCart = async () => {
    try {
      dispatch({ type: "loading/set", payload: true });
      await persistCard([], state.user);
      dispatch({ type: "card/clear" });
    } catch (error) {
      console.error("Error clearing cart", error);
    } finally {
      dispatch({ type: "loading/set", payload: false });
    }
  };

  const clearFavorites = async () => {
    try {
      dispatch({ type: "loading/set", payload: true });
      await persistCard([], state.user);
      dispatch({ type: "favorites/clear" });
    } catch (error) {
      console.error("Error clearing cart", error);
    } finally {
      dispatch({ type: "loading/set", payload: false });
    }
  };

  useEffect(() => {
    (async () => {
      try {
        dispatch({ type: "loading/set", payload: true });
        const data = await auth.getUser();
        const isAuth = data?.aud === "authenticated";

        dispatch({
          type: "user/add",
          payload: {
            aud: isAuth,
            fullName: data?.user_metadata.full_name,
          },
        });

        const rawCard = isAuth
          ? JSON.parse(data?.user_metadata.card || "[]")
          : JSON.parse(localStorage.getItem("card") || "[]");

        const rawFavorites = isAuth
          ? JSON.parse(data?.user_metadata.favorites || "[]")
          : JSON.parse(localStorage.getItem("favorites") || "[]");

        const [productsCard, productsFavorites] = await Promise.all([
          getProducts(rawCard),
          getProducts(rawFavorites),
        ]);
        dispatch({ type: "card/set", payload: productsCard });
        dispatch({ type: "favorites/set", payload: productsFavorites });
      } catch (error) {
        console.error("Error loading initial data", error);
      } finally {
        dispatch({ type: "loading/set", payload: false });
      }
    })();
  }, []);

  return (
    <AppContext.Provider
      value={{
        ...state,
        dispatch,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        addToFavorites,
        removeFromFavorites,
        clearFavorites,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

// CUSTOM HOOK
export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within Provider");
  }
  return context;
}
