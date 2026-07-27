import "./Dashboard.css";
import { useState } from "react";

import ChartShell from "../../components/ChartShell/ChartShell";
import MarketShell from "../../engines/MarketShell/MarketShell";

export default function Dashboard() {

  const [symbol, setSymbol] = useState("XAU/USD");
  const [timeframe, setTimeframe] = useState("M1");

  const frames = ["M1","M5","M15","H1","H4","D1"];

  const changeSymbol = (value) => {

    setSymbol(value);

    MarketShell.setSymbol(value);

  };

  const changeTimeframe = (value) => {

    setTimeframe(value);

    MarketShell.setTimeframe(value);

  };

  return (

    <div className="dashboard">

      <div className="dashboardHeader">

        <div className="workspaceInfo">

          <h1>Mission Win Terminal</h1>

          <span>
            ENIAFE Professional Trading Workspace
          </span>

        </div>


        <div className="symbolBar">

          <select
            value={symbol}
            onChange={(e)=>changeSymbol(e.target.value)}
          >

            <option>XAU/USD</option>
            <option>EUR/USD</option>
            <option>GBP/USD</option>
            <option>USD/JPY</option>
            <option>NAS100</option>
            <option>BTC/USD</option>

          </select>


          <div className="timeframeBar">

            {frames.map(frame=>(

              <button

                key={frame}

                className={
                  timeframe===frame
                  ? "tf active"
                  : "tf"
                }

                onClick={()=>changeTimeframe(frame)}

              >

                {frame}

              </button>

            ))}

          </div>

        </div>


        <div className="terminalStatus">

          <div className="statusBox">

            <small>Symbol</small>

            <strong>{symbol}</strong>

          </div>


          <div className="statusBox">

            <small>Spread</small>

            <strong>0.20</strong>

          </div>


          <div className="statusBox">

            <small>Session</small>

            <strong>London</strong>

          </div>


          <div className="statusBox">

            <small>Latency</small>

            <strong>11 ms</strong>

          </div>

        </div>

      </div>


      <div className="dashboardGrid">

        <section className="chartArea">

          <ChartShell />

        </section>

      </div>

    </div>

  );

}