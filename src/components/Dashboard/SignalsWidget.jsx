import "./SignalsWidget.css";

const signals = [
  {
    pair: "EUR/USD",
    type: "BUY",
    probability: 94,
    entry: "1.08420",
    sl: "1.08140",
    tp: "1.08980",
    age: "2 min"
  },
  {
    pair: "GBP/USD",
    type: "SELL",
    probability: 91,
    entry: "1.26310",
    sl: "1.26650",
    tp: "1.25820",
    age: "5 min"
  },
  {
    pair: "XAU/USD",
    type: "BUY",
    probability: 88,
    entry: "2328.10",
    sl: "2318.30",
    tp: "2344.00",
    age: "11 min"
  },
  {
    pair: "NAS100",
    type: "BUY",
    probability: 96,
    entry: "18720",
    sl: "18610",
    tp: "18960",
    age: "1 min"
  }
];

export default function SignalsWidget() {

    return (

        <section className="signalWidget">

            <div className="widgetHeader">

                <div>

                    <h2>Live Signals</h2>

                    <small>Current Market Opportunities</small>

                </div>

                <button className="refreshBtn">

                    Refresh

                </button>

            </div>

            <div className="signalList">

                {signals.map((signal) => (

                    <div
                        key={signal.pair}
                        className="signalCard"
                    >

                        <div className="signalTop">

                            <h3>{signal.pair}</h3>

                            <span
                                className={
                                    signal.type === "BUY"
                                        ? "buyBadge"
                                        : "sellBadge"
                                }
                            >

                                {signal.type}

                            </span>

                        </div>

                        <div className="probabilityRow">

                            <span>

                                Probability

                            </span>

                            <strong>

                                {signal.probability}%

                            </strong>

                        </div>

                        <div className="progress">

                            <div
                                className="progressFill"
                                style={{
                                    width:
                                        signal.probability + "%"
                                }}
                            ></div>

                        </div>

                        <div className="priceGrid">

                            <div>

                                <small>ENTRY</small>

                                <strong>{signal.entry}</strong>

                            </div>

                            <div>

                                <small>STOP</small>

                                <strong>{signal.sl}</strong>

                            </div>

                            <div>

                                <small>TARGET</small>

                                <strong>{signal.tp}</strong>

                            </div>

                        </div>

                        <div className="signalBottom">

                            <span>

                                {signal.age} ago

                            </span>

                            <button>

                                View

                            </button>

                        </div>

                    </div>

                ))}

            </div>

        </section>

    );

}