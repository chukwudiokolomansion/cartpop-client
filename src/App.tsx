import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import DashboardPage from "./pages/DashboardPage";
import ShoppingListPage from "./pages/ShoppingListPage";
import ReportsPage from "./pages/ReportsPage";
import NotFoundPage from "./pages/NotFoundPage";
export default function App() {
  return (
    <BrowserRouter>
      <div style={{ padding: "20px" }}>
        <header>
          <h1>Shopping Receipt Tracker</h1>

          <nav
            style={{
              display: "flex",
              gap: "20px",
              marginBottom: "20px",
            }}
          >
            <Link to="/">Dashboard</Link>
            <Link to="/reports">Reports</Link>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="*" element={<NotFoundPage />} />

          <Route path="/list/:id" element={<ShoppingListPage />} />

          <Route path="/reports" element={<ReportsPage purchases={[]} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
