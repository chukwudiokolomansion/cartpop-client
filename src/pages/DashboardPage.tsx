import { useEffect, useState } from "react";

import ShoppingListForm from "../components/ShoppingListForm";
import ShoppingLists from "../components/ShoppingLists";

import type { ShoppingList } from "../types/models";

import {
  getLists,
  createList,
  deleteList,
} from "../services/storageService";

export default function DashboardPage() {
  const [lists, setLists] = useState<ShoppingList[]>([]);

  useEffect(() => {
    const fetchLists = async () => {
      try {
        const data = await getLists();
        setLists(data);
      } catch (error) {
        console.error("Failed to load shopping lists:", error);
      }
    };

    fetchLists();
  }, []);

  const handleCreateList = async (name: string) => {
    try {
      const newList = await createList({ name });
      setLists((prev) => [...prev, newList]);
    } catch (error) {
      console.error("Failed to create shopping list:", error);
    }
  };

  const handleDeleteList = async (id: string) => {
    try {
      await deleteList(id);
      setLists((prev) => prev.filter((list) => list.id !== id));
    } catch (error) {
      console.error("Failed to delete shopping list:", error);
    }
  };

  return (
    <>
      <div className="hero-banner">
        <div>
          <h1>Cartpop</h1>
          <p>Track Purchases • Manage Lists • Store Receipts</p>
        </div>
      </div>

      <div className="page-container">
        <div className="card">
          <h1>Shopping Lists</h1>
          <ShoppingListForm onCreate={handleCreateList} />
        </div>

        <div className="section-title">
          <h2>Your Lists</h2>
        </div>

        <ShoppingLists lists={lists} onDelete={handleDeleteList} />
      </div>
    </>
  );
}