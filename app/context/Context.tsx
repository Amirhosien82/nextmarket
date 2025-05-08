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

type initialStateTypes = {
  user: User;
  card: Card[];
  loading: boolean;
};

type AddUser = {
  type: "user/add";
  payload: User;
};

type AddCard = {
  type: "card/add";
  payload: Card;
};

type QuanlityCard = {
  type: "card/quantity";
  payload: CardSave;
};
type RemoveCard = {
  type: "card/remove";
  payload: { id: string };
};

type ClearCard = {
  type: "card/clear";
};

type AddCards = {
  type: "card/adds";
  payload: Card[];
};

type ReducerAction =
  | AddUser
  | AddCard
  | QuanlityCard
  | RemoveCard
  | ClearCard
  | AddCards;

const initialState: initialStateTypes = {
  user: { aud: false, fullName: null },
  card: [],
  loading: false,
};

type Dispatch = { dispatch: (data: ReducerAction) => void };

type ContextType = (initialStateTypes & Dispatch) | null;
const ContextProvider = createContext<ContextType>(null);

function Provider({ children }: { children: ReactNode }) {
  const [{ card, user, loading }, dispatch] = useReducer(reducer, initialState);

  function addCardtoLocaleStorageOrSupabse(cards: Card[], user: User) {
    const newCard = cards.map((item) => {
      return { id: item.id, quantity: item.quantity };
    });
    const JSONCard = JSON.stringify(newCard);

    if (user.aud) {
      auth.updateUser(JSONCard);
    } else {
      localStorage.setItem("card", JSONCard);
    }
  }

  function reducer(state: initialStateTypes, action: ReducerAction) {
    switch (action.type) {
      case "user/add":
        return { ...state, user: action.payload };
      case "card/add": {
        const newCard = [...state.card, action.payload];
        state.loading = true;
        addCardtoLocaleStorageOrSupabse(newCard, state.user);
        state.loading = false;
        return { ...state, card: newCard };
      }
      case "card/quantity": {
        const newCard = state.card.map((c) =>
          c.id === action.payload.id
            ? { ...c, quantity: action.payload.quantity }
            : c
        );
        state.loading = true;
        addCardtoLocaleStorageOrSupabse(newCard, state.user);
        state.loading = false;
        return {
          ...state,
          card: newCard,
        };
      }
      case "card/remove": {
        const newCard = state.card.filter((c) => c.id !== action.payload.id);
        state.loading = true;
        addCardtoLocaleStorageOrSupabse(newCard, state.user);
        state.loading = false;

        return {
          ...state,
          card: newCard,
        };
      }
      case "card/clear":
        state.loading = true;
        addCardtoLocaleStorageOrSupabse([], state.user);
        state.loading = false;

        return {
          ...state,
          card: [],
        };

      case "card/adds":
        return { ...state, card: action.payload };
    }
  }

  async function getProducts(idCards: CardSave[]) {
    const products = await Promise.all(
      idCards.map((item) => {
        return (async () => {
          const product = await servicesProduct.getProductById(item.id);
          return {
            id: product?.product.id,
            price: product?.product.price,
            discount: product?.product.discount,
            count: product?.product.count,
            quantity: item.quantity,
            name: product?.product.name,
            image: product?.product.images.split("***")[0] || "",
          };
        })();
      })
    );
    return products;
  }

  //زمانی که برنامه برا اولین بار لود شد چک کنه که لاگین هست یا نه
  useEffect(() => {
    (async () => {
      const data = await auth.getUser();
      const isAud = data?.aud === "authenticated";
      dispatch({
        type: "user/add",
        payload: {
          aud: isAud,
          fullName: data?.user_metadata.fullName,
        },
      });
      if (isAud) {
        const idCards: { id: string; quantity: number }[] = JSON.parse(
          data.user_metadata.card
        );
        const products = await getProducts(idCards);
        dispatch({ type: "card/adds", payload: products });
      } else {
        const idCards = JSON.parse(localStorage.getItem("card") || "[]");
        const products = await getProducts(idCards);
        dispatch({ type: "card/adds", payload: products });
      }
    })();
  }, []);

  return (
    <ContextProvider.Provider value={{ user, card, dispatch, loading }}>
      {children}
    </ContextProvider.Provider>
  );
}

export function useAppContext() {
  const context = useContext(ContextProvider);
  if (!context) {
    throw new Error("useAppContext must be used within AppProvider");
  }
  return context;
}

export default Provider;
