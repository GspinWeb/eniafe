
export default function Ticker() {
  const items = [
    "EUR/USD 1.0894 +0.35%",
    "GBP/USD 1.2671 +0.21%",
    "USD/JPY 154.89 -0.12%",
    "XAU/USD 2335 +0.67%",
    "BTC/USD 67423 +1.32%"
  ]

  return (
    <div className="flex gap-6 px-4 py-2 text-xs bg-[#0E141B] border-b border-border overflow-x-auto">
      {items.map((t,i)=>(
        <span key={i} className="whitespace-nowrap text-gray-300">{t}</span>
      ))}
    </div>
  )
}
