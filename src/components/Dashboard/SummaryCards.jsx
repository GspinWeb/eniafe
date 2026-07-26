import "./SummaryCards.css";

const cards = [
  {
    title: "Active Signals",
    value: "18",
    change: "+4 Today",
    color: "green",
  },
  {
    title: "Market Bias",
    value: "Bullish",
    change: "68% Strength",
    color: "green",
  },
  {
    title: "Scanner Hits",
    value: "42",
    change: "11 New",
    color: "green",
  },
  {
    title: "Watchlist",
    value: "24",
    change: "3 Moving",
    color: "red",
  },
];

export default function SummaryCards() {
  return (
    <section className="summaryCards">

      {cards.map((card) => (

        <div
          key={card.title}
          className="summaryCard"
        >

          <div className="summaryHeader">

            <span>
              {card.title}
            </span>

            <div className={`status ${card.color}`}></div>

          </div>

          <h1>

            {card.value}

          </h1>

          <p className={card.color}>

            {card.change}

          </p>

        </div>

      ))}

    </section>
  );
}