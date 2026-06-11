import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";

import PurchaseForm from "../components/PurchaseForm";
import PurchaseList from "../components/PurchaseList";

import type { Purchase, ShoppingList } from "../types/models";

import {
  getLists,
  getPurchases,
  savePurchases,
} from "../services/storage";

export default function ShoppingListPage() {
  const { id } = useParams<{ id: string }>();

  const [shoppingList, setShoppingList] =
    useState<ShoppingList | null>(null);

  const [purchases, setPurchases] =
    useState<Purchase[]>([]);

  useEffect(() => {
    if (!id) return;

    const lists = getLists();

    const selectedList = lists.find(
      (list) => list.id === id
    );

    if (selectedList) {
      setShoppingList(selectedList);
    }

    const allPurchases = getPurchases();

    const listPurchases = allPurchases.filter(
      (purchase) =>
        purchase.shoppingListId === id
    );

    setPurchases(listPurchases);
  }, [id]);

  const handleCreatePurchase = (
    itemName: string,
    quantity: number,
    unitPrice: number
  ) => {
    if (!id) return;

    const newPurchase: Purchase = {
      id: crypto.randomUUID(),
      shoppingListId: id,
      itemName,
      quantity,
      unitPrice,
      totalPrice: quantity * unitPrice,
      purchaseDate: new Date().toISOString(),
    };

    const updatedPurchases = [
      ...purchases,
      newPurchase,
    ];

    setPurchases(updatedPurchases);

    const allPurchases = getPurchases();

    savePurchases([
      ...allPurchases,
      newPurchase,
    ]);
  };

  const totalSpent = useMemo(() => {
    return purchases.reduce(
      (sum, purchase) =>
        sum + purchase.totalPrice,
      0
    );
  }, [purchases]);

  const totalItems = useMemo(() => {
    return purchases.reduce(
      (sum, purchase) =>
        sum + purchase.quantity,
      0
    );
  }, [purchases]);

  if (!shoppingList) {
    return (
      <div>
        <h2>Shopping List Not Found</h2>
      </div>
    );
  }

  return (
    <div
      style={{
        maxWidth: "1000px",
        margin: "0 auto",
      }}
    >
      <h1>{shoppingList.name}</h1>

      <p>
        Created:
        {" "}
        {new Date(
          shoppingList.createdAt
        ).toLocaleDateString()}
      </p>

      <hr />

      <h2>Add Purchase</h2>

      <PurchaseForm
        shoppingListId={shoppingList.id}
        onCreatePurchase={
          handleCreatePurchase
        }
      />

      <hr />

      <h2>Purchase Summary</h2>

      <div
        style={{
          display: "flex",
          gap: "20px",
          marginBottom: "20px",
        }}
      >
        <div>
          <strong>Total Purchases:</strong>
          {" "}
          {purchases.length}
        </div>

        <div>
          <strong>Total Items:</strong>
          {" "}
          {totalItems}
        </div>

        <div>
          <strong>Total Spent:</strong>
          {" "}
          ${totalSpent.toFixed(2)}
        </div>
      </div>

      <h2>Purchases</h2>

      {purchases.length === 0 ? (
        <p>No purchases recorded yet.</p>
      ) : (
        <PurchaseList
          purchases={purchases}
        />
      )}
    </div>
  );
}