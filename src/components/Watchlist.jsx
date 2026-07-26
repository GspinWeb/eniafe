export default function Watchlist() {
  const data = [
    { symbol: "EURUSD", price: 1.0842, change: "+0.12%" },
    { symbol: "GBPUSD", price: 1.2631, change: "-0.08%" },
    { symbol: "BTCUSD", price: 43210, change: "+1.44%" },
    { symbol: "NAS100", price: 18720, change: "+0.55%" },
  ];

  return (
    <div>
      <div style={{ fontWeight: "bold", marginBottom: 10 }}>WATCHLIST</div>

      {data.map((item, i) => (
        <div
          key={i}
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "6px 0",
            borderBottom: "1px solid #1f2937",
            fontSize: 13,
          }}
        >
          <span>{item.symbol}</span>
          <span>{item.price}</span>
          <span style={{ color: item.change.includes("+") ? "#22c55e" : "#ef4444" }}>
            {item.change}
          </span>
        </div>
      ))}
    </div>
  );
}