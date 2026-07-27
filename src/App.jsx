import { Routes, Route, Navigate } from "react-router-dom";

import AppLayout from "./layouts/AppLayout";

import Dashboard from "./pages/Dashboard/Dashboard";
import Signals from "./pages/Signals/Signals";
import Scanner from "./pages/Scanner/Scanner";
import Opportunities from "./pages/Opportunities/Opportunities";
import Markets from "./pages/Markets/Markets";
import Charts from "./pages/Charts/Charts";
import Watchlist from "./pages/Watchlist/Watchlist";
import Orders from "./pages/Orders/Orders";
import Portfolio from "./pages/Portfolio/Portfolio";
import Journal from "./pages/Journal/Journal";
import Analytics from "./pages/Analytics/Analytics";
import Reports from "./pages/Reports/Reports";
import Settings from "./pages/Settings/Settings";

import "./index.css";
import "./layouts/AppLayout.css";

export default function App() {

  return (

    <AppLayout>

      <Routes>

        <Route
          path="/"
          element={<Navigate to="/dashboard" replace />}
        />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signals" element={<Signals />} />
        <Route path="/scanner" element={<Scanner />} />
        <Route path="/opportunities" element={<Opportunities />} />
        <Route path="/markets" element={<Markets />} />
        <Route path="/charts" element={<Charts />} />
        <Route path="/watchlist" element={<Watchlist />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/settings" element={<Settings />} />

        <Route
          path="*"
          element={<Navigate to="/dashboard" replace />}
        />

      </Routes>

    </AppLayout>

  );

}