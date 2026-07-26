import "./Header.css";
import { useEffect, useState } from "react";

export default function Header() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();

      setTime(
        now.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };

    updateClock();

    const timer = setInterval(updateClock, 1000);

    return () => clearInterval(timer);
  }, []);

  const ticker = [
    { symbol: "XAU/USD", price: "3358.42", dir: "up" },
    { symbol: "EUR/USD", price: "1.08420", dir: "up" },
    { symbol: "GBP/USD", price: "1.26310", dir: "down" },
    { symbol: "USD/JPY", price: "160.22", dir: "down" },
    { symbol: "NAS100", price: "18720", dir: "up" },
    { symbol: "BTC/USD", price: "43210", dir: "up" },
  ];

  return (
    <header className="header">
      <div className="brand">
        <div className="logo">E</div>

        <div className="brandText">
          <h2>ENIAFE</h2>
          <span>Mission Win</span>
        </div>
      </div>

      <div className="headerCenter">
        <select className="symbolSelect">
          <option>XAU/USD</option>
          <option>EUR/USD</option>
          <option>GBP/USD</option>
          <option>USD/JPY</option>
          <option>NAS100</option>
          <option>BTC/USD</option>
        </select>

        <input
          className="searchBox"
          type="text"
          placeholder="Search markets..."
        />
      </div>

      <div className="ticker">
        {ticker.map((item) => (
          <div
            key={item.symbol}
            className="tickerItem"
          >
            <strong>{item.symbol}</strong>

            <span>{item.price}</span>

            <span className={item.dir === "up" ? "green" : "red"}>
              {item.dir === "up" ? "▲" : "▼"}
            </span>
          </div>
        ))}
      </div>

      <div className="headerRight">
        <div className="session">
          🟢 London Open
        </div>

        <div className="clock">
          {time}
        </div>

        <button className="iconButton">
          🔔
        </button>

        <div className="avatar">
          GS
        </div>
      </div>
    </header>
  );
}