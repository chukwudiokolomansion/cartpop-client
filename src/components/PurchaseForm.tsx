import { useState } from "react";

interface Props {
  shoppingListId: string;
  onCreatePurchase: (
    itemName: string,
    quantity: number,
    unitPrice: number
  ) => void;
}

export default function PurchaseForm({
  onCreatePurchase,
}: Props) {
  const [itemName, setItemName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [unitPrice, setUnitPrice] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    onCreatePurchase(itemName, quantity, unitPrice);

    setItemName("");
    setQuantity(1);
    setUnitPrice(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={itemName}
        placeholder="Item Name"
        onChange={(e) => setItemName(e.target.value)}
      />

      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      />

      <input
        type="number"
        value={unitPrice}
        onChange={(e) => setUnitPrice(Number(e.target.value))}
      />

      <button type="submit">
        Add Purchase
      </button>
    </form>
  );
}