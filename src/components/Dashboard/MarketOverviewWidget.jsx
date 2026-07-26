import "./MarketOverviewWidget.css";

const markets = [
  {
    name: "Forex",
    trend: "Bullish",
    strength: 82,
    color: "green"
  },
  {
    name: "Indices",
    trend: "Bullish",
    strength: 74,
    color: "green"
  },
  {
    name: "Commodities",
    trend: "Neutral",
    strength: 51,
    color: "orange"
  },
  {
    name: "Crypto",
    trend: "Bearish",
    strength: 63,
    color: "red"
  },
  {
    name: "Bonds",
    trend: "Bullish",
    strength: 69,
    color: "green"
  }
];

export default function MarketOverviewWidget() {

    return (

        <section className="marketOverview">

            <div className="marketHeader">

                <div>

                    <h2>Market Overview</h2>

                    <small>Global Market Sentiment</small>

                </div>

                <button>

                    Details

                </button>

            </div>

            <div className="marketList">

                {markets.map((market)=>(

                    <div
                        key={market.name}
                        className="marketCard"
                    >

                        <div className="marketTop">

                            <strong>

                                {market.name}

                            </strong>

                            <span
                                className={
                                    market.color
                                }
                            >

                                {market.trend}

                            </span>

                        </div>

                        <div className="strengthRow">

                            <span>

                                Strength

                            </span>

                            <span>

                                {market.strength}%

                            </span>

                        </div>

                        <div className="strengthBar">

                            <div
                                className={`fill ${market.color}`}
                                style={{
                                    width:
                                        market.strength+"%"
                                }}
                            ></div>

                        </div>

                    </div>

                ))}

            </div>

        </section>

    );

}
