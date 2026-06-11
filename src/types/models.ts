export interface ShoppingList {
  id: string;
  name: string;
  createdAt: string;
}

export interface Purchase {
  id: string;
  shoppingListId: string;
  itemName: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  purchaseDate: string;
}