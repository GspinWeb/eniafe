
export default function RightPanel(){
  return (
    <>
      <div className="bg-panel border border-border p-4 rounded-xl">
        <div className="font-semibold mb-3">Watchlist</div>
        <div className="space-y-2 text-sm text-gray-300">
          <div>EUR/USD <span className="text-green">BUY</span></div>
          <div>XAU/USD <span className="text-red">SELL</span></div>
          <div>BTC/USD <span className="text-green">BUY</span></div>
        </div>
      </div>

      <div className="bg-panel border border-border p-4 rounded-xl">
        <div className="font-semibold mb-3">Market Overview</div>
        <div className="text-xs text-gray-400 space-y-2">
          <div>Forex trending bullish</div>
          <div>Crypto volatility high</div>
          <div>Indices mixed sentiment</div>
        </div>
      </div>
    </>
  )
}
