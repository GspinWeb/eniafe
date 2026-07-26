
export default function Table(){
  const rows = [
    ["EUR/USD","BUY","92","Bullish","H4","1.0870","1.0980","1.0810"],
    ["GBP/USD","SELL","81","Bearish","H4","1.2670","1.2550","1.2750"],
    ["BTC/USD","BUY","90","Bullish","H4","67000","69500","65000"]
  ]

  return (
    <div className="bg-panel border border-border rounded-xl p-4">
      <div className="font-semibold mb-3">Live Market Opportunities</div>

      <table className="w-full text-xs text-gray-300">
        <thead className="text-gray-500">
          <tr>
            <th className="text-left">Instrument</th>
            <th>Dir</th>
            <th>Str</th>
            <th>Trend</th>
            <th>TF</th>
            <th>Entry</th>
            <th>TP</th>
            <th>SL</th>
          </tr>
        </thead>

        <tbody>
          {rows.map((r,i)=>(
            <tr key={i} className="border-t border-border">
              {r.map((c,j)=>(
                <td key={j} className="py-2 text-center">{c}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
