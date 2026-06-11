import { Purchase } from "../types/models";

interface Props {
  purchases: Purchase[];
}

export default function ReceiptSummary({ purchases }: Props) {
  const totalSpent = purchases.reduce(
    (sum, p) => sum + p.totalPrice,
    0
  );

  return (
    <div>
      <h2>Year Summary</h2>

      <h3>
        Total Spent: $
        {totalSpent.toFixed(2)}
      </h3>

      <h3>
        Purchases Recorded:
        {purchases.length}
      </h3>
    </div>
  );
}