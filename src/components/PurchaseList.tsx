import type { Purchase } from "../types/models";

interface Props {
  purchases: Purchase[];
  onDelete: (id: string) => void;
}

export default function PurchaseList({ purchases }: Props) {
  return (
  <table className="purchase-table">
    <thead>
      <tr>
        <th>Date</th>
        <th>Item</th>
        <th>Qty</th>
        <th>Unit Price</th>
        <th>Total</th>
      </tr>
    </thead>

    <tbody>
      {purchases.map((purchase) => (
        <tr key={purchase.id}>
          <td>
            {new Date(
              purchase.purchaseDate
            ).toLocaleDateString()}
          </td>

          <td>{purchase.itemName}</td>

          <td>{purchase.quantity}</td>

          <td>
            $
            {purchase.unitPrice.toFixed(
              2
            )}
          </td>

          <td>
            $
            {purchase.totalPrice.toFixed(
              2
            )}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);
}