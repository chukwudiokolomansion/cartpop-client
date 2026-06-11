import { useMemo } from "react";
import type { Purchase } from "../types/models";
import ReceiptSummary from "../components/ReceiptSummary";

interface Props {
  purchases: Purchase[];
}

export default function ReportsPage({
  purchases,
}: Props) {
  const yearlyTotal = useMemo(() => {
    return purchases.reduce(
      (sum, p) => sum + p.totalPrice,
      0
    );
  }, [purchases]);

  return (
    <div>
      <h1>Annual Receipt Report</h1>

      <ReceiptSummary purchases={purchases} />

      <h2>
        Year Total: $
        {yearlyTotal.toFixed(2)}
      </h2>
    </div>
  );
}