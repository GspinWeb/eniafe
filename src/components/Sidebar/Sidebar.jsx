import { NavLink } from "react-router-dom";

import "./Sidebar.css";

const menu = [

  { name: "Dashboard", path: "/dashboard" },
  { name: "Signals", path: "/signals" },
  { name: "Scanner", path: "/scanner" },
  { name: "Opportunities", path: "/opportunities" },
  { name: "Markets", path: "/markets" },
  { name: "Charts", path: "/charts" },
  { name: "Watchlist", path: "/watchlist" },
  { name: "Orders", path: "/orders" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Journal", path: "/journal" },
  { name: "Analytics", path: "/analytics" },
  { name: "Reports", path: "/reports" },
  { name: "Settings", path: "/settings" }

];

export default function Sidebar() {

  return (

    <aside className="sidebar">

      <div className="sidebar-logo">
        ENIAFE
      </div>

      <nav className="sidebar-menu">

        {menu.map((item) => (

          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              isActive
                ? "sidebar-link active"
                : "sidebar-link"
            }
          >
            {item.name}
          </NavLink>

        ))}

      </nav>

    </aside>

  );

}