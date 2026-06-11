import { useEffect, useState } from "react";
import ShoppingListForm from "../components/ShoppingListForm";
import ShoppingLists from "../components/ShoppingLists";

import type { ShoppingList } from "../types/models";
import { getLists, saveLists } from "../services/storage";

export default function DashboardPage() {
  const [lists, setLists] = useState<ShoppingList[]>([]);

  useEffect(() => {
    setLists(getLists());
  }, []);

  const createList = (name: string) => {
    const newList: ShoppingList = {
      id: crypto.randomUUID(),
      name,
      createdAt: new Date().toISOString(),
    };

    const updated = [...lists, newList];

    setLists(updated);
    saveLists(updated);
  };

  const handleDelete = (id: string) => {
    const updatedLists = lists.filter(
      (list) => list.id !== id
    );

    setLists(updatedLists);
    saveLists(updatedLists);
  };

  return (
    <div>
      <h1>Shopping Lists</h1>

      <ShoppingListForm onCreate={createList} />

      <ShoppingLists
        lists={lists}
        onDelete={handleDelete}
      />
    </div>
  );
}