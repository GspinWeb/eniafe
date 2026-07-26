import "./ChartShell.css";
import { useState, useEffect } from "react";

import ChartEngine from "../../engines/ChartEngine/ChartEngine";
import MarketShell from "../../engines/MarketShell/MarketShell";

export default function ChartShell() {
  const [symbol, setSymbol] = useState(MarketShell.getSymbol());
  const [timeframe, setTimeframe] = useState(MarketShell.getTimeframe());

  useEffect(() => {
    const update = (shell) => {
      setSymbol(shell.getSymbol());
      setTimeframe(shell.getTimeframe());
    };

    MarketShell.subscribe(update);

    return () => MarketShell.unsubscribe(update);
  }, []);

  return (
    <div className="chartShell">

      <div className="chartTopBar">

        <div className="leftTools">

          <button title="Crosshair">✛</button>
          <button title="Trend Line">╱</button>
          <button title="Rectangle">▭</button>
          <button title="Horizontal Line">━</button>
          <button title="Text">T</button>
          <button title="Measure">⊕</button>

        </div>

        <div className="chartTitle">

          <strong>{symbol}</strong>

          <span>{timeframe}</span>

          <span className="liveDot"></span>

          <small>LIVE</small>

        </div>

        <div className="rightTools">

          <button>Indicators</button>
          <button>Templates</button>
          <button>Replay</button>
          <button>Snapshot</button>
          <button>Fullscreen</button>

        </div>

      </div>

      <div className="chartViewport">

        <ChartEngine />

      </div>

    </div>
  );
}