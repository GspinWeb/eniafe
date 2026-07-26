//====================================================
//
// ENIAFE TERMINAL
//
// Module : MarketDataEngine
// Layer  : Engine
// Version: Alpha 0.3
//
// Prepared by El-Shaaddai Trends
//
//====================================================

export function createInitialData() {
  const candles = [];

  let time = Math.floor(Date.now() / 1000) - (100 * 60);
  let price = 3350;

  for (let i = 0; i < 100; i++) {
    const open = price;

    // Larger candle body
    const close = open + (Math.random() - 0.5) * 35;

    // Larger wicks
    const high = Math.max(open, close) + Math.random() * 12;
    const low = Math.min(open, close) - Math.random() * 12;

    candles.push({
      time,
      open,
      high,
      low,
      close,
    });

    price = close;
    time += 60;
  }

  return candles;
}

export function nextCandle(previous) {
  const open = previous.close;

  // Larger candle body
  const close = open + (Math.random() - 0.5) * 35;

  // Larger wicks
  const high = Math.max(open, close) + Math.random() * 12;
  const low = Math.min(open, close) - Math.random() * 12;

  return {
    time: previous.time + 60,
    open,
    high,
    low,
    close,
  };
}