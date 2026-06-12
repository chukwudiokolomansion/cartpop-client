import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";

import PurchaseForm from "../components/PurchaseForm";
import PurchaseList from "../components/PurchaseList";

import type {
  Purchase,
  ShoppingList,
} from "../types/models";

import {
  getLists,
  getPurchasesByList,
  createPurchase,
  deletePurchase,
} from "../services/storageService";

export default function ShoppingListPage() {
  const { id } = useParams<{ id: string }>();

  const [shoppingList, setShoppingList] =
    useState<ShoppingList | null>(null);

  const [purchases, setPurchases] =
    useState<Purchase[]>([]);

  useEffect(() => {
    const loadData = async () => {
      if (!id) return;

      try {
        const lists = await getLists();

        const selectedList = lists.find(
          (list) => list.id === id
        );

        setShoppingList(
          selectedList ?? null
        );

        const listPurchases =
          await getPurchasesByList(id);

        setPurchases(listPurchases);
      } catch (error) {
        console.error(error);
      }
    };

    loadData();
  }, [id]);

  const handleCreatePurchase = async (
    itemName: string,
    quantity: number,
    unitPrice: number
  ) => {
    if (!id) return;

    try {
      const purchase =
        await createPurchase({
          shoppingListId: id,
          itemName,
          quantity,
          unitPrice,
        });

      setPurchases((prev) => [
        ...prev,
        purchase,
      ]);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeletePurchase = async (
    purchaseId: string
  ) => {
    try {
      await deletePurchase(purchaseId);

      setPurchases((prev) =>
        prev.filter(
          (purchase) =>
            purchase.id !== purchaseId
        )
      );
    } catch (error) {
      console.error(error);
    }
  };

  const totalSpent = useMemo(
    () =>
      purchases.reduce(
        (sum, purchase) =>
          sum + purchase.totalPrice,
        0
      ),
    [purchases]
  );

  const totalItems = useMemo(
    () =>
      purchases.reduce(
        (sum, purchase) =>
          sum + purchase.quantity,
        0
      ),
    [purchases]
  );

  if (!shoppingList) {
    return (
      <div>
        <h2>Shopping List Not Found</h2>
      </div>
    );
  }

  return (
    <div className="page-container">
      <div className="card">
        <h1>{shoppingList.name}</h1>

        <p>
          Created{" "}
          {new Date(
            shoppingList.createdAt
          ).toLocaleDateString()}
        </p>
      </div>

      <div className="summary-grid">
        <div className="summary-card">
          <h2>{purchases.length}</h2>
          <p>Purchases</p>
        </div>

        <div className="summary-card">
          <h2>{totalItems}</h2>
          <p>Items Bought</p>
        </div>

        <div className="summary-card">
          <h2>
            ${totalSpent.toFixed(2)}
          </h2>
          <p>Total Spent</p>
        </div>
      </div>

      <div className="glass-form">
        <h2>Add Purchase</h2>

        <PurchaseForm
          shoppingListId={shoppingList.id}
          onCreatePurchase={
            handleCreatePurchase
          }
        />
      </div>

      <div className="section-title">
        <h2>Purchase History</h2>
      </div>

      {purchases.length === 0 ? (
        <div className="empty-state">
          No purchases recorded yet.
        </div>
      ) : (
        <PurchaseList
          purchases={purchases}
          onDelete={handleDeletePurchase}
        />
      )}
    </div>
  );
}