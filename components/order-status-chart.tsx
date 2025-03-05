"use client"

export function OrderStatusChart() {
  const data = [
    { name: "Pending", value: 15, color: "#94a3b8" },
    { name: "In Progress", value: 10, color: "#3b82f6" },
    { name: "Completed", value: 25, color: "#22c55e" },
  ]

  const total = data.reduce((acc, item) => acc + item.value, 0)

  return (
    <div className="w-full">
      <div className="relative h-[240px] w-[240px] mx-auto">
        {/* Render pie chart using CSS conic gradient */}
        <div className="relative h-full w-full rounded-full overflow-hidden">
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: `conic-gradient(
                ${data[0].color} 0% ${(data[0].value / total) * 100}%, 
                ${data[1].color} ${(data[0].value / total) * 100}% ${((data[0].value + data[1].value) / total) * 100}%, 
                ${data[2].color} ${((data[0].value + data[1].value) / total) * 100}% 100%
              )`,
            }}
          />
          <div className="absolute inset-[15%] bg-card rounded-full flex items-center justify-center">
            <div className="text-center">
              <div className="text-3xl font-bold">{total}</div>
              <div className="text-xs text-muted-foreground">Total Orders</div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 flex justify-center gap-6">
        {data.map((entry) => (
          <div key={entry.name} className="flex items-center text-sm">
            <div className="mr-1 h-3 w-3" style={{ backgroundColor: entry.color }}></div>
            <span>
              {entry.name}: {entry.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

