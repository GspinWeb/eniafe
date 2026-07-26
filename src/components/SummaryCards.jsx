const cards = [
  {
    title: "Active Opportunities",
    value: "18",
    footer: "+4 Today",
    color: "green",
  },
  {
    title: "Market Trend",
    value: "Bullish",
    footer: "68% Strength",
    color: "green",
  },
  {
    title: "Open Markets",
    value: "07",
    footer: "London Session",
    color: "green",
  },
  {
    title: "Signals",
    value: "24",
    footer: "Waiting Review",
    color: "red",
  },
];

export default function SummaryCards() {
  return (
    <div className="summaryGrid">
      {cards.map((card) => (
        <div className="summaryCard" key={card.title}>
          <div className="summaryTitle">{card.title}</div>

          <div className="summaryValue">
            {card.value}
          </div>

          <div className={card.color}>
            {card.footer}
          </div>
        </div>
      ))}
    </div>
  );
}