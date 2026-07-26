import { NavLink } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <aside className="sidebar">

      <NavLink
        to="/dashboard"
        className={({ isActive }) => isActive ? "navItem active" : "navItem"}
      >
        <span className="navIcon">🏠</span>
        <span className="navText">Dashboard</span>
      </NavLink>

      <NavLink
        to="/signals"
        className={({ isActive }) => isActive ? "navItem active" : "navItem"}
      >
        <span className="navIcon">📡</span>
        <span className="navText">Signals</span>
      </NavLink>

      <NavLink
        to="/scanner"
        className={({ isActive }) => isActive ? "navItem active" : "navItem"}
      >
        <span className="navIcon">🔍</span>
        <span className="navText">Scanner</span>
      </NavLink>

      <NavLink
        to="/opportunities"
        className={({ isActive }) => isActive ? "navItem active" : "navItem"}
      >
        <span className="navIcon">🎯</span>
        <span className="navText">Opportunities</span>
      </NavLink>

      <NavLink
        to="/markets"
        className={({ isActive }) => isActive ? "navItem active" : "navItem"}
      >
        <span className="navIcon">🌍</span>
        <span className="navText">Markets</span>
      </NavLink>

      <NavLink
        to="/charts"
        className={({ isActive }) => isActive ? "navItem active" : "navItem"}
      >
        <span className="navIcon">📈</span>
        <span className="navText">Charts</span>
      </NavLink>

      <NavLink
        to="/watchlist"
        className={({ isActive }) => isActive ? "navItem active" : "navItem"}
      >
        <span className="navIcon">⭐</span>
        <span className="navText">Watchlist</span>
      </NavLink>

      <NavLink
        to="/orders"
        className={({ isActive }) => isActive ? "navItem active" : "navItem"}
      >
        <span className="navIcon">📋</span>
        <span className="navText">Orders</span>
      </NavLink>

      <NavLink
        to="/portfolio"
        className={({ isActive }) => isActive ? "navItem active" : "navItem"}
      >
        <span className="navIcon">💼</span>
        <span className="navText">Portfolio</span>
      </NavLink>

      <NavLink
        to="/journal"
        className={({ isActive }) => isActive ? "navItem active" : "navItem"}
      >
        <span className="navIcon">📒</span>
        <span className="navText">Journal</span>
      </NavLink>

      <NavLink
        to="/analytics"
        className={({ isActive }) => isActive ? "navItem active" : "navItem"}
      >
        <span className="navIcon">📊</span>
        <span className="navText">Analytics</span>
      </NavLink>

      <NavLink
        to="/reports"
        className={({ isActive }) => isActive ? "navItem active" : "navItem"}
      >
        <span className="navIcon">📑</span>
        <span className="navText">Reports</span>
      </NavLink>

      <NavLink
        to="/settings"
        className={({ isActive }) => isActive ? "navItem active" : "navItem"}
      >
        <span className="navIcon">⚙️</span>
        <span className="navText">Settings</span>
      </NavLink>

    </aside>
  );
}