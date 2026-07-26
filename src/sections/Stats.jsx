
export default function Stats(){
  const cards = [
    ["Total Opportunities","128"],
    ["High Probability","45"],
    ["Watchlist","16"],
    ["Alerts","7"]
  ]

  return (
    <div className="grid grid-cols-4 gap-3">
      {cards.map(([t,v])=>(
        <div key={t} className="bg-panel border border-border p-4 rounded-xl">
          <div className="text-xs text-gray-400">{t}</div>
          <div className="text-xl font-bold mt-1">{v}</div>
          <div className="h-1 bg-green mt-3 w-2/3 rounded"></div>
        </div>
      ))}
    </div>
  )
}
