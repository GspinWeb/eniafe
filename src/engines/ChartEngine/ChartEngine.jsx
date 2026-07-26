import { useEffect, useRef } from "react";
import {
  createChart,
  CandlestickSeries,
} from "lightweight-charts";

import "./ChartEngine.css";

import {
  createInitialData,
  nextCandle,
} from "../MarketDataEngine/MarketDataEngine";

export default function ChartEngine() {

  const containerRef = useRef(null);

  useEffect(() => {

    if (!containerRef.current) return;

    const chart = createChart(containerRef.current, {

      width: containerRef.current.clientWidth,

      height: containerRef.current.clientHeight,

      layout: {

        background: {
          color: "#111915",
        },

        textColor: "#b7c8be",

        fontSize: 12,

      },

      grid: {

        vertLines: {
          color: "#1d2a22",
        },

        horzLines: {
          color: "#1d2a22",
        },

      },

      rightPriceScale: {

        borderColor: "#21422b",

      },

      timeScale: {

        borderColor: "#21422b",

        timeVisible: true,

        secondsVisible: false,

      },

    });

    const series = chart.addSeries(CandlestickSeries);

    series.priceScale().applyOptions({

      scaleMargins: {

        top: 0.10,

        bottom: 0.20,

      },

    });

    const candles = createInitialData();

    series.setData(candles);

    let last = candles[candles.length - 1];

    const timer = setInterval(() => {

      last = nextCandle(last);

      series.update(last);

      chart.timeScale().scrollToRealTime();

    }, 2000);

    const resizeObserver = new ResizeObserver(() => {

      if (!containerRef.current) return;

      chart.resize(
        containerRef.current.clientWidth,
        containerRef.current.clientHeight
      );

    });

    resizeObserver.observe(containerRef.current);

    return () => {

      clearInterval(timer);

      resizeObserver.disconnect();

      chart.remove();

    };

  }, []);

  return (

    <div
      ref={containerRef}
      className="chartEngine"
    />

  );

}