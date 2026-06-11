import { Link } from "react-router-dom";
import type { ShoppingList } from "../types/models";

interface ShoppingListsProps {
  lists: ShoppingList[];
  onDelete: (id: string) => void;
}

function ShoppingLists({
  lists,
  onDelete,
}: ShoppingListsProps) {
  return (
    <div>
      {lists.map((list) => (
        <div
          key={list.id}
          style={{
            border: "1px solid #ccc",
            padding: "15px",
            marginBottom: "10px",
            borderRadius: "8px",
          }}
        >
          <h3>{list.name}</h3>

          <p>
            Created:{" "}
            {new Date(list.createdAt).toLocaleDateString()}
          </p>

          <div
            style={{
              display: "flex",
              gap: "10px",
            }}
          >
            <Link to={`/list/${list.id}`}>
              Open
            </Link>

            <button
              onClick={() => onDelete(list.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
export default ShoppingLists