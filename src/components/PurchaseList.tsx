import { Purchase } from "../types/models";

interface Props {
  purchases: Purchase[];
}

export default function PurchaseList({ purchases }: Props) {
  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Item</th>
          <th>Qty</th>
          <th>Price</th>
          <th>Total</th>
        </tr>
      </thead>

      <tbody>
        {purchases.map((purchase) => (
          <tr key={purchase.id}>
            <td>{purchase.purchaseDate}</td>
            <td>{purchase.itemName}</td>
            <td>{purchase.quantity}</td>
            <td>${purchase.unitPrice}</td>
            <td>${purchase.totalPrice}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}