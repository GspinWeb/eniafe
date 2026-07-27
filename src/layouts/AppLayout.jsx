import { NavLink } from "react-router-dom";

import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";

import "./AppLayout.css";


export default function AppLayout({ children }) {


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


        </aside>


      </div>


      <nav className="mobile-nav">


        <NavLink to="/dashboard">
          Home
        </NavLink>


        <NavLink to="/markets">
          Markets
        </NavLink>


        <NavLink to="/signals">
          Signals
        </NavLink>


        <NavLink to="/orders">
          Orders
        </NavLink>


        <NavLink to="/settings">
          More
        </NavLink>


      </nav>


    </div>

  );

}