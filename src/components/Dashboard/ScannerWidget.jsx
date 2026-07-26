import "./ScannerWidget.css";

const scans = [
  {
    pair: "EUR/USD",
    timeframe: "H1",
    pattern: "Demand Zone",
    confidence: 94,
    status: "READY"
  },
  {
    pair: "GBP/USD",
    timeframe: "M30",
    pattern: "Supply Zone",
    confidence: 91,
    status: "READY"
  },
  {
    pair: "XAU/USD",
    timeframe: "M15",
    pattern: "Breakout",
    confidence: 88,
    status: "WATCH"
  },
  {
    pair: "NAS100",
    timeframe: "H4",
    pattern: "Trend Continuation",
    confidence: 97,
    status: "READY"
  },
  {
    pair: "USDJPY",
    timeframe: "M5",
    pattern: "Liquidity Sweep",
    confidence: 83,
    status: "WATCH"
  }
];

export default function ScannerWidget() {
  return (
    <section className="scannerWidget">

      <div className="scannerHeader">

        <div>

          <h2>Market Scanner</h2>

          <small>Detected Trading Setups</small>

        </div>

        <button className="scanButton">

          Scan Now

        </button>

      </div>

      <table className="scannerTable">

        <thead>

          <tr>

            <th>Pair</th>

            <th>TF</th>

            <th>Pattern</th>

            <th>Confidence</th>

            <th>Status</th>

          </tr>

        </thead>

        <tbody>

          {scans.map((row) => (

            <tr key={row.pair + row.timeframe}>

              <td>{row.pair}</td>

              <td>{row.timeframe}</td>

              <td>{row.pattern}</td>

              <td>{row.confidence}%</td>

              <td>

                <span
                  className={
                    row.status === "READY"
                      ? "statusReady"
                      : "statusWatch"
                  }
                >
                  {row.status}
                </span>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </section>
  );
}