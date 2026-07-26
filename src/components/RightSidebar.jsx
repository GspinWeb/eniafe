export default function RightSidebar() {
  return (
    <aside className="rightbar">

      <div className="widget">

        <h3>Market Overview</h3>

        <div className="marketRow">
          <span>Forex</span>
          <span className="green">Bullish</span>
        </div>

        <div className="marketRow">
          <span>Indices</span>
          <span className="green">Strong</span>
        </div>

        <div className="marketRow">
          <span>Commodities</span>
          <span className="red">Weak</span>
        </div>

        <div className="marketRow">
          <span>Crypto</span>
          <span className="green">Rising</span>
        </div>

      </div>

      <div className="widget">

        <h3>Top Movers</h3>

        <div className="marketRow">
          <span>BTCUSD</span>
          <span className="green">+3.24%</span>
        </div>

        <div className="marketRow">
          <span>XAUUSD</span>
          <span className="green">+1.72%</span>
        </div>

        <div className="marketRow">
          <span>USDJPY</span>
          <span className="red">-0.82%</span>
        </div>

        <div className="marketRow">
          <span>EURGBP</span>
          <span className="green">+0.55%</span>
        </div>

      </div>

      <div className="widget">

        <h3>Watchlist</h3>

        <div className="marketRow">
          <span>EUR/USD</span>
          <span>1.08420</span>
        </div>

        <div className="marketRow">
          <span>GBP/USD</span>
          <span>1.26310</span>
        </div>

        <div className="marketRow">
          <span>XAU/USD</span>
          <span>2328.10</span>
        </div>

        <div className="marketRow">
          <span>NAS100</span>
          <span>18720</span>
        </div>

      </div>

      <div className="widget">

        <h3>Economic Calendar</h3>

        <p>09:30 GBP CPI</p>
        <p>13:30 USD Claims</p>
        <p>15:00 FOMC Speech</p>
        <p>17:00 CAD GDP</p>

      </div>

      <div className="widget">

        <h3>Latest News</h3>

        <p>Dollar gains against major currencies.</p>

        <p>Gold continues upward momentum.</p>

        <p>European markets open positive.</p>

      </div>

    </aside>
  );
}