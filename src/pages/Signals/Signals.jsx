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
  },
  {
    id: 4,
    symbol: "GBP/USD",
    side: "BUY",
    timeframe: "H1",
    entry: "1.36510",
    sl: "1.36240",
    tp: "1.37180",
    confidence: "89%",
    status: "LIVE"
  }
];

export default function Signals() {

  return (

    <div className="signalsPage">

      <div className="signalsHeader">

        <div>

          <h1>Mission Win Signals</h1>

          <span>
            ENIAFE Professional Signal Center
          </span>

        </div>

      </div>


      <div className="signalsGrid">

        {signals.map((signal) => (

          <div
            className="signalCard"
            key={signal.id}
          >

            <div className="signalTop">

              <div>

                <h2>{signal.symbol}</h2>

                <small>{signal.timeframe}</small>

              </div>

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

            </div>


            <div className="signalFooter">

              <span className="signalStatus">

                {signal.status}

              </span>

              <button>

                View Signal

              </button>

            </div>

          </div>

        ))}

      </div>

    </div>

  );

}