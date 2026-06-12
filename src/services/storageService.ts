import type {
  Purchase,
  ShoppingList,
} from "../types/models";

import axios from "axios";

const api = axios.create({ baseURL: import.meta.env.VITE_API_URL,
});

// Shopping Lists
export const getLists = async (): Promise<ShoppingList[]> => {
 const { data } = await api.get("/shopping-lists");
 return data;
};

export const createList = async (
  list: Omit<ShoppingList, "id">
): Promise<ShoppingList> => {
  const { data } = await api.post(
    "/shopping-lists",
    list
  );

  return data;
};

export const deleteList = async (
  id: string
): Promise<void> => {
  await api.delete(
    `/shopping-lists/${id}`
  );
};

// Purchases
export const getPurchases = async (): Promise<
  Purchase[]
> => {
  const { data } = await api.get(
    "/purchases"
  );

  return data;
};

export const getPurchasesByList = async (
  shoppingListId: string
): Promise<Purchase[]> => {
  const { data } = await api.get(
    `/purchases/list/${shoppingListId}`
  );

  return data;
};

export const createPurchase = async (
  purchase: Omit<Purchase, "id">
): Promise<Purchase> => {
  const { data } = await api.post(
    "/purchases",
    purchase
  );

  return data;
};

export const deletePurchase = async (
  id: string
): Promise<void> => {
  await api.delete(
    `/purchases/${id}`
  );
};