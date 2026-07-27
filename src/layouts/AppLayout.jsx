import { NavLink, useLocation } from "react-router-dom";

import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";

import "./AppLayout.css";

export default function AppLayout({ children }) {

  const location = useLocation();

  const showRightPanel = location.pathname === "/dashboard";

  return (

    <div className="app-shell">

      <Header />

      <div className="app-body">

        <Sidebar />

        <main className="workspace">

          <div className="workspace-inner">

            {children}

          </div>

        </main>

        {showRightPanel && (

          <aside className="right-panel">

            <div className="panel-section signal-panel">

              <div className="panel-title">
                SIGNALS
              </div>

            </div>

            <div className="panel-section">

              <div className="panel-title">
                WATCHLIST
              </div>

            </div>

            <div className="panel-section">

              <div className="panel-title">
                MARKET DEPTH
              </div>

            </div>

            <div className="panel-section">

              <div className="panel-title">
                POSITIONS
              </div>

            </div>

            <div className="panel-section">

              <div className="panel-title">
                ORDERS
              </div>

            </div>

            <div className="panel-section">

              <div className="panel-title">
                HISTORY
              </div>

            </div>

          </aside>

        )}

      </div>

      <nav className="mobile-nav">

        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive ? "mobile-link active" : "mobile-link"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/markets"
          className={({ isActive }) =>
            isActive ? "mobile-link active" : "mobile-link"
          }
        >
          Markets
        </NavLink>

        <NavLink
          to="/signals"
          className={({ isActive }) =>
            isActive ? "mobile-link active" : "mobile-link"
          }
        >
          Signals
        </NavLink>

        <NavLink
          to="/orders"
          className={({ isActive }) =>
            isActive ? "mobile-link active" : "mobile-link"
          }
        >
          Orders
        </NavLink>

        <NavLink
          to="/settings"
          className={({ isActive }) =>
            isActive ? "mobile-link active" : "mobile-link"
          }
        >
          More
        </NavLink>

      </nav>

    </div>

  );

}