import type { Purchase, ShoppingList } from "../types/models";

const LIST_KEY = "shopping_lists";
const PURCHASE_KEY = "purchases";

export const getLists = (): ShoppingList[] => {
  return JSON.parse(localStorage.getItem(LIST_KEY) || "[]");
};

export const saveLists = (lists: ShoppingList[]) => {
  localStorage.setItem(LIST_KEY, JSON.stringify(lists));
};

export const getPurchases = (): Purchase[] => {
  return JSON.parse(localStorage.getItem(PURCHASE_KEY) || "[]");
};

export const savePurchases = (purchases: Purchase[]) => {
  localStorage.setItem(PURCHASE_KEY, JSON.stringify(purchases));
};