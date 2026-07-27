import "./ChartShell.css";

import ChartEngine from "../../engines/ChartEngine/ChartEngine";

export default function ChartShell() {

  return (

    <div className="chartShell">

      <div className="chartTopBar">

        <div className="leftTools">

          <button>M1</button>
          <button>M5</button>
          <button>M15</button>
          <button>H1</button>

        </div>

        <div className="chartTitle">

          <strong>XAUUSD</strong>

          <small>Mission Win Terminal</small>

        </div>

        <div className="rightTools">

          <button>Indicators</button>
          <button>Objects</button>
          <button>Fullscreen</button>

        </div>

      </div>

      <div className="chartViewport">

        <ChartEngine />

      </div>

    </div>

  );

}