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
  <>
    {lists.map((list) => (
      <div
        key={list.id}
        className="list-card"
      >
        <h3>{list.name}</h3>

        <p>
          Created:
          {" "}
          {new Date(
            list.createdAt
          ).toLocaleDateString()}
        </p>

        <div className="list-actions">
          <Link
            className="btn-primary"
            to={`/list/${list.id}`}
          >
            Open List
          </Link>

          <button
            className="btn-danger"
            onClick={() =>
              onDelete(list.id)
            }
          >
            Delete
          </button>
        </div>
      </div>
    ))}
  </>
);
}
export default ShoppingLists