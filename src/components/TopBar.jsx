
export default function TopBar() {
  return (
    <div className="h-14 flex items-center justify-between px-4 border-b border-border bg-panel">
      <input
        className="bg-[#0B0F14] border border-border px-3 py-1 rounded-md w-96 text-sm"
        placeholder="Search markets, pairs, indices..."
      />
      <div className="flex items-center gap-4 text-sm text-gray-300">
        <span>Trader One</span>
        <span className="text-green">Premium</span>
      </div>
    </div>
  )
}
