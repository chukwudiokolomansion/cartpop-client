import { useMemo } from "react";

import ReceiptSummary from "../components/ReceiptSummary";

import type { Purchase } from "../types/models";

interface Props {
  purchases: Purchase[];
}

export default function ReportsPage({
  purchases,
}: Props) {
  const yearlyTotal = useMemo(
    () =>
      purchases.reduce(
        (sum, purchase) =>
          sum + purchase.totalPrice,
        0
      ),
    [purchases]
  );

  return (
    <div className="page-container">
      <div className="card">
        <h1>Annual Receipt Report</h1>

        <ReceiptSummary
          purchases={purchases}
        />

        <div
          style={{
            marginTop: "20px",
          }}
        >
          <h2>
            Year Total: $
            {yearlyTotal.toFixed(2)}
          </h2>
        </div>
      </div>
    </div>
  );
}