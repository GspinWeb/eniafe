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

  <div className="panel-section">
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
      MARKET OVERVIEW
    </div>
  </div>

  <div className="panel-section">
    <div className="panel-title">
      SCANNER
    </div>
  </div>

  <div className="panel-section">
    <div className="panel-title">
      OPPORTUNITIES
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
      ECONOMIC CALENDAR
    </div>
  </div>

  <div className="panel-section">
    <div className="panel-title">
      NEWS FEED
    </div>
  </div>

  <div className="panel-section">
    <div className="panel-title">
      SESSION STATUS
    </div>
  </div>

  <div className="panel-section">
    <div className="panel-title">
      HISTORY
    </div>
  </div>

  <div className="panel-section">
    <div className="panel-title">
      JOURNAL
    </div>
  </div>

  <div className="panel-section">
    <div className="panel-title">
      LOG
    </div>
  </div>

</aside>

      </div>

    </div>

  );

}