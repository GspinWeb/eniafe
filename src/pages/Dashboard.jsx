import SummaryCards from "../components/Dashboard/SummaryCards";
import SignalsWidget from "../components/Dashboard/SignalsWidget";
import ScannerWidget from "../components/Dashboard/ScannerWidget";
import OpportunitiesWidget from "../components/Dashboard/OpportunitiesWidget";
import MarketOverviewWidget from "../components/Dashboard/MarketOverviewWidget";
import WatchlistWidget from "../components/Dashboard/WatchlistWidget";
import EconomicCalendarWidget from "../components/Dashboard/EconomicCalendarWidget";
import NewsFeedWidget from "../components/Dashboard/NewsFeedWidget";

export default function Dashboard() {
  return (
    <>

      <section className="dashboardHero">

        <div>

          <h1>
            ENIAFE
          </h1>

          <p>
            Professional Trading Workspace
          </p>

        </div>

        <div className="marketSession">

          <span className="sessionDot"></span>

          London Session

        </div>

      </section>

      <SummaryCards />

      <section className="dashboardGrid">

        <div className="dashboardColumn">

        <SignalsWidget />

          <ScannerWidget />

          <OpportunitiesWidget />

        </div>

        <div className="dashboardSide">

          <MarketOverviewWidget />

         <WatchlistWidget />

          <EconomicCalendarWidget />

          <NewsFeedWidget />

        </div>

      </section>

    </>
  );
}