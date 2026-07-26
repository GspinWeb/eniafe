import "./Signals.css";

const signals = [
  {
    id: 1,
    symbol: "XAU/USD",
    side: "BUY",
    timeframe: "M1",
    entry: "3348.25",
    sl: "3345.80",
    tp: "3354.60",
    confidence: "92%",
    status: "LIVE"
  },
  {
    id: 2,
    symbol: "EUR/USD",
    side: "SELL",
    timeframe: "M5",
    entry: "1.18245",
    sl: "1.18410",
    tp: "1.17890",
    confidence: "87%",
    status: "LIVE"
  },
  {
    id: 3,
    symbol: "BTC/USD",
    side: "BUY",
    timeframe: "M15",
    entry: "117450",
    sl: "116980",
    tp: "118620",
    confidence: "84%",
    status: "WAITING"
  }
];

export default function Signals() {
  return (
    <div className="signalsPage">

      <div className="signalsHeader">

        <h1>Trading Signals</h1>

        <span>
          ENIAFE Mission Win Signal Center
        </span>

      </div>

      <div className="signalsGrid">

        {signals.map((signal) => (

          <div className="signalCard" key={signal.id}>

            <div className="signalTop">

              <h2>{signal.symbol}</h2>

              <span
                className={
                  signal.side === "BUY"
                    ? "buyBadge"
                    : "sellBadge"
                }
              >
                {signal.side}
              </span>

            </div>

            <div className="signalBody">

              <div>
                <small>Timeframe</small>
                <strong>{signal.timeframe}</strong>
              </div>

              <div>
                <small>Entry</small>
                <strong>{signal.entry}</strong>
              </div>

              <div>
                <small>Stop Loss</small>
                <strong>{signal.sl}</strong>
              </div>

              <div>
                <small>Take Profit</small>
                <strong>{signal.tp}</strong>
              </div>

              <div>
                <small>Confidence</small>
                <strong>{signal.confidence}</strong>
              </div>

              <div>
                <small>Status</small>
                <strong>{signal.status}</strong>
              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}