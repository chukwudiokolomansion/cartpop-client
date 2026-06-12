import type { Purchase } from "../types/models";

interface Props {
  purchases: Purchase[];
  onDelete: (id: string) => void;
}
export default function ReceiptSummary({ purchases }: Props) {
  const totalSpent = purchases.reduce(
    (sum, p) => sum + p.totalPrice,
    0
  );

 return (
  <div className="summary-grid">
    <div className="summary-card">
      <h2>
        $
        {totalSpent.toFixed(2)}
      </h2>
      <p>Total Spent</p>
    </div>

    <div className="summary-card">
      <h2>{purchases.length}</h2>
      <p>Receipts Recorded</p>
    </div>
  </div>
);
}