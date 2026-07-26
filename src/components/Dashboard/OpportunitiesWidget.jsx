import "./OpportunitiesWidget.css";

const opportunities = [
  {
    pair: "EUR/USD",
    direction: "BUY",
    tf: "H1",
    probability: 94,
    entry: "1.08420",
    target: "1.08980",
    stop: "1.08140",
    rr: "1 : 3.2",
    status: "ACTIVE"
  },
  {
    pair: "GBP/USD",
    direction: "SELL",
    tf: "M30",
    probability: 91,
    entry: "1.26310",
    target: "1.25820",
    stop: "1.26650",
    rr: "1 : 2.8",
    status: "ACTIVE"
  },
  {
    pair: "XAU/USD",
    direction: "BUY",
    tf: "M15",
    probability: 88,
    entry: "2328.10",
    target: "2344.00",
    stop: "2318.30",
    rr: "1 : 4.0",
    status: "WATCH"
  },
  {
    pair: "NAS100",
    direction: "BUY",
    tf: "H4",
    probability: 96,
    entry: "18720",
    target: "18960",
    stop: "18610",
    rr: "1 : 3.7",
    status: "ACTIVE"
  },
  {
    pair: "BTC/USD",
    direction: "SELL",
    tf: "H1",
    probability: 89,
    entry: "43210",
    target: "42540",
    stop: "43580",
    rr: "1 : 2.9",
    status: "WATCH"
  }
];

export default function OpportunitiesWidget() {

    return (

        <section className="opportunitiesWidget">

            <div className="opportunitiesHeader">

                <div>

                    <h2>Trading Opportunities</h2>

                    <small>
                        Highest Probability Setups
                    </small>

                </div>

                <button>

                    View All

                </button>

            </div>

            <table className="opportunitiesTable">

                <thead>

                    <tr>

                        <th>Pair</th>

                        <th>Direction</th>

                        <th>TF</th>

                        <th>Probability</th>

                        <th>Entry</th>

                        <th>Target</th>

                        <th>Stop</th>

                        <th>R:R</th>

                        <th>Status</th>

                    </tr>

                </thead>

                <tbody>

                    {opportunities.map((trade)=>(

                        <tr key={trade.pair+trade.tf}>

                            <td>

                                <strong>{trade.pair}</strong>

                            </td>

                            <td>

                                <span
                                    className={
                                        trade.direction==="BUY"
                                        ? "buyBadge"
                                        : "sellBadge"
                                    }
                                >

                                    {trade.direction}

                                </span>

                            </td>

                            <td>{trade.tf}</td>

                            <td>

                                <span className="probability">

                                    {trade.probability}%

                                </span>

                            </td>

                            <td>{trade.entry}</td>

                            <td>{trade.target}</td>

                            <td>{trade.stop}</td>

                            <td>{trade.rr}</td>

                            <td>

                                <span
                                    className={
                                        trade.status==="ACTIVE"
                                        ? "activeStatus"
                                        : "watchStatus"
                                    }
                                >

                                    {trade.status}

                                </span>

                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </section>

    );

}