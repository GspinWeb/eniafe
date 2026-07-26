//====================================================
//
// ENIAFE TERMINAL
//
// Module : MarketShell
// Layer  : Engine
// Version: Alpha 0.2
//
// Prepared by El-Shaaddai Trends
//
//====================================================

class MarketShell {

    constructor() {

        this.symbol = "XAU/USD";
        this.timeframe = "M1";
        this.candles = [];
        this.listeners = [];

    }

    subscribe(callback) {

        this.listeners.push(callback);

    }

    unsubscribe(callback) {

        this.listeners =
            this.listeners.filter(fn => fn !== callback);

    }

    notify() {

        this.listeners.forEach(fn => fn(this));

    }

    setSymbol(symbol) {

        this.symbol = symbol;
        this.notify();

    }

    getSymbol() {

        return this.symbol;

    }

    setTimeframe(timeframe) {

        this.timeframe = timeframe;
        this.notify();

    }

    getTimeframe() {

        return this.timeframe;

    }

    setCandles(candles) {

        this.candles = candles;

    }

    getCandles() {

        return this.candles;

    }

    appendCandle(candle) {

        this.candles.push(candle);

    }

}

export default new MarketShell();